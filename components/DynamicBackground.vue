<template>
  <div class="background-wrapper">
    <div class="background-wrapper-item"></div>
    <div
      v-for="(background, index) in backgroundItems"
      :key="index"
      :style="
        `background: linear-gradient(to top right, ${background.from}, ${background.to});`
      "
      class="background-wrapper-item-color"
    ></div>
  </div>
</template>

<script>
import styleVars from '@/assets/styles/vars.scss';

export default {
  data() {
    return {
      timeout: null,
      backgroundItems: [],
      defaultBackground: {
        from: null,
        to: null
      }
    };
  },
  mounted() {
    this.extractStyleVars();
    // We have to trick because Vue doesn't watch getters
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'SET_BACKGROUND') {
        this.onBackgroundChange(state.background);
      }
    });
  },
  methods: {
    extractStyleVars() {
      let rawGradient = styleVars['default-background-gradient'];

      rawGradient = rawGradient.split(',');
      this.defaultBackground.from = rawGradient[1];
      // Remove the ')' character at end
      this.defaultBackground.to = rawGradient[2].substring(
        0,
        rawGradient[2].length - 1
      );
    },
    onBackgroundChange(background) {
      console.log('onBackgroundChange', background);
      if (background !== null) this.setBackground(background);
      else this.unsetBackground();
    },
    setBackground(background) {
      if (!background || !background.from || !background.to) return;
      clearTimeout(this.timeout);

      this.backgroundItems.push(background);
      this.clearBackgroundItems();
    },
    unsetBackground() {
      clearTimeout(this.timeout);
      this.backgroundItems.push(this.defaultBackground);
      this.clearBackgroundItems();
    },
    clearBackgroundItems() {
      this.timeout = setTimeout(() => {
        this.backgroundItems.splice(0, this.backgroundItems.length - 3);
      }, 500);
    }
  }
};
</script>
