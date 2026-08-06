# Order Management

When a customer buys a seller's product, the order appears in the seller's **Sales → Orders**. From there the seller works their part of the order — invoicing, shipping, and requesting payment — while the admin keeps oversight of the whole marketplace order.

::: info What you'll learn
- What the seller's orders list tracks
- How a seller processes an order (invoice, ship, cancel)
- How a seller's earning and payment status are shown
:::

## The orders list

Open **Sales → Orders** in the Seller Panel. Each row is an order containing this seller's items, grouped into columns for the order **ID / date / status / customer**, its **items / payment / shipment**, the **gross amount / discount / commission**, and the **seller earning / seller payment status**.

<ImagePopup src="/images/order-management/orders-list.png" alt="Seller orders list" />

The commission and seller-earning columns make it clear, per order, how much the marketplace keeps and how much the seller is owed. See [Commission Management](/payments/commission-management) for how commission is calculated.

## Processing an order

Open an order with **View** to see its items, addresses, and totals, then act on the seller's portion:

- **Create Invoice** — invoice the seller's items. Invoices can be printed.
- **Create Shipment** — ship the items through one of the configured [Fulfilment Carriers](/orders/fulfilment-carriers), including buying a label or scheduling a pickup where the carrier supports it.
- **Cancel** — cancel the order (or the seller's items in it) when it can't be fulfilled.

::: info Sellers only see their own items
In a multi-seller order, each seller sees and processes only the items they sold. The admin sees the complete order across all sellers.
:::

## Getting paid

Once a seller has fulfilled an order, the **seller payment status** tracks whether they've been paid for it. Sellers request their earnings from the admin — see [Payment Management](/payments/payment-management) — and the admin can also settle balances in bulk through [Mass Payout Management](/payments/mass-payout-management).

::: tip
Invoice and ship promptly — a healthy fulfilment record feeds into [Seller Account Health](/sellers/seller-account-health), which the admin uses to keep the marketplace reliable.
:::
