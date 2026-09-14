# Reviews & Ratings

<div class="page-roles"><span class="role role--customer">Customer</span><span class="role role--seller">Seller</span><span class="role role--admin">Admin</span></div>

Customers can review a seller and the products they sell. Every new review waits for
the admin to approve it before it counts towards a rating.

## Seller reviews

- **Who can write one:** signed-in customers who have ordered from the seller. Each
  customer can review a seller once.
- **Where:** the **Reviews** tab of the seller's shop page. See
  [Seller Shop Page](../storefront/seller-shop-page.md#review-a-seller).
- **Where approved reviews count:** the seller's star rating on their shop page and on
  their products, the featured sellers, and the **Customer Feedback** part of the
  seller's [Account Health](../sellers/seller-account-health.md), which uses approved
  reviews from the last 90 days.

## Product reviews

Product reviews follow the store's own review settings in
**Configure >> Catalog >> Products**: **Allow Customer Review** and
**Allow Guest Review**. Customers don't need to have bought the product. A review of a
product a seller created is linked to that seller.

## Approve reviews

### Seller reviews

1. Go to **Marketplace >> Sellers >> Seller Reviews**.
2. Tick the reviews.
3. Click **Select Action**, point to **Update Status** and click **Approved**,
   **Disapproved** or **Pending**.

<ImagePopup src="/images/rating-management/admin-seller-reviews.png" alt="Seller reviews waiting for approval in the admin panel" />

Each row shows the customer, the status, the seller and their business name, the rating,
the date, and the review's title and comment. Click the delete icon to remove a review,
or tick several and use **Select Action >> Delete**.

### Product reviews

1. Go to **Marketplace >> Catalog >> Product Reviews**.
2. Click the view icon on a review. **Review Details** opens with the rating, title,
   comment and any photos.
3. Choose the **Status**: **Approved**, **Disapproved** or **Pending**.
4. Save.

<ImagePopup src="/images/rating-management/admin-product-reviews.png" alt="Product reviews of seller products in the admin panel" />

To change several reviews at once, tick them and use
**Select Action >> Update Status**. Click the delete icon to remove a review.

This list shows reviews of products sellers created. Reviews of your own products are
managed in **Customers >> Reviews**.

## What sellers see

- **Performance >> Seller Reviews** lists the reviews of your shop, with each review's
  status.
- **Performance >> Product Reviews** lists the reviews of the products you created.

<ImagePopup src="/images/rating-management/seller-reviews.png" alt="The seller's Seller Reviews page" />

Both lists are read-only. Sellers can't approve, reply to or delete reviews. Customer
email addresses are masked when the store doesn't let sellers see customer details.

No emails are sent when a review is written or approved.

## Permissions

- Admins need **Marketplace >> Sellers >> Seller Reviews** or
  **Marketplace >> Catalog >> Product Reviews**, with **Edit** and **Delete**.
- Team members need **Performance**, with **Seller Reviews** and **Product Reviews**.
