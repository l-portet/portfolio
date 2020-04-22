<template>
  <div :class="{ page: true, 'is-mobile-or-tablet': isMobileOrTablet }">
    <the-dynamic-bg :raw-bg="bg" />
    <the-header />
    <div class="about">
      <h1>Hi, I’m Lucas <img src="@/static/icons/waving-hand.png" /></h1>
      <p>
        I'm a french interdisciplinary developer working at the crossroads of
        technology, design, and marketing.
      </p>
      <p>
        Over the last years, I've had the chance to help companies validate,
        prototype and launch digital products that help improve how we live
        today.
      </p>
      <p>
        I love to craft interfaces from A to Z. I see my role as the bridge
        between the chaos of the machine and human language.
      </p>
      <p>
        My work is pretty inspired by folks like
        <a href="https://codepen.io/aaroniker" target="_blank">Aaron Iker</a> or
        <a href="https://hakim.se/" target="_blank">Hakim El Hattab</a> on the interfaces and <a href="https://evanyou.me/">Evan You</a> or <a href="https://tinyclouds.org/">Ryan Dahl</a> on the code side.
      </p>
      <p>
        Feel free to <a href="/resume.pdf" target="_blank">grab my resume</a> or
        reach me out.
      </p>
    </div>
    <the-contact
      @contacthover="setBackground"
      @contactleave="unsetBackground"
    />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheContact from '@/components/TheContact';
import TheDynamicBg from '@/components/TheDynamicBg';
import TheFooter from '@/components/TheFooter';

export default {
  transition: 'fade',
  components: {
    TheHeader,
    TheContact,
    TheDynamicBg,
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
@import '@/assets/styles/pages/about.scss';
</style>
