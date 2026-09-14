# Manage Pricing

<div class="page-roles"><span class="role role--seller">Seller</span></div>

Manage Pricing lets you update prices, sale prices and customer group prices for all
your products on one screen, and save every change at once.

Go to **Pricing >> Manage Pricing**.

<ImagePopup src="/images/manage-pricing/pricing.png" alt="The Pricing screen" />

## What you can change

The list includes your simple and virtual products, and each variant of a product
with variations.

| Field | Products you created | Catalog products you sell |
|---|---|---|
| **Price** | Yes | Yes |
| **Sale Price**, **Valid From**, **Valid To** | Yes | No |
| **Customer Group Prices** | Yes | No |

For catalog products you sell as your own, the other fields show a dash.

## Change prices

1. Go to **Pricing >> Manage Pricing**.
2. Change the **Price**, or enter a **Sale Price** with the **Valid From** and
   **Valid To** dates it runs between.
3. Click **Save Prices** in the bar at the bottom of the page.

You'll see **Prices saved successfully.** A sale price must be lower than the price,
and **Valid To** must be on or after **Valid From**.

Your changes stay while you move between pages or search, but they are lost if you
reload the page before saving. Click **Discard** to undo them.

## Add customer group prices

For products you created, you can offer a different price to a customer group, or for
larger quantities.

1. Click the arrow at the start of the product's row.
2. Under **Customer Group Prices**, click **Add tier**.
3. Choose the **Customer Group**, or **All Groups**.
4. Enter the **Min. Qty**.
5. Choose the **Type**: **Fixed** for a set price, or **Discount** for a percentage
   off.
6. Enter the **Value**.
7. Click **Save Prices**.

<ImagePopup src="/images/manage-pricing/tier-prices.png" alt="Customer group prices for a product" />

To remove a tier, click **Remove tier** on its row and save. A discount can't be more
than 100%.

## Change many prices at once

1. Tick the products.
2. In **Action**, choose **Set to**, **Increase by** or **Decrease by**.
3. For an increase or decrease, choose the **Mode**: **Amount** or **Percent (%)**.
4. Enter the **Value**.
5. Click **Apply**.
6. Click **Save Prices**.

<ImagePopup src="/images/manage-pricing/bulk-price.png" alt="Changing the price of several products at once" />

**Apply** changes only the **Price** of the ticked products on the current page. It
doesn't change sale prices or customer group prices.

Percentage changes don't cancel each other out. Lowering a price by 20% and then
raising it by 20% leaves it at 96% of where it started. For a sale, use a sale price
with dates instead.

## Find products

Search by product name or SKU, or click **Filter** to narrow the list by **Product**,
**SKU**, **Type**, **Category** or **ID**.

## Other ways to lower prices

- For a discount on a group of products that matches a rule, use
  [Product Discounts](../marketing/product-discounts.md).
- For a discount on the cart, or one that needs a coupon, use
  [Checkout Deals](../marketing/checkout-deals.md).

Team members need **Manage Pricing** with **Save Prices** to save changes.
