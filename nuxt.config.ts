// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  // devtools: { enabled: true },
  app: {
    baseURL: '/web36NUXT/',
    // pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        // { name: 'favicon', content: '/logo.svg' }
      ],
      link: [
        { rel: 'icon', href:'http://localhost:3000/web36NUXT/logo.svg' }
      ],
      titleTemplate: '%s - Site Title',
    }
  },

  nitro: {
    plugins: ['plugins/extend-html.ts']
  },

  modules: ['@pinia/nuxt']
})