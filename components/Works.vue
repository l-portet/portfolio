<template>
  <div class="works">
    <h2>Some of my works</h2>
    <a
      v-for="(work, index) in works"
      :key="index"
      :class="{ work: true, focused: focusedIndex === index }"
      :ref="`work-${index}`"
      :href="work.href"
      @mouseover="focusWork(index)"
      @mouseleave="unFocusWork()"
      target="_blank"
    >
      <div class="work-inner">
        <h3 class="work-name">{{ work.title }}</h3>
        <p class="work-desc">{{ work.description }}</p>
        <p class="work-tags">{{ work.tags }}</p>
        <img
          src="@/static/icons/return-arrow.png"
          alt="return arrow icon black"
        />
      </div>
    </a>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import WORKS from '@/content/works.json';

export default {
  data() {
    return {
      lastFocusedIndex: -1,
      focusedIndex: -1
    };
  },
  computed: {
    works() {
      return WORKS.map(work => ({ ...work, tags: work.tags.join(', ') }));
    }
  },
  mounted() {
    if (this.$isMobileOrTablet()) {
      document.addEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    ...mapActions(['updateBackground', 'resetBackground']),
    handleScroll() {
      let check = false;
      let i = 0;

      for (; check === false; i++) {
        check = this.checkElementDistance(i);
      }

      if (check === null || !i) {
        this.unFocusWork();
      }

      i--;
      this.focusWork(i);
    },
    checkElementDistance(index) {
      const el = this.$refs[`work-${index}`] && this.$refs[`work-${index}`][0];
      if (!el) {
        return null;
      }
      const elTopDistance = el.getBoundingClientRect().top;
      const elBottomDistance = el.getBoundingClientRect().bottom;
      const breakpoint = window.innerHeight / 2;

      if (elTopDistance - breakpoint < 0 && elBottomDistance - breakpoint > 0) {
        return true;
      }
      return false;
    },
    focusWork(i) {
      const work = this.works[i];

      this.focusedIndex = i;

      if (!work || !work.gradient) {
        return;
      }
      if (this.focusedIndex !== this.lastFocusedIndex) {
        this.updateBackground(work.gradient);
      }
      this.lastFocusedIndex = this.focusedIndex;
    },
    unFocusWork() {
      this.focusedIndex = -1;
      if (this.focusedIndex !== this.lastFocusedIndex) {
        this.resetBackground();
      }
      this.lastFocusedIndex = -1;
    }
  }
};
</script>
