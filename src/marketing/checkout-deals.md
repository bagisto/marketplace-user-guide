# Checkout Deals

Checkout Deals are cart-level promotions — discounts and coupons that apply to the **shopping cart** rather than to a single product. Use them to reward a whole order (spend a threshold, get a discount), optionally behind a coupon code the customer enters at checkout.

::: info What you'll learn
- How to create a checkout deal, tab by tab
- The four deal types and how coupons work
- How to generate coupon codes and copy a deal
:::

## Creating a checkout deal

From the Seller Panel, open **Marketing → Checkout Deals** and select **Create Checkout Deal**. Like product discounts, the form has three tabs — **Deal**, **Details**, and **Advanced**.

### Deal

Choose what kind of reward the cart gets:

<ImagePopup src="/images/checkout-deals/deal.png" alt="Checkout deal — Deal tab" />

- **Percentage off** — a percentage off the qualifying items.
- **Fixed amount off the whole cart** — a set amount off the cart total.
- **Fixed amount off (per item)** — a set amount off each qualifying item.
- **Buy X get Y** — give free quantity when a buy quantity is met.

Depending on the type you'll also set the **discount amount**, and for *Buy X get Y* the **buy quantity** and **maximum eligible quantity** (or a **maximum discounted quantity** for the amount-based types).

### Details

Name the deal, schedule it, and decide how shoppers get it:

<ImagePopup src="/images/checkout-deals/details.png" alt="Checkout deal — Details tab with coupon" />

- **Name** and optional **Description**.
- **Coupon Type** — **No Coupon** (the deal applies automatically to qualifying carts) or **Specific Coupon** (the customer must enter a code). For a specific coupon you choose whether to **auto-generate** codes or set a single **coupon code**, plus **uses per coupon**.
- **Marketing Time** — a **Starts From** / **Ends Till** window.

### Advanced

Target the deal and control its limits:

<ImagePopup src="/images/checkout-deals/advanced.png" alt="Checkout deal — Advanced tab with conditions" />

- **Conditions** — a rule builder against the **cart** (subtotal, item count, payment/shipping method, shipping address), **cart items** (price, quantity, weight, subtotal), and **products** (category, family, attributes). Combine with **All conditions true** or **Any conditions true**.
- **Priority** and **End Other Rules** — ordering against your other deals.
- **Uses per customer** — cap how often one customer can use the deal.
- **Channels**, **Customer Groups**, and **Status**.

Select **Save Checkout Deal**.

## Coupons

When a deal uses a **Specific Coupon** with auto-generation, you can bulk-generate codes from the deal's **Coupons** screen. The **Generate Coupons** dialog lets you set the **quantity**, **code length**, **format** (alphanumeric / alphabetical / numeric), and an optional **prefix** and **suffix**. Each generated code is listed with how many **times** it's been **used** and its dates, and codes can be deleted individually.

Seller coupons get their own box at checkout, separate from the store-wide coupon field — see [Seller Storefront](/storefront/seller-storefront#one-cart-several-sellers) for what a shopper sees.

## Copying a deal

To build a similar promotion quickly, use **Copy** on an existing deal. It duplicates the deal's settings into a new, **inactive** copy (named "Copy of …") and opens it for editing — faster than rebuilding a recurring campaign from scratch.

## Managing deals

The **Checkout Deals** list shows each deal with its priority, dates, and status, and offers **Edit**, **Copy**, and **Delete** actions.

::: tip
Reach for a Checkout Deal when the offer depends on the **whole cart** (spend $X, get Y) or needs a **coupon code**. To simply lower the shown price of individual products, use [Product Discounts](/marketing/product-discounts) or the [Manage Pricing](/pricing/manage-pricing) special price instead.
:::
