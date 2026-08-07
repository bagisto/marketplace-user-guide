# Bagisto Multi-Vendor Marketplace — User Guide

The user documentation for the **Bagisto Multi-Vendor Marketplace**. The online version is published at [https://marketplace-docs.bagisto.com](https://marketplace-docs.bagisto.com).

Built with [VitePress](https://vitepress.dev). The guide walks admins, sellers, and customers through every part of the marketplace — seller onboarding, catalog, inventory and pricing, marketing, orders and fulfilment, payments and commission, subscriptions, communication, moderation, and reporting.

## Project structure

```
.
├── .github/workflows/deploy.yml   # CI: builds and deploys to GitHub Pages
├── .vitepress/
│   ├── config.mts                 # Site config: nav, grouped sidebar, theme
│   └── theme/                     # Custom theme (ImagePopup component, styles)
└── src/
    ├── index.md                   # Home page
    ├── public/                    # Static assets (logos, images/…)
    └── <section>/*.md             # One folder per sidebar group
```

Pages are organised into section folders (`sellers/`, `catalog/`, `inventory/`, `pricing/`, `marketing/`, `orders/`, `payments/`, `subscriptions/`, `customers/`, `moderation/`, `reporting/`) that mirror the sidebar. Screenshots live under `src/public/images/<page>/`.

## Local development

### Prerequisites

- [Node.js](https://nodejs.org) 18 or higher
- npm

### Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the dev server** (hot reload)

   ```bash
   npm run docs:dev
   ```

3. Open [http://localhost:5173](http://localhost:5173).

### Available scripts

| Script | Description |
| --- | --- |
| `npm run docs:dev` | Start the development server with hot reload |
| `npm run docs:build` | Build the production site into `.vitepress/dist` |
| `npm run docs:preview` | Preview the production build locally |

## Contribution guide

Contributions to improve the documentation are welcome.

1. **Fork** the repository and **clone** your fork.
2. Install dependencies and run `npm run docs:dev`.
3. Create a **feature branch** for your change.
4. Make your edits, then run `npm run docs:build` to confirm the site builds (the build fails on broken internal links, so this catches most mistakes).
5. Open a **pull request** against `main`.

### Content standards

- **Check for existing content** — avoid duplicating a topic that's already covered.
- **Follow the page template** — H1 → short intro → a `::: info What you'll learn` block → `##` sections with screenshots → a closing `::: tip`.
- **Use VitePress containers** — `::: info`, `::: tip`, `::: warning` for callouts.
- **Add screenshots** with the `<ImagePopup src="/images/<page>/<file>.png" alt="…" />` component, and put the image under `src/public/images/<page>/`.
- **Cross-link** related pages with root-relative links (e.g. `/catalog/product-management`).
- Write clearly and concisely, with step-by-step instructions and a professional tone.

## Deployment

The site deploys automatically. On every push to `main`, [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) installs dependencies, runs `npm run docs:build`, and publishes `.vitepress/dist` to the `gh-pages` branch via [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages). The workflow also writes a `CNAME` file so GitHub Pages serves the site on the custom domain **marketplace-docs.bagisto.com**.

You can also trigger a deploy manually from the repository's **Actions** tab (**Deploy Docs to GitHub Pages → Run workflow**).
