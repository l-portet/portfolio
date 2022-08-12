<template>
  <v-stage
    class="background-canvas"
    :config="{ width: windowWidth, height: windowHeight }"
  >
    <v-layer>
      <v-rect
        v-for="(background, index) in backgrounds"
        :key="index"
        :config="{
          ...baseConfig,
          fillLinearGradientColorStops: [0, background.from, 1, background.to]
        }"
        :ref="`background-${index}`"
      ></v-rect>
    </v-layer>
  </v-stage>
</template>

<script>
import windowSize from '@/mixins/window-size.js';
import { mapState } from 'vuex';

export default {
  mixins: [windowSize],
  data() {
    return {
      duration: 500,
      backgrounds: [],
      lastOperation: [''],
      animations: []
    };
  },
  computed: {
    ...mapState(['background']),
    baseConfig() {
      return {
        opacity: 0,
        width: this.windowWidth,
        height: this.windowHeight,
        fillLinearGradientStartPoint: { x: 0, y: this.windowHeight },
        fillLinearGradientEndPoint: { x: this.windowWidth, y: 0 }
      };
    }
  },
  watch: {
    '$store.state.background'() {
      this.onBackgroundChange();
    }
  },
  methods: {
    onBackgroundChange() {
      const [opName, opBackground] = this.lastOperation;
      if (this.background !== null) {
        if (
          opName === 'setBackground' &&
          opBackground.from === this.background.from &&
          opBackground.to === this.background.to
        ) {
          return;
        }
        this.setBackground(this.background);
      } else {
        if (opName === 'unsetBackground') {
          return;
        }
        this.unsetBackground();
      }
    },
    setBackground(background) {
      if (!background || !background.from || !background.to) {
        return;
      }
      this.lastOperation = ['setBackground', background];
      this.backgrounds.push(background);

      this.$nextTick(() => {
        const rects = this.getBackgroundRects();
        const rect = rects[rects.length - 1];

        if (rect) {
          this.revealBackground(rect);
        }
      });
    },
    revealBackground(rect) {
      return new Promise(resolve => {
        const onFrame = ({ time, node }) => {
          const opacity = time / this.duration;
          node.setOpacity(opacity);
        };
        const onEnd = ({ node }) => {
          node.setOpacity(1);
          resolve();
        };

        this.animate(rect, this.duration, onFrame, onEnd);
      });
    },
    unsetBackground() {
      this.lastOperation = ['unsetBackground'];
      const rects = this.getBackgroundRects();

      for (const rect of rects) {
        const node = rect.getNode();
        if (node.getOpacity() !== 0) {
          this.hideBackground(rect);
        }
      }
    },
    hideBackground(rect) {
      return new Promise(resolve => {
        const onFrame = ({ time, node }) => {
          const opacity = 1 - time / this.duration;
          node.setOpacity(opacity);
        };
        const onEnd = ({ node }) => {
          node.setOpacity(0);
          resolve();
        };

        this.animate(rect, this.duration, onFrame, onEnd);
      });
    },
    getBackgroundRects() {
      const rects = [];
      for (const prop in this.$refs) {
        const [rect] = this.$refs[prop];
        if (rect && prop.startsWith('background-')) {
          rects.push(rect);
        }
      }
      return rects;
    },
    animate(rect, duration, onFrame, onEnd) {
      let hasEnded = false;
      const node = rect.getNode();
      onEnd = onEnd.bind(onEnd, { node });

      const konvaAnimation = new Konva.Animation(function(frame) {
        const { time } = frame;
        const args = { time, node };

        if (time < duration) {
          onFrame(args);
        } else {
          if (!hasEnded) {
            hasEnded = true;
            konvaAnimation.stop();
            onEnd();
          }
        }
      }, rect);

      for (const animation of this.animations) {
        const { konvaAnimation, onEnd } = animation;
        if (animation.ended || !konvaAnimation.isRunning()) {
          continue;
        }
        onEnd();
        konvaAnimation.stop();
        animation.ended = true;
      }
      const animation = {
        konvaAnimation,
        onEnd
      };
      this.animations.push(animation);
      konvaAnimation.start();
    }
  }
};
</script>
