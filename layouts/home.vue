<script lang="ts" setup>
import type { Button } from '@nuxt/ui/dist/runtime/types'

const { page } = useContent()

const { data: lastArticle } = await useAsyncData('content:home:last-article', () => queryContent('/articles/').where({ _path: /^\/articles\// }).only(['_path', 'title']).sort({ publishedAt: -1 }).findOne())

const badges: Button[] = []

if (lastArticle.value) {
  badges.push({
    to: lastArticle.value._path,
    label: lastArticle.value.title,
    variant: 'outline',
    icon: 'i-ph-arrow-right',
    size: 'xs',
    trailing: true,
    // TODO: upstream - add the class option to the Button
    class: 'font-semibold hover:bg-primary-100 dark:hover:bg-primary-900 rounded-full',
  })
}

const { data: latestArticles } = await useAsyncData('content:home:latest-articles', () => queryContent('/articles/').only(['_path', 'title', 'description', 'publishedAt', 'authors', 'cover']).sort({ publishedAt: -1 }).limit(2).find())
</script>

<template>
  <ULandingHero
    v-if="lastArticle"
    :ui="{ title: 'max-w-3xl mx-auto', description: 'max-w-2xl mx-auto' }"
    :title="page.hero.title"
    :description="page.hero.description"
    :links="page.hero.links"
    :badges="badges"
  />
  <ULandingSection :title="page.sections.inspirations.title" :links="page.sections.inspirations.links">
    <ULandingGrid :ui="{ wrapper: 'lg:grid-cols-2' }">
      <ULandingCard v-for="inspiration in page.sections.inspirations.cards" :key="inspiration.src" :title="inspiration.title" :description="inspiration.description" :to="inspiration.to" target="_blank">
        <template #container>
          <img :src="inspiration.src" :alt="inspiration.alt" class="mt-4 aspect-[16/9] object-cover object-center rounded-md" :ui="{ body: { base: 'px-0 py-0 sm:p-0' } }">
        </template>
      </ULandingCard>
    </ULandingGrid>
  </ULandingSection>

  <UContainer>
    <ULandingCTA :title="page.sections.articles.title" :description="page.sections.articles.description" :links="page.sections.articles.links" align="left">
      <div class="flex flex-col gap-8">
        <UPageCard v-for="article in latestArticles" :key="article._path" :to="article._path" :title="article.title" :description="article.description" :ui="{ base: 'flex flex-row items-center', header: { padding: 'px-0 sm:p-0 py-0' } }">
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
