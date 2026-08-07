# Product Management

Product Management is where a seller builds and maintains their catalog — creating listings, editing every detail, tracking approval, and keeping stock and pricing current. Everything a seller lists passes through the admin's approval before it reaches the storefront.

::: info What you'll learn
- What the products list shows and how to act on it
- The two ways to add a product, and the guided "List Your Product" flow
- Every section of the product form and how listings get approved
:::

## The products list

From the Seller Panel, open **Catalog → Products**. This is every product the seller owns or has assigned, each row showing its image, **name / SKU / product number**, **price**, **stock**, **status** (Active / Disable), **approval** state, **draft** state, **type**, **category**, and **barcode**.

<ImagePopup src="/images/product-management/products-list.png" alt="Seller products list" />

- **Search** and **Filter** narrow the list — including filters for approval (**Approved / Waiting For Approval / Rejected**) and draft (**Draft / Submitted**).
- The row menu lets you **Edit** or **Delete** a product.
- **Checkboxes** enable bulk actions: **Delete**, **Generate Barcode**, and **Print Barcodes** (see [Product Barcode](/catalog/product-barcode)).

::: info Owned vs assigned
Deleting a product you **created** removes it from the catalog. Deleting one you're only **reselling** (assigned) just removes your listing — the underlying catalog product stays. See [Selling Existing Products](/catalog/selling-existing-products).
:::

## Adding a product

Product creation starts from the **List Your Product** launcher (the sidebar's create entry). It offers three ways to add products:

<ImagePopup src="/images/product-management/create-launcher.png" alt="List Your Product launcher" />

- **Create New Products** — build a brand-new listing from scratch with a short guided flow.
- **Search Products** — list something already in the marketplace catalog as your own. See [Selling Existing Products](/catalog/selling-existing-products).
- **Bulk Upload** — add many products at once from a spreadsheet. See [Bulk Upload](/catalog/bulk-upload).

::: warning Complete your profile first
The create flow is only available once your seller profile is complete. If it isn't, the launcher prompts you to **update your profile details** before you can list a product. If a subscription plan caps your catalog, you're also stopped once you reach your plan's product limit.
:::

### The "What kind of product?" funnel

Choosing **Create New Products** opens a plain-language funnel that maps your answers to the right Bagisto product type behind the scenes:

<ImagePopup src="/images/product-management/scratch-funnel.png" alt="What kind of product funnel" />

1. **What kind of product are you selling?** — pick one of six kinds:
   - **Physical Product** — a tangible item you ship (a *simple* product; can have variations).
   - **Digital Download** — a downloadable file such as an e-book or software.
   - **Service or Membership** — an intangible offering with no shipping.
   - **Bookable** — a product customers reserve for a date or time. See [Booking Management](/orders/booking-management).
   - **Bundle** — several products sold together as one package.
   - **Grouped Products** — a set of related products shown together.
2. **Does this product have variations?** — for a physical product, answer **Yes** to create variants (size, colour, …) or **No** for a single item.
3. **Which attribute family** the product belongs to, and — for a variable product — **which attributes will vary**.
4. **What SKU would you like to use?**

Select **Continue** and the product opens on the edit form, created as a **draft** so you can finish it privately.

## The product form

The edit form is where the listing takes shape. A **Listing Completeness** bar at the top shows how much is filled in — a more complete listing gets more visibility and is easier to approve. The form is organised into two phases (**Product Basics → Complete Listing**) with tabbed sections.

<ImagePopup src="/images/product-management/edit-general.png" alt="Product edit form — General" />

The header carries the key actions: **Back**, **Preview** (opens the storefront page once the product is active and visible), a Magic AI **Generate content** button where enabled ([Magic AI](/catalog/magic-ai)), and — depending on state — **Save as Draft** / **Submit** for a draft, or **Save Product** for a live one. A **channel** and **locale** switcher let you edit per-channel and per-language values.

The tabbed sections are:

- **General** — SKU, product number, name, URL key, tax category, and the family's other core attributes.
- **Price** — the selling price, cost, and special (sale) price with a date range, plus a **Customer Group Price** panel for tiered pricing (fixed or discount, per quantity, for all or specific customer groups). For bulk pricing across products, see [Manage Pricing](/pricing/manage-pricing).

<ImagePopup src="/images/product-management/edit-price.png" alt="Product edit form — Price" />

- **Description** — the short and full descriptions (rich-text). Sellers with access can draft these with [Magic AI](/catalog/magic-ai).
- **Meta Description** — meta title, keywords, and description for SEO.
- **Shipping** — weight and dimensions used for shipping calculations.
- **Settings** — toggles such as New, Featured, Visible Individually, Status, and Guest Checkout.
- **Inventories** — stock per inventory source, with a "pending ordered quantity" hint. See [Manage Inventory](/inventory/manage-inventory).
- **RMA** — the product's return policy: a **Status** toggle and, when on, a **Rule** that governs returns. See [Returns (RMA)](/orders/return-merchandise-authorization).

<ImagePopup src="/images/product-management/edit-rma.png" alt="Product edit form — RMA" />

- **Barcode** — the product's barcode value and its auto-generated image. See [Product Barcode](/catalog/product-barcode).
- **Media** — product images (suggested resolution 609 × 560 px) and video.
- **Organization** — the channels the product belongs to, its categories (searchable tree), and related / up-sell / cross-sell links.

Depending on the product kind, a **type-specific** section also appears — for example **Variations** for a configurable product (add variants, generate combinations, set per-variant price/stock), downloadable **Links & Samples**, bundle items, grouped products, or booking availability.

::: tip
Keep the **Listing Completeness** bar as close to 100% as you can before submitting — complete listings rank better and are quicker for the admin to approve.
:::

## Drafts, submission, and approval

- **Save as Draft** keeps a work-in-progress private — it isn't sent for approval and never shows on the storefront. See [Draft Products](/catalog/draft-products).
- **Submit** sends the product into the **approval** flow. Until the admin approves it, the products list shows it as **Waiting For Approval**.
- The admin reviews products under **Marketplace → Products** in the admin panel. Once approved, the product goes live; if **rejected**, the admin attaches a reason and the listing shows as **Rejected** so you know what to fix before resubmitting.
