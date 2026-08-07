# Seller Management

Seller Management is the admin's control centre for the people who sell on the marketplace — onboarding them, setting what they can do, approving their accounts and products, and stepping in when needed. It all lives under **Marketplace → Sellers** in the admin panel.

::: info What you'll learn
- How sellers register, and the settings that govern it
- What the admin sellers list shows and the actions on it
- How to create, edit, approve, and remove a seller
:::

## How sellers register

Sellers sign up from the storefront (or the admin creates them). A few admin settings under **Configure → Marketplace** shape registration:

- **Registration & Visibility** — whether new sellers need **approval**, whether seller profiles **show publicly** on the storefront, and whether sellers **can view customers**.
- **Order Capabilities** — what sellers may do with orders: **create invoice**, **create shipment**, **cancel order**, and whether a **minimum order amount** applies.
- **Uploads** — the **maximum file size** sellers can upload (used for logos, banners, and bulk-upload image ZIPs).

Exactly which fields a seller fills in at sign-up is driven by the [Seller Attributes](/sellers/seller-attributes) marked "visible on sign up".

## The sellers list

Open **Marketplace → Sellers**. Each row is a top-level seller, with columns for **Seller Name**, **Email**, **Slug**, **Cancellation Rate**, **Average Rating**, **Flags**, **Account Health** (a colour-coded score with a Healthy / At Risk / Unhealthy filter), **Status** (Approved / Disapproved), **Suspended**, and **Created At**.

<ImagePopup src="/images/seller-management/admin-sellers-grid.png" alt="Admin sellers list" />

Per-row actions include **Edit**, **Delete**, **Login as Seller** (impersonate), and **Refresh Account Health**. Bulk actions let you **Update Status** (Approve / Disapprove), **Refresh Account Health**, or **Delete** across a selection.

## Creating a seller

Use **Create** (a modal on the list) to onboard a seller manually — **name**, **email**, **phone**, **slug**, and a **password**. Whether the new seller is auto-approved depends on your **Approval Required** setting.

## Editing a seller

The seller edit form is built from [Seller Attributes](/sellers/seller-attributes), grouped into cards, with a channel/locale switcher for per-channel and per-language values.

<ImagePopup src="/images/seller-management/admin-seller-edit.png" alt="Admin seller edit form" />

The default groups are:

- **General** — name, email, phone, slug, business name.
- **Description** and **Policies** — business description, plus return / shipping / privacy policies.
- **Meta Description** — SEO title, keywords, description.
- **Address** and **Social Links**.
- **Settings** — the seller's **Suspended** toggle, **Commission Enabled** + **Commission Percentage** (a per-seller override of the global rate — see [Commission Management](/payments/commission-management)), **Minimum Order Amount**, **Google Analytics ID**, **Allowed Product Types**, and **Magic AI** enablement + generation limit.

The right side shows read-only **Total Sales**, **Commission**, and **Seller Earnings** summaries, plus the seller's sub-users, channels, and categories.

## Approving, impersonating, and removing

- **Approve / Disapprove** — from the row/bulk **Update Status** action; the seller is emailed when their status changes. A disapproved seller can't sell.
- **Login as Seller** — open the Seller Panel as that seller to see exactly what they see (great for support).
- **Delete** — remove a seller. This is **blocked** if the seller still has **pending or processing orders**, so no in-flight order is orphaned.
- **Flags** — review the flags customers have raised against a seller. See [Seller & Product Flagging](/moderation/seller-product-flagging).

::: tip
Keep an eye on the **Account Health** column — it surfaces struggling sellers (high cancellations, low ratings, or flags) at a glance. See [Seller Account Health](/sellers/seller-account-health).
:::
