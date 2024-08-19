<script lang="ts" setup>
const config = useAppConfig()

const colorMode = useColorMode()
const color = computed(() => colorMode.value === 'dark' ? '#18181b' : 'white')

useHead({
  titleTemplate: title => title ? `${title} - ${config.seo.siteName}` : `${config.seo.siteName}: ${config.seo.tagLine}`,
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})

useSeoMeta({
  ogSiteName: config.seo.siteName,
  twitterCard: 'summary_large_image',
})

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const links = computed(() => {
  if (!navigation.value)
    return []

  return navigation.value.map((item) => {
    return {
      label: item.title,
      to: item._path,
    }
  })
})
</script>

<template>
  <AppHeader :links />

  <AppBackground
    v-if="config.app.background"
  />

  <UMain>
    <NuxtPage />
  </UMain>

  <AppFooter :links />
</template>
