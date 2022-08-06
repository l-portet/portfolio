<template>
  <div class="bg-wrapper">
    <div class="bg-wrapper-item"></div>
    <div
      v-for="(bg, index) in bgItems"
      :key="index"
      :style="
        `background: linear-gradient(to top right, ${bg.from}, ${bg.to});`
      "
      class="bg-wrapper-item-color"
    ></div>
  </div>
</template>
<script>
import styleVars from '@/assets/styles/vars.scss';

export default {
  props: {
    rawBg: {
      type: Object,
      timeout: null
    }
  },
  data() {
    return {
      bgItems: [],
      defaultBg: {
        from: null,
        to: null
      }
    };
  },
  watch: {
    rawBg(val) {
      if (val !== null) this.setBackground(val);
      else this.unsetBackground();
    }
  },
  mounted() {
    this.extractStyleVars();
  },
  methods: {
    extractStyleVars() {
      let rawGradient = styleVars['default-bg-gradient'];

      rawGradient = rawGradient.split(',');
      this.defaultBg.from = rawGradient[1];
      // Remove the ')' character at end
      this.defaultBg.to = rawGradient[2].substring(
        0,
        rawGradient[2].length - 1
      );
    },
    setBackground(bg) {
      if (!bg || !bg.from || !bg.to) return;
      clearTimeout(this.timeout);

      this.bgItems.push(bg);
      this.clearBgItems();
    },
    unsetBackground() {
      clearTimeout(this.timeout);
      this.bgItems.push(this.defaultBg);
      this.clearBgItems();
    },
    clearBgItems() {
      this.timeout = setTimeout(() => {
        this.bgItems.splice(0, this.bgItems.length - 3);
      }, 500);
    }
  }
};
</script>
