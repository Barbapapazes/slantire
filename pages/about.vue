<script lang="ts" setup>
const route = useRoute()

const { data: page, error } = await useAsyncData(route.path, () => queryContent(route.path).findOne())

if (error.value) {
  throw createError({
    statusCode: 404,
    message: 'Page not found',
    fatal: true,
  })
}

const config = useAppConfig()

useSeoMeta({
  title: page.value?.title,
  ogTitle: page.value?.title,
  description: page.value?.description || config.seo.tagLine,
  ogDescription: page.value?.description || config.seo.tagLine,
})

defineOgImage({
  component: 'Website',
  title: page.value?.title,
  description: page.value?.description || config.seo.tagLine,
})
</script>

<template>
  <UContainer v-if="page">
    <UPage>
      <UPageHeader :title="page.title" :description="page.description" />

      <UPageBody prose>
        <ContentRenderer :value="page" />
      </UPageBody>

      <template #right>
        <UAside>
          <div class="space-y-8">
            <img :src="page.image.src" :alt="page.image.alt" class="rounded-lg">
            <UDivider />

            <div class="flex justify-center">
              <FollowMe :socials="config.socials" />
            </div>
          </div>
        </UAside>
      </template>
    </UPage>
  </UContainer>
</template>
