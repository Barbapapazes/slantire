<script lang="ts" setup>
const { slantire: { socials } } = useAppConfig()
</script>

<template>
  <UButton
    v-for="(social, index) of socials"
    :key="index"
    v-bind="{ color: 'gray', variant: 'ghost', ...social }"
  />
</template>
