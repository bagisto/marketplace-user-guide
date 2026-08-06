# Product Discounts

Product Discounts are automatic price reductions a seller applies to their own catalog. Once a discount is active, every matching product shows its reduced price on the storefront — no coupon needed. Sellers can also opt into discounts the admin publishes for everyone.

::: info What you'll learn
- How to create a product discount (percentage or fixed)
- What each part of the discount form controls
- How to join a discount the admin has published
:::

## Creating a product discount

From the Seller Panel, open **Marketing → Product Discounts** and select **Create Product Discount**. The form is split across three tabs.

<ImagePopup src="/images/product-discounts/create.png" alt="Create Product Discount form" />

### Discount

Choose **how** the reduction is applied, then enter the amount:

- **Percentage off the price** — take a percentage off every product the discount matches (for example, 15% off).
- **Fixed amount off the price** — take a set amount off each matching product (for example, $5 off).
- **Discount Amount** — the percentage or fixed value to apply.

### Details

Give the discount its identity and schedule — a **name**, its **status** (active or not), and the **start and end dates** during which it runs.

### Advanced

Control **which products** the discount matches and its **priority**. Conditions decide the set of products (for example, by attribute, category, or price), and priority decides which discount wins when more than one could apply to the same product.

Save it, and the reduction applies automatically to the seller's matching products on the storefront.

## Managing discounts

The **Product Discounts** list shows every discount you've created, with its priority. From there you can edit a discount, change its status, or delete it. Deleting or deactivating a discount immediately restores the affected products to their normal price.

## Joining an admin product discount

The admin can publish product discounts for sellers to opt into. From **Marketing → Product Discounts**, select **Join Product Discounts** to see what's available.

<ImagePopup src="/images/product-discounts/join.png" alt="Join admin product discounts" />

- **Enroll** your products in a discount individually, or select several and use the **bulk enroll** action.
- **Withdraw** (individually or in bulk) to leave a discount at any time.

Once enrolled, the admin's discount reprices your listings for as long as you stay joined.

::: info Admin controls this
Joining admin discounts is governed by an admin setting. If the admin turns off *catalog-rule join*, joined discounts stop repricing sellers' products.
:::

::: tip
Product Discounts change a product's shown price. To reward the **whole cart** instead — or to gate an offer behind a coupon code — use [Checkout Deals](/marketing/checkout-deals). For a simple scheduled price cut on individual products, the [Manage Pricing](/pricing/manage-pricing) special price is often quicker.
:::
