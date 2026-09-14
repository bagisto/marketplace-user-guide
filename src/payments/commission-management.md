# Commission

<div class="page-roles"><span class="role role--admin">Admin</span><span class="role role--seller">Seller</span></div>

Commission is the share of each seller sale the store keeps. The seller is paid the
rest. The rate is fixed on each order when it is placed.

## Which rate applies

A seller's sales use the first of these that applies:

1. **The seller's own rate**, when the admin has switched **Commission Enabled** on for
   the seller and set a **Commission Percentage**.
2. **The store's rate**, the **Admin Commission Percentage** for the channel the order
   is placed on.

A subscription plan sets the seller's own rate to the plan's **Commission Value** when
the plan becomes active. Always enter a **Commission Value** on a plan: a plan without
one leaves the seller paying no commission while it is active. Commission can't be set
per category or per product.

## Set the store's rate

1. Go to **Configure >> Marketplace >> General**.
2. Enter the **Admin Commission Percentage**, between 1 and 100.
3. Click **Save Configuration**.

The rate can be set for each channel, and each order uses the rate of its channel. See
[General settings](../configuration/general.md).

## Set a rate for one seller

1. Go to **Marketplace >> Sellers** and click the edit icon on the seller.
2. In **Settings**, switch **Commission Enabled** on.
3. Enter the **Commission Percentage**.
4. Click **Save Seller**.

See [Seller Management](../sellers/seller-management.md#settings-for-this-seller).

## How commission is worked out

For each product in the order:

- **Commission** = (the product's total − its discount) × the rate
- **Seller earning** = the product's total − its discount − commission + tax

| Example | Amount |
|---|---|
| Product total | $100.00 |
| Discount | −$10.00 |
| Commission at 20% of $90.00 | −$18.00 |
| Tax | +$5.00 |
| **Seller earning** | **$77.00** |

- The rate in force when the order is placed stays with that order, even if the rate
  changes later.
- Commission is worked out again on what is actually invoiced, and that is the amount
  the seller is paid.
- Shipping isn't part of the commission or the seller's earning.
- A refund doesn't change the commission. Any refund on an order, even a partial one,
  sets its **Seller Payment Status** to **Refunded**, and the seller can't request
  payment for it. See [Payment Requests & Payouts](payment-management.md).

## Where commission shows

- Sellers see their rate on **My Profile**, as **Admin Commission … of total Invoiced
  Amount**.
- The **Commission** and **Seller Earn** columns on the seller's orders, and
  **Admin Commission** on each order.
- **Total Commission (Admin)** on the seller's [Transactions](transactions.md) page, and
  **Total Commission Paid** in their [reports](../reporting/seller-reporting.md).
- The **Commission** column on the admin's **Marketplace >> Sales >> Orders**, and the
  commission figures on each transaction the admin opens.
- **Total Commission Earned** on the admin's
  [Payment Requests](payment-management.md) page.

## When a subscription plan expires

If a seller's plan expires without another active plan, the seller's commission becomes
100% until they buy a new plan. This also happens if the store has since switched
subscriptions off. If the admin cancels a plan instead, the seller keeps the plan's
rate. See [Choosing a Plan](../subscriptions/choosing-a-plan.md).
