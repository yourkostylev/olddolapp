export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    host: '0.0.0.0',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Дилер онлайн (устаревшая версия)',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
          rel:   'manifest',
          href:  '/site.webmanifest',
        },
        {
          rel:   'mask-icon',
          href:  '/safari-pinned-tab.svg',
          color: '#2e5bff',
        },
        {
          rel:   'apple-touch-icon',
          sizes: '60x60',
          href: '/apple-touch-icon.png',
        },
        {
          rel:   'apple-touch-icon',
          sizes: '76x76',
          href: '/apple-touch-icon.png',
        },
        {
          rel:   'apple-touch-icon',
          sizes: '120x120',
          href: '/apple-touch-icon.png',
        },
        {
          rel:   'apple-touch-icon',
          sizes: '152x152',
          href: '/apple-touch-icon.png',
        },
        {
          rel:   'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel:   'icon',
          type:  'image/png',
          sizes: '32x32',
          href:  '/favicon-32x32.png',
        },
        {
          rel:   'icon',
          type:  'image/png',
          sizes: '16x16',
          href:  '/favicon-16x16.png',
        },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass')
      },
      scss: {
        implementation: require('sass')
      }
    },
    postcss: {
      'autoprefixer': {},
    },
  }
}
