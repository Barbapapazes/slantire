export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

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

  content: {
    documentDriven: false,
  },

  sitemap: {
    sources: [
      '/api/__sitemap__/urls',
    ],
  },

  ui: {
    icons: ['simple-icons', 'ph'],
  },

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

  devtools: { enabled: true },
})
