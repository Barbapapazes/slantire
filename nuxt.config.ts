export default defineNuxtConfig({

  extends: '@nuxt/ui-pro',

  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxthq/studio',
    'nuxt-simple-robots',
    'nuxt-og-image',
    '@nuxt/eslint',
    '@nuxtjs/sitemap',
  ],

  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-08-19',

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/sitemap.xml'],
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  sitemap: {
    sources: [
      '/api/__sitemap__/urls',
    ],
  },
})
