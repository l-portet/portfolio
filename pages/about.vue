<template>
  <div :class="{ page: true, 'is-mobile-or-tablet': isMobileOrTablet }">
    <the-dynamic-bg :raw-bg="bg" />
    <the-header />
    <div class="about">
      <div class="profile-picture"></div>
      <h1>Hi, I’m Lucas <img src="@/static/icons/waving-hand.png" /></h1>
      <p>
        I'm a french interdisciplinary maker working at the crossroads of
        technology, marketing, and design.
        Currently working <a href="https://deux.io" target="_blank">@deux.io</a>.
      </p>
      <p>
        With a strong entrepreneur mindset, I've had the chance to help
        companies validate, prototype and build digital products.
      </p>
      <p>
        My work is pretty inspired by folks like
        <a href="https://codepen.io/aaroniker" target="_blank">Aaron Iker</a> or
        <a href="https://hakim.se/" target="_blank">Hakim El Hattab</a> on the
        interfaces and
        <a href="https://evanyou.me/" target="_blank">Evan You</a> or
        <a href="https://tinyclouds.org/" target="_blank">Ryan Dahl</a> on the
        code side.
      </p>
      <p>
        If I had to quote some useful resources I use, check, or help me almost
        every day, I would talk about
        <a href="https://growth.design">growth.design</a>,
        <a href="https://daily.dev">daily.dev</a>, and
        <a href="https://www.indiehackers.com/">Indie Hackers</a>.
      </p>
      <br />
      <p>
        Feel free to
        <a href="/resume-en.pdf" target="_blank">grab my resume</a> (speaking
        the language of Molière? Here's a
        <a href="/resume-fr.pdf" target="_blank">french version</a>).
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
