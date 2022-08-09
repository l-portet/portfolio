<template>
  <div style="width: 100%" :class="{ 'is-mobile-or-tablet': isMobileOrTablet }">
    <dynamic-background />
    <page-header />
    <nuxt style="width: 100%" />
    <page-footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import PageHeader from '@/components/PageHeader';
import DynamicBackground from '@/components/DynamicBackground';
import PageFooter from '@/components/PageFooter';

export default {
  components: {
    PageHeader,
    DynamicBackground,
    PageFooter
  },
  data() {
    return {
      isMobileOrTablet: false
    };
  },
  mounted() {
    this.logEasterEgg();
    this.isMobileOrTablet = this.$isMobileOrTablet();
  },
  watch: {
    $route() {
      this.resetBackground();
    }
  },
  methods: {
    ...mapActions(['resetBackground']),
    logEasterEgg() {
      const titleStyle = `padding: 20px; background-color: darkblue; color: white; font-size: 1.5em;`;
      const subtitleStyle = `padding: 20px; background-color: darkblue; color: white; font-style:
         italic; font-size: 1,5em;`;
      console.log(
        '%cWelcome to the real world.%cMorpheus, Matrix',
        titleStyle,
        subtitleStyle
      );
    }
  }
};
</script>

<style></style>
