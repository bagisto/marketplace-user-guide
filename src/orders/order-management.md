# Order Management

When a customer buys a seller's product, the order appears in the seller's **Sales → Orders**. From there the seller works their part of the order end to end — invoicing, shipping, and requesting payment — while the admin keeps oversight of the whole marketplace order.

::: info What you'll learn
- What the orders list tracks
- How to process an order: invoice, ship, cancel
- How a seller's earning and payment status flow
:::

## The orders list

Open **Sales → Orders**. Each row is an order containing this seller's items, with columns for the order **ID / date / status / customer**, **items / payment / shipment**, **gross amount / discount / commission**, and **seller earning / seller payment status**.

<ImagePopup src="/images/order-management/orders-list.png" alt="Seller orders list" />

The commission and seller-earning columns make it clear, per order, how much the marketplace keeps and how much you're owed (see [Commission Management](/payments/commission-management)). Row actions surface exactly what an order needs next — **Schedule Pickup**, **Print Label**, **Request Payment**, **Transaction**, or **View Order** — each appearing only when it applies.

::: info Sellers see only their own items
In a multi-seller order, each seller sees and processes only the items they sold, with money columns drawn from their own slice of the order. The admin sees the complete order across all sellers under **Marketplace → Sales → Orders**, where each row also names the **seller** and **shop** the items belong to, alongside the order's **commission** and the seller's **earn**.
:::

## The order detail page

Open an order with **View Order** to see everything about it — the items with their ordered / invoiced / shipped / refunded quantities, the totals (with the seller's earning and commission broken out), and the customer's addresses and chosen shipping and payment methods.

<ImagePopup src="/images/order-management/order-view.png" alt="Seller order detail" />

The header carries the fulfilment actions, each shown only when it's available and permitted:

- **Invoice** — raise an invoice for your items (you can invoice partial quantities).
- **Schedule Pickup / Shipment** — ship the items through a [fulfilment carrier](/orders/fulfilment-carriers).
- **Cancel** — cancel the order (or your items in it) when it can't be fulfilled.

As you invoice and ship, the **Invoices**, **Shipments**, and **Refunds** tabs fill in.

## Shipping an order

Selecting **Schedule Pickup** opens the shipment form. You enter the **quantity to ship** per inventory source, pick a **Carrier**, and choose the **Product Ordered Source**.

<ImagePopup src="/images/order-management/shipment-create.png" alt="Create shipment form" />

What you see next depends on the carrier:

- **Manual (Own Arrangement)** — you arrange your own courier and simply type the **Carrier Title** and **Tracking ID**.
- **Label-capable carriers** — a **Parcel** section (weight and dimensions) appears; a shipping **label** is bought on submit, tracking is filled in automatically, and the shipment card shows a **Download** label button and the label cost.
- **Pickup-capable carriers** — a **Collection** section appears to book a courier pickup (either from published time slots or a ready/close window) with a pickup date and instructions.

If a carrier can't be booked, the shipment is still saved and marked **Not Booked** so you can retry — nothing is lost. See [Fulfilment Carriers](/orders/fulfilment-carriers) for how carriers are set up.

## Getting paid

Once you've fulfilled and invoiced an order, its **seller payment status** tracks whether you've been paid. Use **Request Payment** on a completed order to ask the admin for your earnings — see [Payment Management](/payments/payment-management). Settled payouts show a **Transaction** link.

::: tip
Invoice and ship promptly — a healthy fulfilment record feeds into [Seller Account Health](/sellers/seller-account-health), which the admin uses to keep the marketplace reliable.
:::
