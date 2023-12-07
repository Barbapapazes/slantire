<script lang="ts" setup>
import type { Button } from '@nuxt/ui/dist/runtime/types'

const { data: page, error: pageError } = await useAsyncData('index', () => queryContent('/').findOne())

if (pageError.value) {
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

const { data: lastArticle, error: lastArticleError } = await useAsyncData('content:home:last-article', () => queryContent('/articles/').where({ _path: /^\/articles\// }).only(['_path', 'title']).sort({ publishedAt: -1 }).findOne())

if (lastArticleError.value) {
  throw createError({
    statusCode: 404,
    message: 'Unable to fetch last articles',
  })
}

const badges: Button[] = []
if (lastArticle.value) {
  badges.push({
    to: lastArticle.value._path,
    label: lastArticle.value.title,
    variant: 'outline',
    icon: 'i-ph-arrow-right',
    size: 'xs',
    trailing: true,
  })
}

const { data: latestArticles, error: latestArticlesError } = await useAsyncData('content:home:latest-articles', () => queryContent('/articles/').only(['_path', 'title', 'description', 'publishedAt', 'authors', 'cover']).sort({ publishedAt: -1 }).limit(2).find(), { default: () => [] })

if (latestArticlesError.value) {
  throw createError({
    statusCode: 404,
    message: 'Unable to fetch latest articles',
  })
}
</script>

<template>
  <ULandingHero
    v-if="page && lastArticle"
    :ui="{ title: 'max-w-3xl mx-auto', description: 'max-w-2xl mx-auto' }"
    :title="page.hero.title"
    :description="page.hero.description"
    :links="page.hero.links"
  >
    <template #headline>
      <div class="flex justify-center gap-4">
        <UButton v-for="badge in badges" :key="badge.label" v-bind="{ ui: { rounded: 'rounded-full' }, ...badge }" />
      </div>
    </template>
  </ULandingHero>

  <ULandingSection v-if="page" :title="page.sections.inspirations.title" :links="page.sections.inspirations.links">
    <ULandingGrid :ui="{ wrapper: 'lg:grid-cols-2' }">
      <ULandingCard v-for="inspiration in page.sections.inspirations.cards" :key="inspiration.src" :title="inspiration.title" :description="inspiration.description" :to="inspiration.to" target="_blank">
        <template #container>
          <img :src="inspiration.src" :alt="inspiration.alt" class="mt-4 aspect-[16/9] object-cover object-center rounded-md" :ui="{ body: { base: 'px-0 py-0 sm:p-0' } }">
        </template>
      </ULandingCard>
    </ULandingGrid>
  </ULandingSection>

  <UContainer v-if="page">
    <ULandingCTA
      :title="page.sections.articles.title"
      :description="page.sections.articles.description"
      :links="page.sections.articles.links"
      :card="false"
      align="left"
    >
      <div class="flex flex-col gap-8">
        <UPageCard
          v-for="article in latestArticles"
          :key="article._path"
          :to="article._path"
          :title="article.title"
          :description="article.description"
          :ui="{ wrapper: 'flex flex-row items-center', header: { base: 'w-1/3', padding: 'px-0 sm:p-0 py-0' } }"
        >
          <template #header>
            <div class="aspect-[1/1] overflow-hidden">
              <img :src="article.cover.src" :alt="article.cover.alt" class="aspect-[1/1] w-[44rem] object-cover object-center group-hover:scale-105 transition-transform ease-in" width="1920" height="1080">
            </div>
          </template>
        </UPageCard>
      </div>
    </ULandingCTA>
  </UContainer>
</template>
