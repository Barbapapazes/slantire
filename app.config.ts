export default defineAppConfig({
  ui: {
    primary: 'sky',
    gray: 'zinc',
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
  },
  slantire: {
    socials: {
      website: {
        name: 'Website',
        href: 'https://esteban-soubiran.site',
        icon: 'i-ph-globe-duotone',
      },
      x: {
        name: 'X',
        href: 'https://x.com/soubiran_',
        icon: 'i-simple-icons-x',
      },
      github: {
        name: 'GitHub',
        href: 'https://github.com/barbapapazes',
        icon: 'i-simple-icons-github',
      },
    },
  },
})
