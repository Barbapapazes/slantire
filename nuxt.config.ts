export default defineNuxtConfig({
  extends: '@nuxt/ui-pro',
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxthq/studio'],

  content: {
    documentDriven: false,
  },

  ui: {
    icons: ['simple-icons', 'ph'],
  },

  devtools: { enabled: true },
})
