<template>
  <header :class="{ scrolled, 'scrolled-anim-fix': scrolledAnimFix }">
    <nuxt-link to="/" class="logo">
      Lucas Portet
    </nuxt-link>
    <nav>
      <nuxt-link v-if="$route.name === 'about'" to="/">Works</nuxt-link>
      <nuxt-link v-else to="/about">About</nuxt-link>
    </nav>
  </header>
</template>
<script>
export default {
  data() {
    return {
      scrolled: false,
      scrolledAnimFix: false,
      timeout: null
    };
  },
  mounted() {
    console.log('ploplopplop')
    this.checkScroll();
    document.addEventListener('scroll', this.checkScroll);
  },
  methods: {
    checkScroll() {
      if (window.scrollY > 40 && !this.scrolled) {
        this.scrolled = true;
        this.timeout = setTimeout(() => {
          this.scrolledAnimFix = true;
        }, 200);
      } else if (window.scrollY <= 40 && this.scrolled) {
        clearTimeout(this.timeout);
        this.scrolled = false;
        this.scrolledAnimFix = false;
      }
    }
  }
};
</script>
