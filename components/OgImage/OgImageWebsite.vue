<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center text-center bg-zinc-900 p-8">
    <div class="relative">
      <h1 class="text-8xl mb-4 text-white">
        {{ title }}
      </h1>
      <p class="text-5xl text-zinc-200 leading-tight">
        {{ description }}
      </p>
    </div>
  </div>
</template>
