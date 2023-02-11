<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :viewBox="`0 0 ${windowWidth} ${windowHeight}`"
    version="1.1"
    class="dynamic-background"
  >
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop :stop-color="activeBackground.from" offset="0%" />
        <stop :stop-color="activeBackground.to" offset="100%" />
      </linearGradient>
    </defs>

    <rect
      x="0"
      y="0"
      :width="windowWidth"
      :height="windowHeight"
      fill="url(#gradient)"
    />
  </svg>
</template>

<script>
import windowSize from '@/mixins/window-size.js';
import { mapState } from 'vuex';

const DEFAULT_BACKGROUNDS = {
  all: {
    from: '#24282c',
    to: '#3c434a'
  },
  about: {
    from: '#4718B0',
    to: '#AA50DA'
  }
};

export default {
  mixins: [windowSize],
  data() {
    return {};
  },
  computed: {
    ...mapState(['background']),
    defaultBackground() {
      return this.$nuxt.$route.name === 'about'
        ? DEFAULT_BACKGROUNDS.about
        : DEFAULT_BACKGROUNDS.all;
    },
    activeBackground() {
      return this.background || this.defaultBackground;
    }
  }
};
</script>
