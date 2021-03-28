export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    script: [
      {
        src: '/jquery-3.5.1.slim.min.js'
      },
      {
        src: '/popper.min.js'
      },
      {
        src: './assets/css/bootstrap.min.js'
      }
    ],
    title: 'Veehive.ai',
    meta: [
      { charset: 'utf-8' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
      {
        rel: 'stylesheet',
        href: './assets/css/bootstrap.min.css'
      },
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/icons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/icons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/icons/favicon-16x16.png',
      },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Fjalla+One&family=Karla:wght@200;300;400;500;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
      },
      {
        modules: [
          // Simple usage
          '@nuxtjs/bootstrap-vue',

          // With options
          ['@nuxtjs/bootstrap-vue', { css: false }],
        ]
      }
    ],
  },
  bootstrapVue: {
    bootstrapCSS: false, // here you can disable automatic bootstrapCSS in case you are loading it yourself using sass
    bootstrapVueCSS: false, // CSS that is specific to bootstrapVue components can also be disabled. That way you won't load css for modules that you don't use
    componentPlugins: ['Collapse', 'Dropdown'], // Here you can specify which components you want to load and use
    directivePlugins: [] // Here you can specify which directives you want to load and use. Look into official docs to get a list of what's available
  },
  modules: ["bootstrap-vue/nuxt"],

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['./assets/css/index.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['./plugins/vue-transition-expand.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['vue-scrollto/nuxt', { easing: [0.9, 0.14, 0.14, 0.93], duration: 800 }],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      preset: {
        features: {
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          'focus-within-pseudo-class': false,
        },
      },
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: './tailwind.config.js',
    exposeConfig: true,
  },
}
