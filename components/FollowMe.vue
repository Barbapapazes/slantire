<script lang="ts" setup>
const appConfig = useAppConfig()
</script>

<template>
  <UButton
    v-for="social in appConfig.slantire.socials" :key="social.name" :to="social.href"
    target="_blank" rel="noopener"
    :icon="social.icon"
    color="gray"
    variant="ghost"
  />
</template>
