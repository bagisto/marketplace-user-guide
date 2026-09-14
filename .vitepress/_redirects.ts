/**
 * Pages that moved or were merged. Each old URL is written as a small
 * redirect page at build time (see `buildEnd` in config.mts), in both the
 * clean and the `.html` form, so links published before the move keep working.
 */
const MOVED_PAGES: Record<string, string> = {
  // Featured sellers are a storefront feature.
  "sellers/featured-sellers": "/storefront/featured-sellers",

  // Team users and roles are managed from the Seller Panel.
  "sellers/seller-user-role-management": "/seller-panel/users-and-roles",

  // Drafts, submission and admin approval are one lifecycle.
  "catalog/draft-products": "/catalog/product-approval",

  // Generative AI (Magic AI) has its own section.
  "catalog/magic-ai": "/generative-ai/generate-product-content",

  // Paying several sellers at once is part of the payouts page.
  "payments/mass-payout-management":
    "/payments/payment-management#pay-several-sellers-at-once",
};

function buildRedirects() {
  const map: Record<string, string> = {};

  for (const [from, to] of Object.entries(MOVED_PAGES)) {
    map[`/${from}`] = to;
    map[`/${from}.html`] = to;
  }

  return map;
}

export const redirects = buildRedirects();

export function makeRedirectHtml(to: string) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0; url=${to}" />
    <link rel="canonical" href="${to}" />
    <script>window.location.replace("${to}");</script>
  </head>
  <body>
    <p>Redirecting to <a href="${to}">${to}</a>…</p>
  </body>
</html>`;
}
