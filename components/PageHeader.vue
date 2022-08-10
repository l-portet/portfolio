<template>
  <header :class="{ scrolled, 'scrolled-anim-fix': scrolledAnimFix }">
    <nuxt-link to="/" class="logo">
      Lucas Portet
    </nuxt-link>
    <nav>
      <div v-switch="$route.name">
        <nuxt-link v-case="'about'" to="/">Works</nuxt-link>
        <nuxt-link v-case="'index'" to="/about">About</nuxt-link>
      </div>
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
    this.onScroll();
    document.addEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
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
