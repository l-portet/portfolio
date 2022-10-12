export default {
  data() {
    return {
      windowWidth: 0,
      windowHeight: 0
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  }
};
