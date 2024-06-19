export default defineAppConfig({
  ui: {
    primary: 'sky',
    gray: 'zinc',
    icons: {
      light: 'i-ph-sun-dim-duotone',
      dark: 'i-ph-moon-stars-duotone',
    },
    landing: {
      card: {
        body: {
          base: 'h-full',
        },
        container: 'h-full flex flex-col',
        title: 'text-2xl',
        description: 'grow mt-2',
      },
    },
    header: {
      wrapper: 'relative border-none',
      button: {
        icon: {
          open: 'i-ph-list-bold',
          close: 'i-ph-x-bold',
        },
      },
    },
    footer: {
      bottom: {
        container: 'flex flex-col lg:flex-row',
        left: 'order-1',
        center: 'mt-0',
        right: 'order-2 mt-4 md:mt-8 lg:mt-0',
      },
    },
    page: {
      links: {
        wrapper: 'mt-6',
      },
    },
    card: {
      base: 'transition ease-in',
      divide: 'divide-none',
    },
  },
  seo: {
    siteName: 'Slantire',
    tagLine: 'My personal website',
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: '',
    },
    colorMode: true,
  },
  socials: [
    {
      icon: 'i-ph-globe-duotone',
      to: 'https://esteban-soubiran.site',
      target: '_blank',
    },
    {
      icon: 'i-simple-icons-x',
      to: 'https://x.com/soubiran_',
      target: '_blank',
    },
    {
      icon: 'i-simple-icons-github',
      to: 'https://github.com/barbapapazes',
      target: '_blank',
    },
  ],
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Ressources',
    },
  },
})
