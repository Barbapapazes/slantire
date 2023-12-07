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

const { data: articles, error: articlesError } = await useAsyncData('content:articles', () => queryContent('/articles/').only(['_path', 'title', 'description', 'publishedAt', 'authors', 'cover']).sort({ publishedAt: -1 }).find(), { default: () => [] })

if (articlesError.value) {
  throw createError({
    statusCode: 404,
    message: 'Unable to fetch articles',
  })
}
</script>

<template>
  <UContainer v-if="page">
    <UPage>
      <UPageHero :title="page.hero.title" :description="page.hero.description" />
      <UPageGrid>
        <UPageCard v-for="article in articles" :key="article._path" :title="article.title" :description="article.description" :to="article._path" :ui="{ header: { padding: 'px-0 sm:p-0 py-0' }, body: { padding: '!pb-0' } }">
          <template #header>
            <div class="aspect-[16/9] overflow-hidden">
              <img :src="article.cover.src" :alt="article.cover.alt" class="aspect-[16/9] object-cover object-center group-hover:scale-105 transition-transform ease-in" width="1920" height="1080">
            </div>
          </template>
          <template #footer>
            <dl class="flex flex-row justify-between">
              <dt class="sr-only">
                Published at
              </dt>
              <dd>
                <time :datetime="article.publishedAt">{{ formatDate(article.publishedAt) }}</time>
              </dd>

              <dt class="sr-only">
                Authors
              </dt>
              <dd>
                <UAvatarGroup size="xs">
                  <UAvatar v-for="author in article.authors" :key="author.name" :src="author.avatar" :alt="author.name" :title="author.name" class="hover:scale-105 hover:ring-primary-500 dark:hover:ring-primary-400 transition-transform">
                    <NuxtLink :to="`https://x.com/${author.twitter}`" target="_blank" class="focus:outline-none" tabindex="-1">
                      <span class="absolute inset-0" aria-hidden="true" />
                    </NuxtLink>
                  </UAvatar>
                </UAvatarGroup>
              </dd>
            </dl>
          </template>
        </UPageCard>
      </UPageGrid>
    </UPage>
  </UContainer>
</template>
