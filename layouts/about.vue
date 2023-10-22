<script lang="ts" setup>
const { page } = useContent()
</script>

<template>
  <UContainer>
    <UPage>
      <UPageHeader :title="page.title" :description="page.description" />

      <UPageBody prose>
        <slot />
      </UPageBody>

      <template #right>
        <UAside>
          <div class="space-y-8">
            <img :src="page.image.src" :alt="page.image.alt" class="rounded-lg">
            <UDivider />

            <div class="flex justify-center">
              <FollowMe />
            </div>
          </div>
        </UAside>
      </template>
    </UPage>
  </UContainer>
</template>
