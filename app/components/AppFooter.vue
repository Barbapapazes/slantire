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
  <UFooter :links="links">
    <template #left>
      <UFooterLinks :links="links" />
    </template>
    <template #center>
      <span />
    </template>
    <template #right>
      <div
        v-if="config.footer?.colorMode"
        class="mr-4"
      >
        <ColorScheme>
          <UColorModeSelect />
        </ColorScheme>
      </div>
      <FollowMe
        :socials="config.socials"
      />
    </template>
  </UFooter>
</template>
