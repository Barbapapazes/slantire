<script lang="ts" setup>
defineProps<{
  links: {
    label: string
    to: string
  }[]
}>()

const config = useAppConfig()
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <template v-if="config.header?.logo?.dark || config.header?.logo?.light">
        <UColorModeImage
          class="h-6 w-auto"
          :light="config.header?.logo?.light!"
          :dark="config.header?.logo?.dark!"
          :alt="config.header?.logo?.alt!"
        />
      </template>
      <div
        v-else
        class="flex items-center gap-2"
      >
        <UAvatar
          src="https://esteban-soubiran.site/esteban.webp"
          alt="Picture of Estéban Soubiran"
        />
        <span> {{ config.seo.siteName }} </span>
      </div>
    </template>
    <template #right>
      <div class="hidden lg:block">
        <FollowMe :socials="config.socials" />
      </div>
    </template>
    <template #panel>
      <UAsideLinks :links="links" />
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <FollowMe :socials="config.socials" />
      </div>
    </template>
  </UHeader>
</template>
