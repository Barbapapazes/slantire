export default defineNuxtConfig({
  extends: '@nuxt/ui-pro',
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxthq/studio', 'nuxt-simple-robots', 'nuxt-simple-sitemap', 'nuxt-og-image', '@nuxt/eslint'],

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
      routes: ['/sitemap.xml'],
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  devtools: { enabled: true },
})
