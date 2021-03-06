export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // server: {
  //   port: 8000, // default: 3000
  //   host: '0.0.0.0' // default: localhost
  // },
  generate: {
    fallback: false
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'warung canopy',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon.png' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],
  pwa: {
    manifest: {
      name: 'Warung Canopy',
      short_name: 'WarCan',
      lang: 'en',
      description: 'pwa web promo warung canopy',
      theme_color: '#00C58E',
      background_color: '#000',
      ogImage: `@nuxtjs/static/icon.png`
    },
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
