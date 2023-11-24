<script lang="ts" setup>
const config = useAppConfig()
const { page, toc } = useContent()
</script>

<template>
  <UContainer>
    <UPage>
      <UPageHeader :title="page.title" :description="page.description" />

      <UPageBody prose>
        <slot />
      </UPageBody>

      <template #right>
        <UDocsToc :title="config.toc?.title" :links="toc.links">
          <template #bottom>
            <div class="hidden lg:block">
              <UDivider />
              <!-- TODO: upstream - add the hide and show like DocsToc  -->
              <UPageLinks
                :title="config.toc?.bottom?.title" :links="page.resources"
              />
            </div>
          </template>
        </UDocsToc>
      </template>
    </UPage>
  </UContainer>
</template>
