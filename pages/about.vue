<template>
  <div class="page">
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
    <contact />
  </div>
</template>

<script>
import Contact from '@/components/Contact';

export default {
  components: {
    Contact
  }
};
</script>

<style media="screen" lang="scss">
@import '@/assets/styles/pages/about.scss';
</style>
