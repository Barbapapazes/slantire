import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    ui: group({
      title: 'UI',
      description: 'UI Customization.',
      icon: 'i-mdi-palette-outline',
      fields: {
        icons: group({
          title: 'Icons',
          description: 'Manage icons used in UI Pro.',
          icon: 'i-mdi-application-settings-outline',
          fields: {
            dark: field({
              type: 'icon',
              title: 'Dark mode',
              description: 'Icon of color mode button for dark mode.',
              icon: 'i-heroicons-moon-20-solid',
              default: 'i-ph-moon-stars-duotone',
            }),
            light: field({
              type: 'icon',
              title: 'Light mode',
              description: 'Icon of color mode button for light mode.',
              icon: 'i-heroicons-sun-20-solid',
              default: 'i-ph-sun-dim-duotone',
            }),
            external: field({
              type: 'icon',
              title: 'External Link',
              description: 'Icon for external link.',
              icon: 'i-heroicons-arrow-up-right-20-solid',
              default: 'i-heroicons-arrow-up-right-20-solid',
            }),
            chevron: field({
              type: 'icon',
              title: 'Chevron',
              description: 'Icon for chevron.',
              icon: 'i-heroicons-chevron-down-20-solid',
              default: 'i-heroicons-chevron-down-20-solid',
            }),
            hash: field({
              type: 'icon',
              title: 'Hash',
              description: 'Icon for hash anchors.',
              icon: 'i-heroicons-hashtag-20-solid',
              default: 'i-heroicons-hashtag-20-solid',
            }),
          },
        }),
        primary: field({
          type: 'string',
          title: 'Primary',
          description: 'Primary color of your UI.',
          icon: 'i-mdi-palette-outline',
          default: 'sky',
          required: ['sky', 'mint', 'rose', 'amber', 'violet', 'emerald', 'fuchsia', 'indigo', 'lime', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow', 'green', 'blue', 'cyan', 'gray', 'white', 'black'],
        }),
        gray: field({
          type: 'string',
          title: 'Gray',
          description: 'Gray color of your UI.',
          icon: 'i-mdi-palette-outline',
          default: 'zinc',
          required: ['slate', 'cool', 'zinc', 'neutral', 'stone'],
        }),
      },
    }),
    seo: group({
      title: 'SEO',
      description: 'SEO configuration.',
      icon: 'i-ph-app-window',
      fields: {
        siteName: field({
          type: 'string',
          title: 'Site Name',
          description: 'Name used in ogSiteName and used as second part of your page title (My page title - Slantire).',
          icon: 'i-mdi-web',
          default: 'Slantire',
        }),
        tagLine: field({
          type: 'string',
          title: 'Tag Line',
          description: 'Used when no description is provided in your content and in title when no title is provided in your content (Slantire - My personal website).',
          icon: 'i-mdi-format-title',
          default: 'My personal website',
        }),
      },
    }),
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
              default: '',
            }),
            dark: field({
              type: 'media',
              title: 'Dark Mode Logo',
              description: 'Pick an image from your gallery.',
              icon: 'i-heroicons-moon-20-solid',
              default: '',
            }),
            alt: field({
              type: 'string',
              title: 'Alt',
              description: 'Alt to display for accessibility.',
              icon: 'i-mdi-alphabet-latin',
              default: '',
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
      default: [],
    }),
    toc: group({
      title: 'Table of contents',
      description: 'TOC configuration.',
      icon: 'i-heroicons-table-cells-solid',
      fields: {
        title: field({
          type: 'string',
          title: 'Title',
          description: 'Text to display as title of the main toc.',
          icon: 'i-mdi-format-title',
          default: '',
        }),
        bottom: group({
          title: 'Bottom',
          description: 'Bottom TOC configuration.',
          icon: 'i-heroicons-bars-arrow-down-solid',
          fields: {
            title: field({
              type: 'string',
              title: 'Title',
              description: 'Text to display as title of the bottom toc.',
              icon: 'i-mdi-format-title',
              default: '',
            }),
          },
        }),
      },
    }),
  },
})
