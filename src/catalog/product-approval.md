# Product Approval

<div class="page-roles"><span class="role role--seller">Seller</span><span class="role role--admin">Admin</span></div>

A seller's product starts as a draft, is submitted when it is ready and, if the
store requires it, is approved by the admin before customers can buy it. This page
follows a product through each step, from both sides.

## Product statuses

Sellers see the status as a badge on each product in **Catalog >> Products**.

| Status | What it means |
|---|---|
| **Draft** | The seller is still working on the product. Only the seller can see it. |
| **Waiting For Approval** | The seller submitted the product and the admin hasn't decided yet. |
| **Approved** | The product can be sold. |
| **Rejected** | The admin rejected the product. The reason is shown under the badge. |

<ImagePopup src="/images/product-approval/seller-products-statuses.png" alt="Seller products with Draft, Waiting For Approval, Approved and Rejected badges" />

To find products by status, click **Filter** and use **Is Approved**
(**Approved**, **Waiting For Approval** or **Rejected**) or **Draft Status**
(**Draft** or **Submitted**).

## Save a draft

While a product is a draft, its edit page shows **Save as Draft** and **Submit**.
Click **Save as Draft** to keep your work and come back to it later.

A draft is still checked when you save it, so fill in the fields marked as required,
such as the name, price, weight, short description and description, before you click
**Save as Draft**.

Drafts aren't shown to the admin, and they can't be sold.

## Submit a product

1. Go to **Catalog >> Products**.
2. Click the edit arrow on the draft.
3. Check that the details are complete.
4. Click **Submit**.

If the store approves products, the product now shows **Waiting For Approval**.
If it doesn't, the product is approved straight away.

Once submitted, the edit page shows **Save Product** instead, and the product can't
go back to being a draft.

## Approve products

1. Go to **Marketplace >> Catalog >> Products**.
2. Tick the products you want to approve.
3. Click **Select Action**, point to **Update Status** and click **Approved**.
4. Click **Agree** to confirm.

<ImagePopup src="/images/product-approval/admin-products.png" alt="Seller products waiting for approval in the admin panel" />

Each seller receives an email saying their product has been approved.

The list shows submitted products from every seller, including products they sell
from your catalog. Each row shows the product, its price and stock, the seller,
whether the seller owns the product (**Is Owner**), its status and how many times
customers have reported it.

A product is skipped if its seller isn't approved. When the store uses subscription
plans, it is also skipped if the seller has no plan, or if approving it would take the
seller past their plan's product limit.

## Reject a product

1. Go to **Marketplace >> Catalog >> Products**.
2. Click the reject icon on the product's row.
3. In **Rejection Reason**, explain what the seller needs to fix.
4. Click **Reject Product**.

<ImagePopup src="/images/product-approval/reject-product.png" alt="The Reject Product dialog" />

The seller receives an email with your reason, and the reason appears under the
product's **Rejected** badge.

## Fix a rejected product

1. Go to **Catalog >> Products**.
2. Read the reason under the **Rejected** badge. If it is long, click **Read more**
   to see all of it.
3. Click the edit arrow and make the changes.
4. Click **Save Product**.

Saving sends the product back for approval. Its status changes to
**Waiting For Approval**.

## Editing an approved product

An approved product stays approved when the seller edits and saves it in the product
form. It doesn't go back to the admin for approval.

## Delete a product

- A seller deletes a product from its row in **Catalog >> Products**.
- The admin deletes it from its row in **Marketplace >> Catalog >> Products**.

Deleting a product the seller owns removes the product itself. Deleting a product the
seller sells from your catalog removes only the seller's offer.

## Settings and permissions

- **Approval Required** in [Products settings](../configuration/products.md) decides
  whether products need approval.
- Admins need **Marketplace >> Catalog >> Products >> Edit** to approve and reject,
  and **Delete** to delete.
- The admin edits a seller's product details in **Catalog >> Products**, the store's
  main product list. The marketplace list has no edit action.
