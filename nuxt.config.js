import axios from 'axios'

const siteName = 'hal_sea_ / blog'
const baseUrl = 'https://halsea-blog.netlify.app/'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: siteName,
    htmlAttrs: {
      lang: 'en',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '都内のWebエンジニア、ハル(@hal_sea_)のブログ。主にプログラミングについて発信します。' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:site_name', property: 'og:site_name', content: siteName },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: baseUrl },
      { hid: 'og:title', property: 'og:title', content: siteName },
      { hid: 'og:description', property: 'og:description', content: '都内のWebエンジニア、ハル(@hal_sea_)のブログ。主にプログラミングについて発信します。' },
      { hid: 'og:image', property: 'og:image', content: `${baseUrl}ogp-logo.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@hal_sea_' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        path: '/page/:p',
        component: resolve(__dirname, 'pages/index.vue'),
        name: 'page'
      })
      routes.push({
        path: '/category/:categoryId/page/:p',
        component: resolve(__dirname, 'pages/index.vue'),
        name: 'category'
      })
      routes.push({
        path: '/tag/:tagId/page/:p',
        component: resolve(__dirname, 'pages/index.vue'),
        name: 'tag'
      })
    }
  },

  generate: {
    async routes () {
      const limit = 20
      const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

      // 一覧のページング
      const pages = await axios
        .get(`https://${process.env.SERVICE_DOMAIN}.microcms.io/api/v1/blog?limit=0`, {
          headers: { 'X-API-KEY': process.env.API_KEY }
        })
        .then(res =>
          range(1, Math.ceil(res.data.totalCount / limit)).map(p => ({
            route: `/page/${p}`
          }))
        )
      const categories = await axios
        .get(`https://${process.env.SERVICE_DOMAIN}.microcms.io/api/v1/categories?fields=id`, {
          headers: { 'X-API-KEY': process.env.API_KEY }
        })
        .then(({ data }) => {
          return data.contents.map(content => content.id)
        })
      const tags = await axios
        .get(`https://${process.env.SERVICE_DOMAIN}.microcms.io/api/v1/tags?fields=id`, {
          headers: { 'X-API-KEY': process.env.API_KEY }
        })
        .then(({ data }) => {
          return data.contents.map(content => content.id)
        })
      // カテゴリーページのページング
      const categoryPages = await Promise.all(
        categories.map(category =>
          axios.get(
            `https://${process.env.SERVICE_DOMAIN}.microcms.io/api/v1/blog?limit=0&filters=category[equals]${category}`,
            { headers: { 'X-API-KEY': process.env.API_KEY } }
          )
            .then(res =>
              range(1, Math.ceil(res.data.totalCount / 10)).map(p => ({
                route: `/category/${category}/page/${p}`
              })))
        )
      )
      // タグページのページング
      const tagPages = await Promise.all(
        tags.map(tag =>
          axios.get(
            `https://${process.env.SERVICE_DOMAIN}.microcms.io/api/v1/blog?limit=0&filters=tags[contains]${tag}`,
            { headers: { 'X-API-KEY': process.env.API_KEY } }
          )
            .then(res =>
              range(1, Math.ceil(res.data.totalCount / 10)).map(p => ({
                route: `/tag/${tag}/page/${p}`
              })))
        )
      )
      // 2次元配列になってるのでフラットにする
      const flattenCategoryPages = [].concat.apply([], categoryPages)
      const flattenTagPages = [].concat.apply([], tagPages)
      return [...pages, ...flattenCategoryPages, ...flattenTagPages]
    },
    dir: 'dist'
  }
}
