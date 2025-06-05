// https://nuxt.com/docs/api/configuration/nuxt-config
import sharp from "sharp"
import path from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: false },
  app: {
    // baseURL: '/web36NUXT/',
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

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['swiper-container', 'swiper-slide'].includes(tag),
    },
  },
  
  // image: {
  //   provider: "ipx",
  //   sharp,
  //   dir: path.join(process.cwd(), '../public')
  // },

  vite: {
    ssr: {
      external: ["@prisma/client", "Busboy"]
    },
    resolve: {
      alias: {
        ".prisma/client/index-browser": "./node_modules/.prisma/client/index-browser.js"
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    }
  },

  sitemap: {
    defaults: {
      changefreq: 'weekly'
    },
    sources: [
      '/api/urls'
    ],
    // urls: async () => {
    //   const resp = await fetch('http://localhost:3000/api/urls')
    //   const urls = await resp.json() 
    //   return urls
    // },
    xsl: false
  },

  prisma: {
    installCLI: true,
    installClient: true,
    generateClient: true,
    installStudio: false,
    autoSetupPrisma: true
  },

  modules: [
    '@pinia/nuxt',
    '@prisma/nuxt',
    '@nuxt/image',
    'nuxt-swiper',
    'nuxt-directus',
    '@nuxtjs/seo',
    'nuxt-og-image'
  ],

  // swiper: {
  //   styleLang: 'css',
  //   modules: ['navigation', 'pagination'],
  // }
})