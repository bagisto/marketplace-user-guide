# Checkout Deals

<div class="page-roles"><span class="role role--seller">Seller</span><span class="role role--admin">Admin</span></div>

A checkout deal is a discount on the cart. It can apply automatically, or only when
the customer enters a coupon code. Use it for offers such as 10% off when a customer
spends a certain amount, or buy two and get one free.

::: info In a cart with several sellers
A customer's cart can hold products from many sellers:

- A seller's deal only discounts that seller's products in the cart, including catalog
  products the seller sells.
- Conditions such as **Subtotal** count only that seller's products.
- Sellers can't offer free shipping or shipping discounts.
- The store's own cart rules don't discount seller products.
:::

## Create a checkout deal

1. Go to **Marketing >> Checkout Deals**.
2. Click **Create Checkout Deal**.
3. Fill in the **Deal**, **Details** and **Advanced** tabs, described below.
4. Click **Save Checkout Deal**.

You'll see **Checkout deal created successfully.**

### Deal

<ImagePopup src="/images/checkout-deals/deal.png" alt="The Deal tab with the four kinds of deal" />

Under **How would you like to reward your shoppers?**, choose a kind of deal and fill
in its amounts:

| Deal | What it does | Fields |
|---|---|---|
| **Percentage off the order** | A percentage off your matching products in the cart | **Discount Percent (%)**, **Maximum Discounted Quantity** |
| **Fixed amount off the order** | A set amount off the cart, once per order | **Discount Amount** |
| **Fixed amount off each item** | A set amount off each matching product | **Discount Amount**, **Maximum Discounted Quantity** |
| **Buy X, get Y free** | Free units of a product when the customer buys a set quantity of it | **Free Quantity**, **Buy X Quantity**, **Maximum Eligible Quantity** |

For **Buy X, get Y free**, the free units are of the same product, and the customer adds
them to the cart. With **Buy X Quantity** 2 and **Free Quantity** 1, the third unit is
free. There is no discount when **Free Quantity** is more than **Buy X Quantity**, or
when **Buy X Quantity** is 0.

### Details

<ImagePopup src="/images/checkout-deals/details.png" alt="The Details tab with a coupon code" />

1. Under **What should this deal be called?**, enter a **Name** and, if you like, a
   **Description**.
2. Under **How do shoppers get this deal?**, choose the **Coupon Type**:
   - **No Coupon** applies the deal automatically.
   - **Specific Coupon** needs a code at checkout.
3. For a specific coupon, choose **Auto Generate Coupon**:
   - **No** to enter one **Coupon Code** yourself. Codes must be unique across the
     store.
   - **Yes** to create many codes after you save. See
     [Create coupon codes](#create-coupon-codes).
4. For a specific coupon, enter **Total Uses** to limit how many times each coupon code
   can be used, including each generated code. Leave it at 0 for no limit.
5. Under **When should it run?**, choose the **Starts From** and **Ends Till** dates.
   The deal stops at the start of its **Ends Till** date, so choose the day after the
   last day you want it to run.

### Advanced

<ImagePopup src="/images/checkout-deals/advanced.png" alt="The Advanced tab with cart conditions" />

Add conditions in the same way as for a product discount. Checkout deals can also
check the cart:

- **Cart attribute** — **Subtotal**, **Total items-qty**, **Payment method**,
  **Shipping method**, **Shipping postcode**, **Shipping state**,
  **Shipping country**.
- **Cart item attribute** — **Price in cart**, **Quantity in cart**,
  **Total Weight**, **Subtotal**, **Additional**.
- **Product attribute** — **Categories**, **Categories(Children Only)**,
  **Categories(Parent Only)**, **Attribute Family** and product attributes. Each
  product attribute can also be checked on child products only or parent products
  only.

Under **Who should it apply to?**:

| Setting | What it does |
|---|---|
| **Channels** | The channels the deal runs on |
| **Customer Groups** | The customer groups who get the deal |
| **Priority** | The order your deals are applied in, starting from the lowest number |
| **Stop Further Rules** | Choose **Yes** to stop your deals with a higher priority number from applying once this one does |
| **Uses Per Customer** | How many times one signed-in customer can use the deal. Guests aren't limited. Leave it at 0 for no limit. |
| **Status** | Switches the deal on or off |

When several of your deals match, they all apply, in priority order, until a deal with
**Stop Further Rules** set to **Yes**. A cart can hold only one coupon code at a time.

## Create coupon codes

1. Create a deal with **Specific Coupon** and **Auto Generate Coupon** set to **Yes**,
   and save it.
2. In **Marketing >> Checkout Deals**, click the edit icon on the deal.
3. Open the **Details** tab and click **Generate now**.
4. In **Generate Coupons**, enter the **Coupon Quantity**, from 1 to 1,000, and the
   **Coupon Length**, from 10 to 100 characters.
5. Choose the **Code Format**: **Alphanumeric**, **Alphabetical** or **Numeric**.
6. If you like, enter a **Code Prefix** and **Code Suffix**.
7. Click **Generate**.

<ImagePopup src="/images/checkout-deals/generate-coupons.png" alt="The Generate Coupons dialog" />

The page reloads, and the codes are listed on the same tab with their **Times Used**,
**Created Date** and **Expiration Date**. Click the delete icon to remove a code.

## Copy a deal

Click the copy icon on a deal's row. A copy named **Copy of …** is created straight
away, switched off, and opens for editing. Coupon codes aren't copied, so add a new
code or generate new ones.

## Manage your deals

The **Checkout Deals** list shows each deal's name, whether it is active, its priority
and its dates, with icons to edit, copy or delete it.

## For the admin

Go to **Marketplace >> Marketing >> Checkout Deals** to see the deals sellers have
created, with the **Seller**, status, priority and dates. You can filter the list by
status. To delete a seller's deal, click its delete icon, or tick several deals and use
**Select Action >> Delete**.

## Permissions

- Team members need **Checkout Deals**, with **Create**, **Edit**, **Copy**, **Delete**
  and **Coupons** as needed.
- Admins need **Marketplace >> Marketing >> Checkout Deals** with **Delete** to delete
  sellers' deals.
