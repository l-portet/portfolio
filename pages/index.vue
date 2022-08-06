<template>
  <div :class="{ page: true, 'is-mobile-or-tablet': isMobileOrTablet }">
    <dynamic-bg :raw-bg="bg" />
    <blob />
    <div class="hero">
      <h1>
        I’m Lucas, an interdisciplinary<br />
        software engineer focused on<br />
        crafting meaningful experiences.
      </h1>
    </div>
    <page-header />
    <works @workhover="setBackground" @workleave="unsetBackground" />
    <contact @contacthover="setBackground" @contactleave="unsetBackground" />
    <footer />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import DynamicBg from '@/components/DynamicBg';
import Blob from '@/components/Blob';
import Footer from '@/components/Footer';

export default {
  transition: 'fade',
  components: {
    PageHeader,
    Works,
    Contact,
    DynamicBg,
    Blob,
    Footer
  },
  data() {
    return {
      bg: null,
      isMobileOrTablet: false
    };
  },
  mounted() {
    this.isMobileOrTablet = this.$isMobileOrTablet();
  },
  methods: {
    setBackground(bg) {
      this.bg = bg;
    },
    unsetBackground() {
      this.bg = null;
    }
  }
};
</script>

<style media="screen" lang="scss">
@import '@/assets/styles/pages/index.scss';
</style>
