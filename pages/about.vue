<template>
  <div :class="{ page: true, 'is-mobile-or-tablet': isMobileOrTablet }">
    <dynamic-bg :raw-bg="bg" />
    <page-header />
    <div class="about">
      <div class="profile-picture"></div>
      <h1>Hi, I’m Lucas <img src="@/static/icons/waving-hand.png" /></h1>
      <p>
        I'm a french interdisciplinary software engineer working at the
        crossroads of technology, marketing, and design.
      </p>
      <p>
        I'm currently building apps that make ecommerce sell more
        <a href="https://macas.studio" target="_blank">@MACAS Studio</a>.
      </p>
      <p>
        With a strong entrepreneur mindset, I've had the chance to help
        companies validate, prototype and build digital products in the past
        years.
      </p>
      <p>
        Feel free to
        <a href="/resume-en.pdf" target="_blank">grab my resume</a>.
      </p>
    </div>
    <contact
      @contacthover="setBackground"
      @contactleave="unsetBackground"
    />
    <footer />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader';
import Contact from '@/components/Contact';
import DynamicBg from '@/components/DynamicBg';
import Footer from '@/components/Footer';

export default {
  transition: 'fade',
  components: {
    PageHeader,
    Contact,
    DynamicBg,
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
@import '@/assets/styles/pages/about.scss';
</style>
