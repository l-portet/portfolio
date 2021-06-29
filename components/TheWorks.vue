<template>
  <div class="works">
    <h2>Some of my works</h2>
    <a
      :class="{ work: true, focused: focusedIndex === index }"
      v-for="(work, index) in works"
      :key="index"
      :ref="`work-${index}`"
      @mouseover="$emit('workhover', work.gradient)"
      @mouseleave="$emit('workleave')"
      :href="work.href"
      target="_blank"
    >
      <div class="work-inner">
        <h3 class="work-name">{{ work.name }}</h3>
        <p class="work-desc">{{ work.desc }}</p>
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
export default {
  data() {
    return {
      focusedIndex: -1,
      dataWorks: [
        {
          name: 'MACAS Studio',
          desc: 'Building apps that make ecommerce sell more',
          tags: ['shopify', 'fullstack'],
          gradient: {
            from: '#fb8085',
            to: '#f9c1b1'
          },
          href: 'https://macas.studio'
        },
        {
          name: 'Nocode Jungle',
          desc: 'Bubble plugins & content',
          tags: ['front', 'nocode'],
          gradient: {
            from: '#0a1062',
            to: '#000ae3'
          },
          href:
            'https://bubble.io/contributor/nocodejungle-1596293564070x233339286665744000'
        },
        {
          name: 'Corona tracker',
          desc:
            'An interactive covid 19 tracking app with real-time data updates',
          tags: ['ui', 'front', 'scraping'],
          gradient: {
            from: '#B02C18',
            to: '#E63A8A'
          },
          href: 'https://github.com/l-portet/coronavirus-data'
        },
        {
          name: 'Yellow scraper',
          desc: 'Data scraper of french yellow pages (Pages Jaunes)',
          tags: ['scraping'],
          gradient: {
            from: '#E08E1E',
            to: '#FFC941'
          },
          href: 'https://github.com/l-portet/yellow-scraper'
        },
        {
          name: 'Beyou',
          desc: 'Premium dating app based on MBTI personality',
          tags: ['ui'],
          gradient: {
            from: '#FF6831',
            to: '#FFAA55'
          },
          href: 'https://marvelapp.com/adcdg4b'
        },
        {
          name: 'Asheal',
          desc: 'Crafting the future of medicine',
          tags: ['branding', 'ui', 'fullstack'],
          gradient: {
            from: '#009593',
            to: '#F0EC58'
          },
          href:
            'https://www.futura-sciences.com/tech/actualites/technologie-reduire-temps-passe-salle-attente-chez-medecin-78874'
        },
        {
          name: 'Surebet finder',
          desc: 'Sport surebet finder bot',
          tags: ['bot', 'back'],
          gradient: {
            from: '#4718B0',
            to: '#AA50DA'
          },
          href: 'https://github.com/l-portet/surebet-finder'
        }
      ]
    };
  },
  computed: {
    works() {
      return this.dataWorks.map(work => {
        let tags = work.tags.join(', ');

        return { ...work, tags };
      });
    }
  },
  mounted() {
    if (this.$isMobileOrTablet()) {
      this.removeLinkFocus();
      document.addEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    removeLinkFocus() {},
    handleScroll() {
      let check = false;
      let i = 0;

      for (; check === false; i++) {
        check = this.checkElementDistance(i);
      }

      if (check === null || !i) this.unFocusWork();

      i--;
      this.focusWork(i);
    },
    checkElementDistance(index) {
      let el = this.$refs[`work-${index}`] && this.$refs[`work-${index}`][0];
      if (!el) return null;
      let elTopDistance = el.getBoundingClientRect().top;
      let elBottomDistance = el.getBoundingClientRect().bottom;
      let breakpoint = window.innerHeight / 2;

      if (elTopDistance - breakpoint < 0 && elBottomDistance - breakpoint > 0)
        return true;
      return false;
    },
    focusWork(i) {
      let work = this.works[i];
      let workEl = this.$refs[`work-${i}`] && this.$refs[`work-${i}`][0];

      this.focusedIndex = i;
      if (!work || !work.gradient) return;

      this.$emit('workhover', work.gradient);
    },
    unFocusWork() {
      this.$emit('workleave');
      this.focusedIndex = -1;
    }
  }
};
</script>
