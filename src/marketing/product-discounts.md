# Product Discounts

<div class="page-roles"><span class="role role--seller">Seller</span><span class="role role--admin">Admin</span></div>

A product discount lowers the price of your products automatically, with no coupon.
Customers see the reduced price on the storefront while the discount runs.

A product discount only lowers the price of products you created. Catalog products you
sell as your own aren't included. Discounts don't need the admin's approval.

To take part in the store's own discounts, see
[Joining Admin Discounts](join-product-discounts.md).

## Create a product discount

1. Go to **Marketing >> Product Discounts**.
2. Click **Create Product Discount**.
3. Fill in the **Discount**, **Details** and **Advanced** tabs, described below.
4. Click **Save Product Discount**.

A tab with a mistake shows a red count, and the form opens that tab when you save.

You'll see **Product discount created successfully.**

### Discount

<ImagePopup src="/images/product-discounts/discount.png" alt="The Discount tab of a product discount" />

1. Under **How would you like to discount these products?**, choose
   **Percentage off the price** or **Fixed amount off the price**.
2. Enter the **Discount Amount**. A percentage can't be more than 100, and a fixed
   amount can't take a price below zero.

### Details

<ImagePopup src="/images/product-discounts/details.png" alt="The Details tab of a product discount" />

1. Under **What should this discount be called?**, enter a **Name** and, if you like,
   a **Description**.
2. Under **When should it run?**, choose the **Starts From** and **Ends Till** dates.

### Advanced

<ImagePopup src="/images/product-discounts/advanced.png" alt="The Advanced tab with conditions and settings" />

Under **Which products should it match?**, choose the products the discount covers:

1. In **Condition Type**, choose **All Conditions Are True** or
   **Any Condition Is True**.
2. Click **Add Condition**.
3. Choose what to check, such as **Categories**, **Attribute Family**, **Price** or
   **Color**.
4. Choose how to compare it, and the value.

With no conditions, the discount covers all your products.

| For | You can compare with |
|---|---|
| Numbers, prices and dates | **Is equal to**, **Is not equal to**, **Equals or greater than**, **Equals or less than**, **Greater than**, **Less than** |
| Text | **Is equal to**, **Is not equal to**, **Contains**, **Does not contain** |
| Yes/No and single choices | **Is equal to**, **Is not equal to** |
| Multiple choices and categories | **Contains**, **Does not contain** |

In **Settings**:

| Setting | What it does |
|---|---|
| **Channels** | The channels the discount runs on. All your channels are selected at first. If none is selected, it runs on all of them. |
| **Customer Groups** | The customer groups who get the discount. All groups are selected at first. If none is selected, every group gets it. |
| **Priority** | The order discounts are applied in, starting from the lowest number. This covers your own discounts and the store discounts you've joined. |
| **Stop Further Rules** | Choose **Yes** so that, once this discount applies, no discount with a higher priority number applies, including store discounts you've joined. |
| **Status** | Switches the discount on or off. |

When several discounts match a product, each one comes off the price left by the one
before, until a discount with **Stop Further Rules** set to **Yes**.

## Manage your discounts

The **Product Discounts** list shows each discount's name, whether it is active, its
priority and its dates. Click the edit icon to change a discount, or the delete icon
to remove it. Removing or switching off a discount returns your products to their
normal price.

## For the admin

Go to **Marketplace >> Marketing >> Product Discounts** to see the discounts sellers
have created, with the **Seller**, status, priority and dates. You can filter the list
by status. To delete a seller's discount, click its delete icon, or tick several and use
**Select Action >> Delete**. Seller discounts aren't listed under
**Marketing >> Promotions >> Catalog Rules**. To create a discount sellers can join, see
[Joining Admin Discounts](join-product-discounts.md).

<ImagePopup src="/images/product-discounts/admin-product-discounts.png" alt="Seller product discounts in the admin panel" />

## Permissions

- Team members need **Product Discounts**, with **Create**, **Edit** and **Delete** as
  needed. **Join**, with **View**, **Enroll** and **Withdraw**, covers taking part in
  the store's discounts.
- Admins need **Marketplace >> Marketing >> Product Discounts** with **Delete** to
  delete sellers' discounts.
