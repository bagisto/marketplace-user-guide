# Bagisto Multi-Vendor Marketplace — User Guide

The user documentation for the **Bagisto Multi-Vendor Marketplace**. The online version is published at [https://marketplace-docs.bagisto.com](https://marketplace-docs.bagisto.com).

Built with [VitePress](https://vitepress.dev). The guide serves three readers: store admins who run the marketplace, sellers who run a shop on it, and customers who buy from them. It covers getting started, Generative AI, sellers and the Seller Panel, catalog, inventory and pricing, marketing, orders and fulfilment, payments and commission, subscription plans, communication, the storefront, moderation, reporting and configuration.

## Project structure

```
.
├── .github/workflows/deploy.yml   # CI: builds and deploys to GitHub Pages
├── .vitepress/
│   ├── config.mts                 # Site config: nav, grouped sidebar, redirect hook
│   ├── _redirects.ts              # Old URLs of moved or merged pages
│   └── theme/                     # ImagePopup component and styles (sidebar icons, Generative AI, role badges)
└── src/
    ├── index.md                   # Home page
    ├── public/
    │   ├── images/<page>/         # Screenshots, one folder per page
    │   └── llms.txt               # Machine-readable page index
    └── <section>/*.md             # One folder per sidebar group
```

Section folders mirror the sidebar: `getting-started/`, `generative-ai/`, `sellers/`, `seller-panel/`, `catalog/`, `inventory/`, `pricing/`, `marketing/`, `orders/`, `payments/`, `subscriptions/`, `customers/`, `storefront/`, `moderation/`, `reporting/` and `configuration/`.

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
4. Make your edits, then run `npm run docs:build` to confirm the site builds. The build fails on broken internal links, so this catches most mistakes.
5. Open a **pull request** against `main`.

### Content standards

- **Start from the product, not the old page.** Check the Marketplace code and a running store before describing a screen, and copy labels exactly as the screen shows them.
- **Say who the page is for.** Under the H1, add the role badges for the panels the steps happen in:
  `<div class="page-roles"><span class="role role--admin">Admin</span><span class="role role--seller">Seller</span></div>`
  (`role--customer` for the storefront).
- **Write procedures as numbered steps**, one action per step, starting with the menu path in bold, such as **Marketplace >> Sellers** or **Catalog >> Products**.
- **Use a table** for a screen with more than three fields or settings.
- **Add screenshots** with `<ImagePopup src="/images/<page>/<file>.png" alt="…" />`, placed after the step they show. Capture them from a store with realistic sample data, never with placeholder text, and never from another store.
- **Keep settings and features apart.** Configuration pages describe a settings screen; feature pages describe what the feature does and link to its settings.
- **Generative AI** is the capability, **Magic AI** is the name in the admin. Only describe what the AI actually does: sellers generate product content and review it before saving.
- **Cross-link** related pages with relative links, such as `../catalog/product-management.md`.

### Moving, renaming or deleting a page

A published URL must keep working. When a page moves, is renamed, merged or deleted:

1. Add the old path to `MOVED_PAGES` in `.vitepress/_redirects.ts`, pointing at the new page.
2. Update the sidebar in `.vitepress/config.mts` and `src/public/llms.txt`.
3. The Bagisto User Guide also redirects old marketplace URLs to this site. Update its `MARKETPLACE_PAGES` map when a marketplace page moves.

## Deployment

The site deploys automatically. On every push to `main`, [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) installs dependencies, runs `npm run docs:build`, and publishes `.vitepress/dist` to the `gh-pages` branch via [`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages). The workflow also writes a `CNAME` file so GitHub Pages serves the site on the custom domain **marketplace-docs.bagisto.com**.

You can also trigger a deploy manually from the repository's **Actions** tab (**Deploy Docs to GitHub Pages → Run workflow**).
