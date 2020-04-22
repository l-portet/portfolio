<template>
  <div :class="{ page: true, 'is-mobile-or-tablet': isMobileOrTablet }">
    <the-dynamic-bg :raw-bg="bg" />
    <the-blob />
    <div class="hero">
      <h1>
        I’m Lucas, a full-stack developer<br />
        focused on making meaningful<br />
        interfaces and experiences.
      </h1>
    </div>
    <the-header />
    <the-works @workhover="setBackground" @workleave="unsetBackground" />
    <the-contact
      @contacthover="setBackground"
      @contactleave="unsetBackground"
    />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheWorks from '@/components/TheWorks';
import TheContact from '@/components/TheContact';
import TheDynamicBg from '@/components/TheDynamicBg';
import TheBlob from '@/components/TheBlob';
import TheFooter from '@/components/TheFooter';

export default {
  transition: 'fade',
  components: {
    TheHeader,
    TheWorks,
    TheContact,
    TheDynamicBg,
    TheBlob,
    TheFooter
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
