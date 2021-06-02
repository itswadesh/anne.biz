import { I18N } from './config/lang'
import { firebaseConfig } from './config/firebase'
import {
  HTTP_ENDPOINT,
  WWW_URL,
  head,
  tailwindcss,
  PORT,
} from './shared/config/index'
console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzz', HTTP_ENDPOINT, WWW_URL)
// const whitelist = ['preview-img-item']
const whitelistPatterns = [/(slick-+|swal2-)/]
export default {
  server: {
    host: '0.0.0.0',
    port: PORT,
  },
  head,
  css: [
    '~/shared/assets/css/form.css',
    '~/assets/fonts.css',
    '~/shared/assets/css/animations.css',
  ],
  plugins: [
    { src: '~/plugins/ripple.js', ssr: false },
    { src: '~/plugins/lazy.js', ssr: false },
    { src: '~/plugins/slick.js' },
    { src: '~/plugins/scroll.js', ssr: false },
    { src: '~/plugins/filters.js' },
    { src: '~/plugins/vue-simple-photoswipe.js', ssr: false },
    { src: '~/plugins/VueYoutube.js', ssr: false },
    // { src: '~/plugins/zoom.js', ssr: false },
    // { src: '~/plugins/agora.js', ssr: false },
    { src: '~/plugins/dir', ssr: true },
    // { src: '~/plugins/init', ssr: false },
    // { src: '~/plugins/directives.js', ssr:false },
  ],
  components: true,
  buildModules: [
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss',
    'nuxt-webfontloader',
    // '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
    'vue-social-sharing/nuxt',
    // 'nuxt-vite',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],
  modules: [
    '@nuxtjs/robots',
    '@nuxtjs/toast',
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    'cookie-universal-nuxt',
    'vue-sweetalert2/nuxt',
    ['nuxt-i18n', I18N],
    ['@nuxtjs/firebase', firebaseConfig],
  ],
  pageTransition: 'slide-bottom',
  layoutTransition: 'slide-bottom',
  pwa: {
    manifest: {
      short_name: 'Tablez',
      name: 'Tablez',
      description: 'Tablez ecommerce',
    },
  },
  toast: {
    singleton: true,
  },
  purgeCSS: {
    // whitelist,
    whitelistPatterns,
  },
  tailwindcss,
  // googleAnalytics: {
  //   id: GOOGLE_ANALYTICS_ID,
  // },
  webfontloader: {
    google: {
      families: ['Inter:400,700&display=swap'],
    },
  },
  axios: {
    proxy: true,
  },
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `${WWW_URL}/graphql`,
        browserHttpEndpoint: '/graphql',
        // wsEndpoint: server.replace('http', 'ws') + '/graphql',
      },
    },
    defaultOptions: {
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
      },
    },
  },
  proxy: {
    '/graphql': HTTP_ENDPOINT,
    '/api': HTTP_ENDPOINT,
  },
  build: {
    babel: {
      presets({ isServer }) {
        const targets = isServer ? { node: 'current' } : { ie: 11 }
        return [[require.resolve('@babel/preset-env'), { targets }]]
      },
      plugins: [
        '@babel/syntax-dynamic-import',
        '@babel/transform-runtime',
        '@babel/transform-async-to-generator',
      ],
    },
    parallel: true,
  },
}
