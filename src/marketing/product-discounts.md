# Product Discounts

Product Discounts are automatic price reductions a seller applies to their **own catalog**. Once a discount is active, every matching product shows its reduced price on the storefront — no coupon needed. Sellers can also opt into discounts the admin publishes for everyone.

::: info What you'll learn
- How to create a product discount, tab by tab
- How the conditions builder targets the right products
- How to manage discounts and join admin-published ones
:::

## Creating a product discount

From the Seller Panel, open **Marketing → Product Discounts** and select **Create Product Discount**. The form has three tabs — **Discount**, **Details**, and **Advanced** — and the tab strip flags any tab that still has errors.

### Discount

Choose **how** the reduction is applied and by how much:

<ImagePopup src="/images/product-discounts/discount.png" alt="Product discount — Discount tab" />

- **Percentage off the price** — take a percentage off every matching product (for example, 15%).
- **Fixed amount off the price** — take a set amount off each matching product (for example, $5).
- **Discount Amount** — the percentage (max 100) or fixed value to apply.

### Details

Give the discount its identity and schedule:

<ImagePopup src="/images/product-discounts/details.png" alt="Product discount — Details tab" />

- **Name** and an optional **Description**.
- **Marketing Time** — a **Starts From** and **Ends Till** date window (leave empty to run indefinitely).

### Advanced

Decide **which products** the discount applies to and how it behaves:

<ImagePopup src="/images/product-discounts/advanced.png" alt="Product discount — Advanced tab with conditions" />

- **Conditions** — a rule builder. Add one or more conditions, each an **Attribute → Operator → Value** row (for example, *Category → Contains → Summer*, or *Price → greater than → 50*). Attributes cover the product's category, attribute family, and every product attribute; operators adapt to the attribute type (equals, contains, greater/less than, and so on).
- **All conditions true / Any conditions true** — whether a product must match every condition or just one.
- **Priority** — which discount wins when several could apply to the same product.
- **End Other Rules** — set to **Yes** to stop lower-priority discounts once this one matches.
- **Channels** and **Customer Groups** — where and for whom the discount applies (defaults to all of yours).
- **Status** — turn the discount on or off.

Select **Save Product Discount**, and the reduction applies automatically to your matching products on the storefront.

## Managing discounts

The **Product Discounts** list shows every discount you've created with its **priority**, dates, and status. From there you can **Edit** a discount or **Delete** it — deleting or disabling one immediately restores the affected products to their normal price.

## Joining an admin product discount

The admin can publish product discounts for sellers to opt into. From **Marketing → Product Discounts**, select **Join Product Discounts** to see what's available.

<ImagePopup src="/images/product-discounts/join.png" alt="Join admin product discounts" />

- **View** a discount to see its full terms (conditions, actions, schedule) read-only.
- **Enroll** your products individually or with the **bulk enroll** action; **Withdraw** the same way to leave.
- Each enrollment shows a status — **Approved**, **Pending**, or **Disapproved**. Depending on the admin's setting, joining is either auto-approved or waits for the admin to approve it.

Once enrolled and approved, the admin's discount reprices your listings for as long as you stay joined.

::: info Admin controls this
Joining admin discounts is governed by an admin capability. If the admin turns off catalog-rule joining, joined discounts stop repricing your products.
:::

::: tip
Product Discounts change a product's **shown price**. To reward the **whole cart** — or to gate an offer behind a coupon code — use [Checkout Deals](/marketing/checkout-deals). For a quick scheduled price cut on individual products, the [Manage Pricing](/pricing/manage-pricing) special price is often simpler.
:::
