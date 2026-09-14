# Payment Requests & Payouts

<div class="page-roles"><span class="role role--seller">Seller</span><span class="role role--admin">Admin</span></div>

Customers pay the store, and the store pays each seller what they earned. A seller
requests payment for each completed order. The admin pays the seller outside the store,
for example by bank transfer, and records the payment here.

## What a seller earns

For each order, a seller earns the invoiced value of their products, minus any discount
and the store's commission, plus the tax. Shipping isn't included. See
[Commission](commission-management.md).

## Request payment

Sellers can request payment for an order once their part of it is **Completed** and
there is something left to pay.

1. Go to **Sales >> Orders**.
2. Click **Request Payment** on the order's row.
3. Confirm.

<ImagePopup src="/images/payment-management/request-payment.png" alt="Request Payment on a completed order" />

You'll see **Your payment request is submitted successfully**. The order's
**Seller Payment Status** changes to **Requested**, and the store admin receives a
**Seller Payment Request Notification** email.

If any item in an order is refunded, even partly, the order's **Seller Payment Status**
becomes **Refunded**. It can't be requested, and it leaves the admin's
**Payment Requests** list. This also happens if the order was already paid.

## Pay a seller

1. Go to **Marketplace >> Sales >> Payment Requests**.
2. Click **Pay Now** on the order.
3. In **Payment to Seller**, enter a **Comment**, such as your bank transfer reference.
4. Click **Pay Now**.

<ImagePopup src="/images/payment-management/payout-management.png" alt="The Seller Payout Management page" />

<ImagePopup src="/images/payment-management/pay-seller.png" alt="The Payment to Seller dialog" />

You'll see **Seller is Paid successfully!**. Each payment covers the whole amount still
owed for that order. A transaction is recorded, the order's **Seller Payment Status**
changes to **Paid**, and the seller receives an email. See
[Transactions](transactions.md).

The page lists only orders sellers have requested payment for. At the top:

| Card | What it shows |
|---|---|
| **Payable Orders** | How many requested orders are waiting to be paid |
| **Unpaid Payout Amount** | How much is owed for those orders |
| **Total Commission Earned** | The commission on orders that have been paid |
| **Unpaid Sellers** | How many sellers are waiting to be paid, out of all sellers with requests or payments |

Each order shows its number, date and status, the customer, the amounts, the seller and
shop, and how much has been paid so far.

### Pay several sellers at once

1. Go to **Marketplace >> Sales >> Payment Requests**.
2. Tick the orders.
3. Click **Select Action >> Pay Now**.

<ImagePopup src="/images/payment-management/mass-pay.png" alt="Paying several orders at once" />

Each order is paid in full, with the comment **Paid Out of system**, and each seller
receives an email for each order.

## Payment statuses

The **Seller Payment Status** column on the seller's orders shows where each order
stands. Team members see it only with the **Payment Request** permission.

| Status | What it means |
|---|---|
| No status, with a **Request Payment** button | The order is completed and payment can be requested. |
| **Invoice Pending** | Nothing is ready to request yet, for example the order isn't invoiced. |
| **Processing** | Part of the order is invoiced, but it isn't completed yet. |
| **Requested** | The seller has requested payment. |
| **Paid** | The store has paid the seller for the order. |
| **Refunded** | Something in the order was refunded, so it can't be requested. |
| **Canceled** | The seller's part of the order was cancelled. |

## Good to know

- The store doesn't send the money. Pay the seller first, then record it here.
- There is no way to pay part of an order's amount from this page.
- Sellers follow their payments on [Transactions](transactions.md).

## Permissions

- Team members need **Orders** with **Payment Request** to request payment.
- Admins need **Marketplace >> Sales >> Payment Request** with **Pay**.
