<template>
  <div class="contact-section">
    <h2>Drop me a line</h2>
    <div class="contact">
      <a
        v-for="(contact, index) in contacts"
        :key="index"
        @mouseover="onContactHover(contact, index)"
        @click="onContactClick($event, contact)"
        @mouseleave="onContactLeave"
        :class="{
          'contact-item': true,
          'hover-soft': hoverItemIdx === index && contact.hoverContent
        }"
        :href="contact.href"
      >
        <span class="contact-item-name">{{ contact.name }}</span>
        <span class="contact-item-content"
          ><span class="default-content">{{ contact.content }}</span
          ><span class="hover-content">{{
            contact.hoverContent
          }}</span></span
        >
        <img
          src="@/static/icons/return-arrow-white.png"
          alt="return arrow icon black"
          v-if="!contact.hoverContent"
        />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hoverItemIdx: -1,
      contacts: [
        {
          name: 'Twitter',
          content: '@lucasportet',
          gradient: {
            from: '#00acee',
            to: '#00acee'
          },
          href: 'https://twitter.com/lucasportet'
        },
        {
          name: 'Github',
          content: '@l-portet',
          gradient: {
            from: '#28a745', //'#333',
            to: '#28a745' //'#333'
          },
          href: 'https://github.com/l-portet'
        },
        {
          name: 'Linkedin',
          content: '@lucasportet',
          gradient: {
            from: '#0177B5',
            to: '#0177B5'
          },
          href: 'https://www.linkedin.com/in/lucasportet/'
        },
        {
          name: 'Codepen',
          content: '@l-portet',
          gradient: {
            from: '#e4bd09',
            to: '#e4bd09'
          },
          href: 'https://codepen.io/l-portet'
        },
        {
          name: 'Stack',
          content: '@l-portet',
          gradient: {
            from: '#f48024',
            to: '#f48024'
          },
          href: 'https://stackoverflow.com/users/9180619/l-portet'
        },
        {
          name: 'Email',
          content: '@gmail.com',
          gradient: {
            from: '#D33D31',
            to: '#D33D31'
          },
          href: 'mailto:lucasportet@gmail.com?subject=Hey',
          action: 'copyToClipboard',
          hoverContent: 'Copy to clipboard ?'
        }
      ]
    };
  },
  methods: {
    onContactHover(item, index) {
      this.hoverItemIdx = index;
      this.$emit('contacthover', item.gradient);
    },
    onContactClick(e, item) {
      e.preventDefault();
      if (typeof this[item.action] === 'function') this[item.action]();
    },
    onContactLeave(item) {
      this.$emit('contactleave');
      this.hoverItemIdx = -1;
    },
    copyToClipboard() {
      console.log('hello');
    }
  }
};
</script>
