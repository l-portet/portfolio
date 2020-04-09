export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Lucas Portet - Full stack developer',
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
      src: '~/plugins/isMobileOrTablet',
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
