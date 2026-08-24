# Multi-Vendor Marketplace

The [Multi-Vendor Marketplace](https://bagisto.com/en/laravel-multi-vendor-marketplace/) turns a standard Bagisto store into a full marketplace. The admin keeps control of the platform — sellers, commissions, product approvals, moderation and payouts — while each seller gets a dedicated **Seller Panel** to run their own store, and customers shop across many sellers from a single cart.

::: info What's in this section
This section walks through every part of the marketplace, grouped by who uses it: the **marketplace admin**, the **sellers**, and the **customers**. Each capability below links to its own page.
:::

<ImagePopup src="/images/introduction/admin-marketplace.png" alt="Marketplace section in the admin panel" />

## For the marketplace admin

The admin panel gains a **Marketplace** section that governs the whole platform:

- **[Seller Management](/sellers/seller-management)** — review, approve, edit, suspend and log in as sellers, and watch each seller's **account health** and flags.
- **Product approval & assignment** — an **[approval queue](/catalog/product-management#drafts-submission-and-approval)** for seller products, and **[Selling Existing Products](/catalog/selling-existing-products)** so sellers can list existing catalog items as their own (and the admin can assign products to sellers).
- **[Commissions](/payments/commission-management)** and **[Mass Payout](/payments/mass-payout-management)** — set commission rates and settle many sellers at once, alongside per-seller **[Payments](/payments/payment-management)**.
- **[Subscription Plans](/subscriptions/seller-subscription-management)** — paid plans that cap product counts, staff counts, allowed product types and permissions.
- **Moderation** — **[Seller & Product Flagging](/moderation/seller-product-flagging)** with configurable flag reasons, plus account-health scoring that surfaces problem sellers automatically.
- **Marketing** — publish **[Product Discounts](/marketing/product-discounts)** for sellers to join, and run marketplace-wide **[Checkout Deals](/marketing/checkout-deals)**.
- **[Fulfilment Carriers](/orders/fulfilment-carriers)** — connect one courier account for the whole marketplace so sellers can buy shipping labels, schedule pickups and track shipments without seeing the credentials.
- **[Featured Sellers](/sellers/featured-sellers)** — highlight top sellers on the storefront, ranked by orders, products or ratings.
- **[Seller Attributes](/sellers/seller-attributes)** and the **[seller product form](/catalog/product-form-layout)** — define custom registration/profile fields, and choose the shape and step order of the product form sellers fill in.
- **[Marketplace Landing Page](/storefront/marketplace-landing-page)** — the pitch that recruits new sellers, written entirely from the admin panel.

## For sellers

Each seller [registers and signs in](/sellers/seller-registration) to their **Seller Panel** — a dedicated dashboard with a grouped sidebar (Catalog, Inventories, Pricing, Marketing, Sales, Performance, Reporting, Communication, Customers, Plans, Settings) and full dark-mode support:

- **[Dashboard](/sellers/seller-dashboard)** — the day's worklist, store health, payout position and sales trends, and **[Manage Profile](/sellers/seller-profile)** for the shop's own details, logo and banner.

- **Catalog** — **[Product Management](/catalog/product-management)**, **[Selling Existing Products](/catalog/selling-existing-products)**, **[Product Barcode](/catalog/product-barcode)** and **[Bulk Upload](/catalog/bulk-upload)**. Sellers can save **[draft products](/catalog/draft-products)**, and use **[Magic AI](/catalog/magic-ai)** to generate product content within admin-set limits.
- **Inventories & Pricing** — dedicated **Manage Inventory** and **Manage Pricing** screens, plus **[Inventory Sources](/inventory/inventory-source-management)** for multiple stock locations.
- **Sales** — **[Orders](/orders/order-management)**, **[Bookings](/orders/booking-management)** and **[Returns (RMA)](/orders/return-merchandise-authorization)**.
- **Marketing** — sellers create their own **[Product Discounts](/marketing/product-discounts)** and **[Checkout Deals](/marketing/checkout-deals)**, and can join the admin's product discounts.
- **Performance & Reporting** — an **account-health** score on the Performance menu, and **[sales, product and customer reports](/reporting/seller-reporting)**.
- **Team, customers & messaging** — **[Users & Roles](/sellers/seller-user-role-management)**, **[Customer insights](/customers/customer-management)**, and **[Communication](/customers/communications)** with the admin and buyers.

## For customers

- A public **[store page](/storefront/seller-storefront)** per seller, with the seller's products, banner, ratings and contact.

<ImagePopup src="/images/introduction/seller-storefront.png" alt="A seller's storefront" />

- **[Product offers](/storefront/seller-storefront#comparing-offers)** — compare the different sellers carrying the same product before buying.
- **[Ratings & reviews](/moderation/rating-management)** for both products and sellers.
- **[Flagging](/moderation/seller-product-flagging)** to report an inappropriate seller or product.
- Direct **[messaging](/customers/communications)** with sellers from the account area.
- **One cart** spanning products from several sellers and the admin.

::: tip New here?
Start with **[Seller Management](/sellers/seller-management)** to see how a seller joins and how the admin manages them end to end.
:::
