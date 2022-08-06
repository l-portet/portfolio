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
      location: `34.0201613"N -118.6919205,10"E`
    };
  },
  computed: {
    locationLink() {
      return `https://www.google.com/maps/place/${this.location}`;
    }
  },
  mounted() {},
  methods: {}
};
</script>
