# Transactions

<div class="page-roles"><span class="role role--seller">Seller</span><span class="role role--admin">Admin</span></div>

A transaction is a record of a payment the store made to a seller for an order.
Sellers use their transactions page to follow what they have earned and been paid.
The admin sees every seller's transactions.

Payments are made outside the store, for example by bank transfer, and recorded here
when the admin pays a seller. See
[Payment Requests & Payouts](payment-management.md).

## Your transactions

Go to **Sales >> Transaction** in the Seller Panel.

<ImagePopup src="/images/transactions/seller-transactions.png" alt="The seller's Transactions page with summary cards" />

Choose the start and end dates at the top. The cards count orders placed between those
dates, and **Total Payout** counts payments made between them. The page opens on the
last 30 days.

| Card | What it shows |
|---|---|
| **Total Sale (Seller)** | Your invoiced sales, less refunds and the store's commission, for orders placed in the period. Closed orders aren't counted. |
| **Total Commission (Admin)** | The commission the store kept on those sales |
| **Total Sale (Invoiced)** | Your invoiced sales including tax, less discounts and refunds, before commission |
| **Total Payout** | What the store paid you in the period, and what share of **Total Sale (Seller)** that is. Payouts on orders refunded later aren't counted. |
| **Remaining Payout** | What you have requested for completed orders and haven't been paid yet |

Below the cards, the list shows each transaction's **Id**, **Transaction Id**,
**Comment** and **Total**. Use **Filter** to find a transaction.

### See a transaction

Click the view icon on a transaction.

<ImagePopup src="/images/transactions/transaction-view.png" alt="The details of a transaction" />

The page shows when the payment was made and, for each product, the **Name**,
**Price**, **Qty** (the quantity shipped), **Total**, **Commission** and
**Seller Total**. The order's **Subtotal**, **Shipping & Handling**, **Tax**,
**Commission** and **Seller Total** follow. The payment method is shown as
**Manual Payment**, because the money is sent outside the store.

Click **Print** to download the transaction as a PDF.

## For the admin

Go to **Marketplace >> Sales >> Transactions** to see every payment made to sellers,
with the **Id**, **Seller Name**, **Seller Id**, **Transaction Id**, **Comment** and
**Base Total**. Click the view icon to see the details of a transaction.

<ImagePopup src="/images/transactions/admin-transactions.png" alt="All seller transactions in the admin panel" />

## Permissions

- Team members need **Transactions**, with **View** to open a transaction and
  **Print** to download it.
- Admins need **Marketplace >> Sales >> Transactions** with **View**.
