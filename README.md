![screenshot-nuxt-ui-pro-slantire](https://github.com/Barbapapazes/slantire/assets/904724/01d27c6b-cf85-412e-b0bc-a718ad9990c1)

# Slantire

[![Nuxt UI Pro](https://img.shields.io/badge/Made%20with-Nuxt%20UI%20Pro-00DC82?logo=nuxt.js&labelColor=020420)](https://ui.nuxt.com/pro)
<!-- [![Nuxt Studio](https://img.shields.io/badge/Open%20in%20Nuxt%20Studio-18181B?&logo=nuxt.js&logoColor=3BB5EC)](https://nuxt.studio/themes/slantire) -->
[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

Slantire, [slan.ti.ˈɾɛ] from Na'Vi meaning '_inspiration_',  is a blog theme that you can use in [Nuxt Studio](https://nuxt.studio).

It is powered by [Nuxt Content](https://content.nuxt.com) and [Nuxt UI Pro](https://ui.nuxt.com/pro)!

- [Live demo](https://slantire.barbapapazes.dev/)
- [Play on Stackblitz](https://stackblitz.com/github/barbapapazes/slantire)
<!-- - [Clone on Nuxt Studio](https://nuxt.studio/themes/slantire) -->

## Features

- 🎨 Fully personalized (colors, content, etc.)
- 📝 Markdown based
- 🔍 SEO friendly (Open Graph, Robots, Sitemap)
- 🦇 Dark mode
- ✏️ Nuxt Studio ready

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

## Production

Build the application for production:

```bash
npm run generate
```

### Environment Variables

In order to build the application for production, you need to have a [Nuxt UI Pro](https://ui.nuxt.com/pro) license and set the `NUXT_UI_PRO_LICENSE` variable in the `.env` file.

Note that this is not required to run in development and contribute to the Nuxt website or documentation.

You will also need to add your site URL to the `NUXT_SITE_URL` variable (see [Nuxt SEO](https://nuxtseo.com/site-config/guides/setting-site-config#environment-variables)) to have a valid `robots.txt` file and sitemap.

## License

[MIT License](./LICENSE)
