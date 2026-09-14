import { defineConfig } from "vitepress";
import fs from "fs";
import path from "path";
import { redirects, makeRedirectHtml } from "./_redirects";

// A sidebar group heading with an outline icon (styles in theme/custom.css).
function groupLabel(label: string, icon: string) {
  return `<span class="sb-group sb-icon--${icon}"><span class="sb-group__icon" aria-hidden="true"></span><span class="sb-group__label">${label}</span></span>`;
}

// The headline capability gets its gradient label and glyph.
function featureLabel(label: string, feature: string) {
  return `<span class="sb-feature feature--${feature}"><span class="sb-feature__icon" aria-hidden="true"></span><span class="sb-feature__label">${label}</span></span>`;
}

export default defineConfig({
  lang: "en-US",
  title: "Bagisto Marketplace Guide",
  description:
    "User documentation for the Bagisto Multi-Vendor Marketplace — sellers, catalog, orders, payouts, Generative AI and moderation.",

  srcDir: "./src",
  cleanUrls: true,
  lastUpdated: true,

  vite: {
    server: {
      host: "0.0.0.0",
    },
  },

  head: [
    ["link", { rel: "icon", type: "image/png", href: "/favicon.ico" }],
  ],

  themeConfig: {
    siteTitle: false,

    logo: {
      light: "/logo.png",
      dark: "/logo.png",
    },

    nav: [
      { text: "Introduction", link: "/getting-started/introduction" },
      { text: "Generative AI", link: "/generative-ai/introduction" },
      { text: "User Guide", link: "https://docs.bagisto.com/" },
      { text: "Dev Docs", link: "https://devdocs.bagisto.com/" },
      { text: "Extensions", link: "https://bagisto.com/en/extensions/" },
    ],

    editLink: {
      pattern:
        "https://github.com/bagisto/marketplace-user-guide/edit/main/src/:path",
      text: "Help us improve this page on GitHub.",
    },

    lastUpdated: {
      text: "Last Updated",
      formatOptions: {
        dateStyle: "full",
      },
    },

    search: {
      provider: "local",
    },

    outline: {
      level: [2, 3],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/bagisto/bagisto" },
    ],

    sidebar: [
      {
        text: groupLabel("Getting Started", "rocket"),
        collapsed: false,
        items: [
          { text: "Introduction", link: "/getting-started/introduction" },
          { text: "Admin Quick Start", link: "/getting-started/admin-quick-start" },
          { text: "Seller Quick Start", link: "/getting-started/seller-quick-start" },
        ],
      },
      {
        text: featureLabel("Generative AI", "ai"),
        collapsed: false,
        items: [
          { text: "Overview", link: "/generative-ai/introduction" },
          { text: "Generate Product Content", link: "/generative-ai/generate-product-content" },
          { text: "Usage Limits", link: "/generative-ai/usage-limits" },
        ],
      },
      {
        text: groupLabel("Sellers", "users"),
        collapsed: false,
        items: [
          { text: "Becoming a Seller", link: "/sellers/becoming-a-seller" },
          { text: "Seller Management", link: "/sellers/seller-management" },
          { text: "Seller Attributes", link: "/sellers/seller-attributes" },
          { text: "Account Health", link: "/sellers/seller-account-health" },
        ],
      },
      {
        text: groupLabel("Seller Panel", "dashboard"),
        collapsed: false,
        items: [
          { text: "Seller Panel Overview", link: "/seller-panel/overview" },
          { text: "Dashboard", link: "/seller-panel/dashboard" },
          { text: "Manage Profile", link: "/seller-panel/manage-profile" },
          { text: "Account Settings", link: "/seller-panel/account-settings" },
          { text: "Users & Roles", link: "/seller-panel/users-and-roles" },
        ],
      },
      {
        text: groupLabel("Catalog", "package"),
        collapsed: false,
        items: [
          { text: "Product Management", link: "/catalog/product-management" },
          { text: "Selling Existing Products", link: "/catalog/selling-existing-products" },
          { text: "Product Approval", link: "/catalog/product-approval" },
          { text: "Bulk Upload", link: "/catalog/bulk-upload" },
          { text: "Product Barcode", link: "/catalog/product-barcode" },
          { text: "Product Form Layout", link: "/catalog/product-form-layout" },
        ],
      },
      {
        text: groupLabel("Inventory", "warehouse"),
        collapsed: false,
        items: [
          { text: "Manage Inventory", link: "/inventory/manage-inventory" },
          { text: "Inventory Sources", link: "/inventory/inventory-source-management" },
        ],
      },
      {
        text: groupLabel("Pricing", "tag"),
        collapsed: false,
        items: [{ text: "Manage Pricing", link: "/pricing/manage-pricing" }],
      },
      {
        text: groupLabel("Marketing", "megaphone"),
        collapsed: false,
        items: [
          { text: "Product Discounts", link: "/marketing/product-discounts" },
          { text: "Joining Admin Discounts", link: "/marketing/join-product-discounts" },
          { text: "Checkout Deals", link: "/marketing/checkout-deals" },
        ],
      },
      {
        text: groupLabel("Orders &amp; Fulfilment", "truck"),
        collapsed: false,
        items: [
          { text: "Order Management", link: "/orders/order-management" },
          { text: "Shipments & Carriers", link: "/orders/fulfilment-carriers" },
          { text: "Bookings", link: "/orders/booking-management" },
          { text: "Returns (RMA)", link: "/orders/return-merchandise-authorization" },
        ],
      },
      {
        text: groupLabel("Payments &amp; Commission", "wallet"),
        collapsed: false,
        items: [
          { text: "Commission", link: "/payments/commission-management" },
          { text: "Payment Requests & Payouts", link: "/payments/payment-management" },
          { text: "Transactions", link: "/payments/transactions" },
        ],
      },
      {
        text: groupLabel("Subscription Plans", "layers"),
        collapsed: false,
        items: [
          { text: "Plans & Subscriptions", link: "/subscriptions/seller-subscription-management" },
          { text: "Choosing a Plan", link: "/subscriptions/choosing-a-plan" },
        ],
      },
      {
        text: groupLabel("Customers &amp; Communication", "message"),
        collapsed: false,
        items: [
          { text: "Seller Customers", link: "/customers/customer-management" },
          { text: "Communications", link: "/customers/communications" },
        ],
      },
      {
        text: groupLabel("Storefront", "bag"),
        collapsed: false,
        items: [
          { text: "Marketplace Landing Page", link: "/storefront/marketplace-landing-page" },
          { text: "Seller Shop Page", link: "/storefront/seller-shop-page" },
          { text: "Shopping Across Sellers", link: "/storefront/shopping-across-sellers" },
          { text: "Featured Sellers", link: "/storefront/featured-sellers" },
        ],
      },
      {
        text: groupLabel("Reviews &amp; Moderation", "shield"),
        collapsed: false,
        items: [
          { text: "Reviews & Ratings", link: "/moderation/rating-management" },
          { text: "Seller & Product Flagging", link: "/moderation/seller-product-flagging" },
        ],
      },
      {
        text: groupLabel("Reporting", "chart"),
        collapsed: false,
        items: [{ text: "Seller Reports", link: "/reporting/seller-reporting" }],
      },
      {
        text: groupLabel("Configuration", "wrench"),
        collapsed: false,
        items: [
          { text: "Overview", link: "/configuration/overview" },
          { text: "General", link: "/configuration/general" },
          { text: "Sellers", link: "/configuration/sellers" },
          { text: "Products", link: "/configuration/products" },
          { text: "Moderation & Health", link: "/configuration/moderation-and-health" },
          { text: "Marketing", link: "/configuration/marketing" },
          { text: "Fulfilment Carriers", link: "/configuration/fulfilment-carriers" },
          { text: "Featured Sellers", link: "/configuration/featured-sellers" },
          { text: "Landing Page", link: "/configuration/landing-page" },
          { text: "Generative AI (Magic AI)", link: "/configuration/generative-ai" },
        ],
      },
    ],
  },

  // Write a redirect page for every moved URL.
  buildEnd(siteConfig) {
    const outDir = siteConfig.outDir;

    Object.entries(redirects).forEach(([from, to]) => {
      const filePath = from.endsWith(".html")
        ? path.join(outDir, from)
        : path.join(outDir, from, "index.html");

      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, makeRedirectHtml(to), "utf-8");
      console.log(`✅ Redirect created: ${from} -> ${to}`);
    });
  },
});
