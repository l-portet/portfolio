export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Lucas Portet - Software Engineer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Lucas Portet, developer & maker. I'm building my ideas.`
      },
      { name: 'reply-to', content: 'contact@lucasportet.com' },
      { name: 'owner', content: 'Lucas Portet, contact@lucasportet.com' },
      { name: 'url', content: 'http://lucasportet.com' },
      { name: 'identifier-URL', content: 'http://lucasportet.com' },
      { name: 'author', content: 'Lucas Portet, contact@lucasportet.com' },
      { name: 'coverage', content: 'Worldwide' },
      { name: 'distribution', content: 'Global' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-116920394-2'
      },
      {
        src: '/js/ga.js'
      },
      {
        src: '/js/hj.js'
      },
      {
        type: 'application/ld+json',
        json: {
          '@context': 'http://www.schema.org',
          '@type': 'Person',
          name: 'Lucas Portet',
          jobTitle: 'Co-founder @MACAS Studio',
          url: 'https://lucasportet.com',
          image: 'https://lucasportet.com/img/pp.png',
          nationality: 'French',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Los Angeles, CA',
            addressCountry: 'USA'
          },
          sameAs: [
            'https://twitter.com/lucasportet',
            'https://www.linkedin.com/in/lucasportet',
            'https://github.com/l-portet',
            'https://codepen.io/l-portet',
            'https://stackoverflow.com/users/9180619/l-portet'
          ]
        }
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/platform-detect',
      ssr: false
    },
    {
      src: '~/plugins/vue-konva',
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
