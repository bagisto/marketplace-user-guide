import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "en-US",
  title: "Bagisto Marketplace Guide",
  description:
    "User documentation for the Bagisto Multi-Vendor Marketplace — sellers, catalog, orders, payouts and moderation.",

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

    socialLinks: [
      { icon: "github", link: "https://github.com/bagisto/bagisto" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        collapsed: false,
        items: [{ text: "Introduction", link: "/getting-started/introduction" }],
      },
      {
        text: "Sellers",
        collapsed: false,
        items: [
          { text: "Registration & Sign-in", link: "/sellers/seller-registration" },
          { text: "Seller Dashboard", link: "/sellers/seller-dashboard" },
          { text: "Seller Management", link: "/sellers/seller-management" },
          { text: "Manage Profile", link: "/sellers/seller-profile" },
          { text: "Featured Sellers", link: "/sellers/featured-sellers" },
          { text: "Seller Account Health", link: "/sellers/seller-account-health" },
          { text: "Seller Users & Roles", link: "/sellers/seller-user-role-management" },
          { text: "Seller Attributes", link: "/sellers/seller-attributes" },
        ],
      },
      {
        text: "Catalog",
        collapsed: false,
        items: [
          { text: "Product Management", link: "/catalog/product-management" },
          { text: "Selling Existing Products", link: "/catalog/selling-existing-products" },
          { text: "Draft Products", link: "/catalog/draft-products" },
          { text: "Product Barcode", link: "/catalog/product-barcode" },
          { text: "Product Form Layout", link: "/catalog/product-form-layout" },
          { text: "Bulk Upload", link: "/catalog/bulk-upload" },
          { text: "Magic AI", link: "/catalog/magic-ai" },
        ],
      },
      {
        text: "Inventory",
        collapsed: false,
        items: [
          { text: "Inventory Source Management", link: "/inventory/inventory-source-management" },
          { text: "Manage Inventory", link: "/inventory/manage-inventory" },
        ],
      },
      {
        text: "Pricing",
        collapsed: false,
        items: [{ text: "Manage Pricing", link: "/pricing/manage-pricing" }],
      },
      {
        text: "Marketing",
        collapsed: false,
        items: [
          { text: "Product Discounts", link: "/marketing/product-discounts" },
          { text: "Checkout Deals", link: "/marketing/checkout-deals" },
        ],
      },
      {
        text: "Orders & Fulfilment",
        collapsed: false,
        items: [
          { text: "Order Management", link: "/orders/order-management" },
          { text: "Booking Management", link: "/orders/booking-management" },
          { text: "Fulfilment Carriers", link: "/orders/fulfilment-carriers" },
          {
            text: "Returns (RMA)",
            link: "/orders/return-merchandise-authorization",
          },
        ],
      },
      {
        text: "Payments & Commission",
        collapsed: false,
        items: [
          { text: "Payment Management", link: "/payments/payment-management" },
          { text: "Commission Management", link: "/payments/commission-management" },
          { text: "Mass Payout Management", link: "/payments/mass-payout-management" },
        ],
      },
      {
        text: "Subscriptions",
        collapsed: false,
        items: [
          { text: "Seller Subscriptions", link: "/subscriptions/seller-subscription-management" },
        ],
      },
      {
        text: "Customers & Communication",
        collapsed: false,
        items: [
          { text: "Customer Management", link: "/customers/customer-management" },
          { text: "Communications", link: "/customers/communications" },
        ],
      },
      {
        text: "Reviews & Moderation",
        collapsed: false,
        items: [
          { text: "Rating Management", link: "/moderation/rating-management" },
          { text: "Seller & Product Flagging", link: "/moderation/seller-product-flagging" },
        ],
      },
      {
        text: "Reporting",
        collapsed: false,
        items: [{ text: "Seller Reporting", link: "/reporting/seller-reporting" }],
      },
      {
        text: "Storefront",
        collapsed: false,
        items: [
          { text: "Marketplace Landing Page", link: "/storefront/marketplace-landing-page" },
          { text: "Seller Storefront", link: "/storefront/seller-storefront" },
        ],
      },
    ],
  },
});
