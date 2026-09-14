# Seller & Product Flagging

<div class="page-roles"><span class="role role--customer">Customer</span><span class="role role--admin">Admin</span></div>

Customers can report a problem with a product or a seller, such as a damaged,
wrong or overpriced product. The admin chooses the reasons customers pick from and
reviews every report.

## Report a product

Customers who have ordered a product from a seller can report it once.

1. Sign in to your customer account.
2. On the product's page, or on the seller's offer in the offers page, click
   **Report Product**.
3. Choose a **Reason**. To describe something else, choose **Other Reason** and type it.
4. Click **Submit**.

<ImagePopup src="/images/seller-product-flagging/report-product.png" alt="The Report Product form" />

You'll see **Product Reported successfully**. The seller and the store admin each receive
a **Product Report Notification** email.

## Report a seller

Customers who have ordered from a seller can report the seller once.

1. Sign in to your customer account.
2. On the seller's shop page, click **Report Issue**.
3. Choose a **Reason**, or **Other Reason**.
4. Click **Submit**.

<ImagePopup src="/images/seller-product-flagging/report-seller.png" alt="The Report Issue form on a seller's shop page" />

You'll see **Seller reported successfully**. The seller and the store admin each receive a
**Seller Report Notification** email.

| Message | What it means |
|---|---|
| **You need to login to report …** | Sign in first. |
| **You have already reported …** | You can report each product or seller once. |
| **You cannot report … without placing an order** | Only customers who ordered can report. |

## Flag reasons

1. Go to **Marketplace >> Configure >> Flag Reasons**.
2. Click **Create Reason**.
3. In **Label**, enter the **Admin** name, and the reason customers see in each language.
4. In **General**, choose the **Type**: **Product** or **Seller**.
5. Switch **Status** on so customers can choose it.
6. Click **Save Reason**.

<ImagePopup src="/images/seller-product-flagging/flag-reasons.png" alt="The Flag Reasons list" />

<ImagePopup src="/images/seller-product-flagging/reason-create.png" alt="The Create Reason form" />

The list shows each reason's **Id**, **Name**, **Type** and **Status**, with icons to edit
or delete it. To switch several reasons on or off, tick them and use
**Select Action >> Update Status**, then **Active** or **Disable**. To delete several,
use **Select Action >> Delete**.

The marketplace starts with these reasons:

- **Product:** Duplicate product, Damaged product, Poor product quality, Over price
  product, Missing product parts, Receive wrong product.
- **Seller:** Duplicate product sold by seller, Damaged product sold by seller, Poor
  product quality sold by seller, Over price product sold by seller, Wrong product sold
  by seller.

## Review reports

- **Seller reports** — go to **Marketplace >> Sellers** and click **Flags** on the seller's
  row. The **Seller Flags** list shows the customer, their email, the reason and the date.
- **Product reports** — go to **Marketplace >> Catalog >> Products** and click
  **Total Flags** under the product. The **Product Flags** list shows the same details.

<ImagePopup src="/images/seller-product-flagging/seller-flags.png" alt="The Seller Flags list for a seller" />

Reports can't be deleted. The flags count on the sellers list covers the last 90 days
and is updated once a day, or when you use **Refresh Account Health**. The
**Seller Flags** list shows every report.

## What reports change

- **Seller reports** count towards the seller's
  [Account Health](../sellers/seller-account-health.md) for 90 days.
- When **Show Red Flag** is on and a seller has more reports than the store's limit, a
  red flag appears next to their name on their shop page. The red flag counts every
  report the seller has received.
- **Product reports** are counted and emailed, but don't change anything else.

Nothing is hidden or suspended automatically. Use
[Seller Management](../sellers/seller-management.md) to act on a seller.

## Settings

Turning reporting on or off, **Show Red Flag** and the red flag limit are in
[Moderation & Health settings](../configuration/moderation-and-health.md).
