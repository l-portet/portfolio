<template>
  <footer>
    <a href="https://www.youtube.com/watch?v=EpPApVwBs-U" target="_blank"
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
      location: `48°07'08.7"N 1°40'48.8"W`
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
