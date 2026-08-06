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
    siteTitle: "Marketplace Guide",

    logo: {
      light: "/logo.png",
      dark: "/logo.png",
    },

    nav: [
      { text: "Introduction", link: "/introduction" },
      { text: "User Guide", link: "https://docs.bagisto.com/" },
      { text: "Dev Docs", link: "https://devdocs.bagisto.com/" },
      { text: "Extensions", link: "https://bagisto.com/en/extensions/" },
    ],

    editLink: {
      pattern:
        "https://github.com/bagisto/marketplace-user-guide/edit/master/src/:path",
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
        items: [{ text: "Introduction", link: "/introduction" }],
      },
      {
        text: "Sellers",
        collapsed: false,
        items: [
          { text: "Seller Management", link: "/seller-management" },
          { text: "Featured Sellers", link: "/featured-sellers" },
          { text: "Seller Account Health", link: "/seller-account-health" },
          { text: "Seller Users & Roles", link: "/seller-user-role-management" },
          { text: "Seller Attributes", link: "/seller-attributes" },
        ],
      },
      {
        text: "Catalog",
        collapsed: false,
        items: [
          { text: "Product Management", link: "/product-management" },
          { text: "Selling Existing Products", link: "/selling-existing-products" },
          { text: "Draft Products", link: "/draft-products" },
          { text: "Product Barcode", link: "/product-barcode" },
          { text: "Bulk Upload", link: "/bulk-upload" },
          { text: "Magic AI", link: "/magic-ai" },
        ],
      },
      {
        text: "Inventory & Pricing",
        collapsed: false,
        items: [
          { text: "Inventory Source Management", link: "/inventory-source-management" },
          { text: "Manage Inventory", link: "/manage-inventory" },
          { text: "Manage Pricing", link: "/manage-pricing" },
        ],
      },
      {
        text: "Marketing",
        collapsed: false,
        items: [{ text: "Promotions & Deals", link: "/marketing" }],
      },
      {
        text: "Orders & Fulfilment",
        collapsed: false,
        items: [
          { text: "Order Management", link: "/order-management" },
          { text: "Booking Management", link: "/booking-management" },
          { text: "Fulfilment Carriers", link: "/fulfilment-carriers" },
          {
            text: "Returns (RMA)",
            link: "/return-merchandise-authorization",
          },
        ],
      },
      {
        text: "Payments & Commission",
        collapsed: false,
        items: [
          { text: "Payment Management", link: "/payment-management" },
          { text: "Commission Management", link: "/commission-management" },
          { text: "Mass Payout Management", link: "/mass-payout-management" },
        ],
      },
      {
        text: "Subscriptions",
        collapsed: false,
        items: [
          { text: "Seller Subscriptions", link: "/seller-subscription-management" },
        ],
      },
      {
        text: "Customers & Communication",
        collapsed: false,
        items: [
          { text: "Customer Management", link: "/customer-management" },
          { text: "Communications", link: "/communications" },
        ],
      },
      {
        text: "Reviews & Moderation",
        collapsed: false,
        items: [
          { text: "Rating Management", link: "/rating-management" },
          { text: "Seller & Product Flagging", link: "/seller-product-flagging" },
        ],
      },
      {
        text: "Reporting",
        collapsed: false,
        items: [{ text: "Seller Reporting", link: "/seller-reporting" }],
      },
    ],
  },
});
