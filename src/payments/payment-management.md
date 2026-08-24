# Payment Management

Payment Management is how sellers get paid for what they've sold. A seller requests payment for their fulfilled orders, and the admin settles it from a central **Seller Payout Management** view that tracks what's owed, what's been paid, and what's still outstanding.

::: info What you'll learn
- How a seller requests payment for an order
- How the admin reviews and pays sellers
- What the payout view and transactions ledger track
:::

## Requesting payment (seller)

After a seller has **invoiced** and **completed** an order, they can **Request Payment** for it from **Sales → Orders**. The request covers the seller's earning on the order — the invoiced total minus [commission](/payments/commission-management) — and the button only appears when there's actually a remaining amount to pay and the order hasn't already been requested, paid, or refunded. Submitting sets the order's **seller payment status** to *requested* and notifies the admin.

## Paying sellers (admin)

The admin manages every request under **Marketplace → Sales → Payment Requests** — the **Seller Payout Management** screen. Four summary cards give the whole picture at a glance:

<ImagePopup src="/images/payment-management/payout-management.png" alt="Admin Seller Payout Management" />

- **Payable Orders** — how many orders are awaiting payout.
- **Unpaid Payout Amount** — the total still owed to sellers.
- **Total Commission Earned** — commission on orders already paid out.
- **Unpaid Sellers** — how many sellers are still owed, out of the total.

The grid lists each payable order with its gross amount, **remaining total**, **seller total invoiced**, the **seller / shop**, and **total paid**. Select **Pay Now** on a row, add a **comment** (for example, a bank-transfer reference), and confirm — the payment is recorded, the remaining balance updates, and the order flips to **paid** once fully settled.

## Transactions

Every settlement is logged under **Marketplace → Sales → Transactions**, giving a full payment history — the seller, transaction ID, comment, and amount — with a detailed view per transaction that breaks the payment down by item (total, commission, seller total).

<ImagePopup src="/images/payment-management/transactions.png" alt="Marketplace transactions" />

A seller sees their own side under **Sales → Transaction**, and can print a transaction as a PDF.

::: info Payout statuses
An order's payout moves through **pending → requested → paid**; a refunded order shows **refunded**.
:::

::: tip Settle many at once
To pay several sellers or orders together, use the bulk action on this screen — see [Mass Payout Management](/payments/mass-payout-management).
:::
