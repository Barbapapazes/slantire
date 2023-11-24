import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    header: group({
      title: 'Header',
      description: 'Header configuration.',
      icon: 'i-mdi-page-layout-header',
      fields: {
        logo: group({
          title: 'Logo',
          description: 'Footer logo configuration.',
          icon: 'i-mdi-image-filter-center-focus-strong-outline',
          fields: {
            light: field({
              type: 'media',
              title: 'Light Mode Logo',
              description: 'Pick an image from your gallery.',
              icon: 'i-heroicons-sun-20-solid',
              default: 'pp',
            }),
            dark: field({
              type: 'media',
              title: 'Dark Mode Logo',
              description: 'Pick an image from your gallery.',
              icon: 'i-heroicons-moon-20-solid',
              default: 'pp',
            }),
            alt: field({
              type: 'string',
              title: 'Alt',
              description: 'Alt to display for accessibility.',
              icon: 'i-mdi-alphabet-latin',
              default: 'pp',
            }),
          },
        }),
        colorMode: field({
          type: 'boolean',
          title: 'Color Mode',
          description: 'Hide or display the color mode button in your header.',
          icon: 'i-heroicons-moon-20-solid',
          default: true,
        }),
      },
    }),
    socials: field({
      type: 'array',
      items: {
        type: 'object',
      },
      title: 'Socials',
      description: 'Socials configuration.',
      icon: 'i-mdi-link-variant',
      default: []
    }),
  },
})