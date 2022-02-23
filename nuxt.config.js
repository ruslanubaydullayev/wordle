export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "ME",
    htmlAttrs: {
      lang: 'uz'
    },  
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' } 
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
        // CSS file in the project
        '@/assets/css/main.css',
        // SCSS file in the project
        '@/assets/css/main.scss',
        "@/static/fonts/stylesheet.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/v-mask.js" },
    { src: "@/assets/css/scripts/global.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/svg",
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    ['@nuxtjs/google-fonts', { /* module options */ }]

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "nuxt-i18n",
      {
        locales: [
          {
            code: "ru",
            file: "ru.js",
          },
          {
            code: "uz",
            file: "uz.js",
          },
          {
            code: "en",
            file: "en.js",
          },
        ],
        strategy: "prefix_and_default",
        defaultLocale: "uz",
        lazy: true,
        langDir: "lang/",
      },
    ],
    [
      'nuxt-element-ui',
      {
        // components: ['Button', 'DatePicker', 'Dropdown'],
        locale: 'fr',
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
