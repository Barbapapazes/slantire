<script lang="ts" setup>
import type { FooterLink } from '#ui-pro/types'

defineProps<{
  links: FooterLink[]
}>()

const config = useAppConfig()
</script>

<template>
  <UFooter :links="config.footer.smallLinks as FooterLink[]">
    <template #left>
      <UFooterLinks :links="links" />
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
