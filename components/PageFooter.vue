<template>
  <footer>
    <a
      href="https://www.youtube.com/watch?v=44Q5VePSaCs"
      target="_blank"
      class="good-vibes"
      >Take me to good vibes</a
    >
    <a class="footer-loc" :href="locationLink" target="_blank">
      {{ location }}
    </a>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      location: `33°48'01.5"N 118°17'46.3"W`
    };
  },
  computed: {
    locationLink() {
      const locationParam = encodeURIComponent(this.location);
      return `https://www.google.com/maps/place?q=${locationParam}`;
    }
  },
  mounted() {},
  methods: {}
};
</script>
