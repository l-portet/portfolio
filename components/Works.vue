<template>
  <div class="works">
    <h2>Some of my works</h2>
    <a
      :class="{ work: true, focused: focusedIndex === index }"
      v-for="(work, index) in works"
      :key="index"
      :ref="`work-${index}`"
      @mouseover="focusWork(index)"
      @mouseleave="unFocusWork()"
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
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      focusedIndex: -1,
      dataWorks: [
        {
          name: 'Svelte Switch Case',
          desc: 'Switch case syntax for Svelte components',
          tags: ['front', 'open source'],
          gradient: {
            from: '#701b00',
            to: '#FF3E00'
          },
          href: 'https://github.com/l-portet/svelte-switch-case'
        },
        {
          name: 'MACAS Studio',
          desc: 'Building apps that make ecommerce sell more',
          tags: ['shopify', 'fullstack'],
          gradient: {
            from: '#405e04',
            to: '#B6F041'
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
          name: 'Smooth drag & drop',
          desc: `UX experiment based on Trello's drag & drop system, featured on CodePen`,
          tags: ['front', 'ux', 'micro-interactions'],
          gradient: {
            from: '#0171B1',
            to: '#2C9ADA'
          },
          href: 'https://codepen.io/l-portet/pen/jObbRYJ'
        },
        {
          name: 'Pizzadoor Stocks Manager',
          desc: 'Stocks scraper & manager for Adial pizza ATM',
          tags: ['scraping', 'back'],
          gradient: {
            from: '#F9484A',
            to: '#FBD72B'
          },
          href: 'https://github.com/l-portet/pizzadoor-stocks-manager'
        },
        {
          name: 'Corona tracker',
          desc:
            'An interactive covid 19 tracking app with real-time data updates (not active anymore)',
          tags: ['scraping', 'mobile'],
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
          desc: 'A medical terminal for pre-diagnosis in waiting rooms',
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

      this.focusedIndex = i;
      if (!work || !work.gradient) return;

      this.updateBackground(work.gradient);
    },
    unFocusWork() {
      this.resetBackground();
      this.focusedIndex = -1;
    }
  }
};
</script>
