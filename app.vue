<script lang="ts" setup>
const { data: navigation, error } = await useAsyncData('navigation', () => fetchContentNavigation())

if (error.value) {
  throw createError({
    statusCode: 500,
    message: 'Unable to fetch navigation',
    fatal: true,
  })
}

const links = computed(() => {
  if (!navigation.value)
    return []

  return navigation.value.map((item: any) => {
    return {
      label: item.title,
      to: item._path,
    }
  })
})

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

defineRobotMeta()
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <template v-if="config.header?.logo?.dark || config.header?.logo?.light">
        <UColorModeImage class="h-6 w-auto" :light="config.header?.logo?.light!" :dark="config.header?.logo?.dark!" :alt="config.header?.logo?.alt!" />
      </template>
      <div v-else class="flex items-center gap-2">
        <UAvatar src="https://esteban-soubiran.site/esteban.webp" alt="Picture of Estéban Soubiran" />
        <span> {{ config.seo.siteName }} </span>
      </div>
    </template>
    <template #right>
      <div class="hidden lg:block">
        <FollowMe :socials="config.socials" />
      </div>
      <UTooltip v-if="config.header?.colorMode" class="mr-1 lg:mr-0 lg:ml-2" text="Toggle color mode" placement="bottom">
        <UColorModeButton />
      </UTooltip>
    </template>
    <template #panel>
      <UAsideLinks :links="links" />
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <FollowMe :socials="config.socials" />
      </div>
    </template>
  </UHeader>

  <UMain>
    <NuxtPage />
  </UMain>

  <UFooter :links="links">
    <template #left>
      <UFooterLinks :links="links" />
    </template>
    <template #center>
      <span />
    </template>
    <template #right>
      <FollowMe :socials="config.socials" />
    </template>
  </UFooter>
</template>
