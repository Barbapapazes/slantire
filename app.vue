<script lang="ts" setup>
const { navigation } = useContent()
const { slantire: { header } } = useAppConfig()

const links = computed(() => {
  return navigation.value.map((item) => {
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
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...header?.logo }" />
      </template>
      <div v-else class="flex items-center gap-2">
        <UAvatar src="https://esteban-soubiran.site/esteban.webp" alt="Picture of Estéban Soubiran" />
        <span> Slantire </span>
      </div>
    </template>
    <template #right>
      <div class="hidden lg:block">
        <FollowMe />
      </div>
      <UTooltip class="mr-1 lg:mr-0 lg:ml-2" text="Toggle color mode" placement="bottom">
        <UColorModeButton />
      </UTooltip>
    </template>
    <template #panel>
      <UAsideLinks :links="links" />
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <FollowMe />
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
      <FollowMe />
    </template>
  </UFooter>
</template>
