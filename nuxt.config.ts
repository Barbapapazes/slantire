export default defineNuxtConfig({
  extends: '@nuxt/ui-pro',
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxthq/studio'],

  content: {
    documentDriven: true,
  },

  ui: {
    icons: ['simple-icons', 'ph'],
  },

  devtools: { enabled: true },
})
