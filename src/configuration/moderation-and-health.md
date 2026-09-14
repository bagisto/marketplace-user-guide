# Moderation & Health

<div class="page-roles"><span class="role role--admin">Admin</span></div>

The **Moderation & Health** screen lets customers report products and sellers,
and sets the cancellation rates that decide a seller's account health.

Go to **Configure >> Marketplace >> Moderation & Health**.

## Product Flags and Seller Flags

<ImagePopup src="/images/configuration/moderation-flags.png" alt="Product Flags and Seller Flags sections" />

| Section | Setting | What it does |
|---|---|---|
| Product Flags | **Enable Flag** | Lets customers report a product from its storefront page. |
| Seller Flags | **Enable Flag** | Lets customers who bought from a seller report that seller from the seller's shop page. Flags also count towards the seller's account health and show in your sellers list. |
| Seller Flags | **Show red flag on profile if limit exceeds** | Shows a red flag on a seller's shop page once they have more flags than the limit below. |
| Seller Flags | **Red Flag Limit** | The number of flags a seller can have before the red flag shows. Account health also scores flags against this number. |

The reasons customers pick from are managed under **Marketplace >> Configure >>
Flag Reasons**. See [Seller & Product Flagging](../moderation/seller-product-flagging.md).

## Account Health

<ImagePopup src="/images/configuration/moderation-account-health.png" alt="Account Health section" />

| Setting | What it does |
|---|---|
| **Cancellation Rate Warning (%)** | When this share of a seller's ordered items, or more, was cancelled in the last 30 days, the seller's cancellation rate is marked **Needs Attention**. It counts every cancelled item, whoever cancelled it. Required, from 0 to 100. Until this screen is first saved, 2.5 is used. |
| **Cancellation Rate Critical (%)** | When more than this share was cancelled, the cancellation rate is marked **Critical**. Required, from 0 to 100. Until this screen is first saved, 5 is used. |

See [Account Health](../sellers/seller-account-health.md) for how the score is
worked out.
