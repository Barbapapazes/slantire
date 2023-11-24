<script lang="ts" setup>
const { navigation } = useContent()
const config = useAppConfig()

const links = computed(() => {
  return navigation.value.map((item: any) => {
    return {
      label: item.title,
      to: item._path,
    }
  })
})
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <template v-if="config.header?.logo?.dark || config.header?.logo?.light">
        <UColorModeImage class="h-6 w-auto" :light="config.header?.logo?.light!" :dark="config.header?.logo?.dark!" :alt="config.header?.logo?.alt!" />
      </template>
      <div v-else class="flex items-center gap-2">
        <UAvatar src="https://esteban-soubiran.site/esteban.webp" alt="Picture of Estéban Soubiran" />
        <span> Slantire </span>
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
