<script lang="ts" setup>
import type { Button } from '#ui/types'

defineProps({
  socials: {
    type: Array as PropType<Button[]>,
    required: true,
  },
})
</script>

<template>
  <UButton
    v-for="(social, index) of socials"
    :key="index"
    v-bind="{ color: 'gray', variant: 'ghost', ...social }"
  />
</template>
