# Order Management

<div class="page-roles"><span class="role role--seller">Seller</span><span class="role role--admin">Admin</span></div>

A customer can buy from several sellers in one checkout. Once the order is placed, it
is split so that each seller sees and handles only their own products. This page covers
how sellers work through their orders and what the admin sees.

## How a marketplace order works

1. The customer pays the store for the whole order.
2. The order is split, one part for each seller whose products are in it.
3. The store's commission is worked out for each product.
4. Each seller invoices and ships their part.
5. When their part is complete, the seller requests payment for it.

## Your orders

Go to **Sales >> Orders** in the Seller Panel.

<ImagePopup src="/images/order-management/orders-list.png" alt="The seller's Orders list" />

Each row shows:

- **Id / Date / Status / Customer** — the order number and date, the status of your part
  of the order, and the customer's name, email and location;
- **Items / Payment / Shipment** — how many products, the payment method and the
  shipping method;
- **Gross Amt. / Discount / Commission** — the value of your products, the discount and
  the store's commission;
- **Seller Earn / Seller Payment Status** — what you earn from the order, and where
  its payment stands. The payment status is shown only with the **Payment Request**
  permission. See [Payment statuses](../payments/payment-management.md#payment-statuses).

The buttons on a row show what the order needs next: **Schedule Pickup**,
**Print Label**, **Request Payment**, **Transaction** or **View Order**.

The customer's email and location are masked when the store doesn't let sellers see
customer details.

### Order statuses

| Status | What it means |
|---|---|
| **Pending** | The order has just been placed. |
| **Processing** | Some of your products are invoiced, shipped, cancelled or refunded. |
| **Completed** | All your products that weren't cancelled or refunded are invoiced and shipped. A part with any refund stays **Processing**. |
| **Canceled** | All your products in the order are cancelled. |
| **Closed** | All your products are refunded or cancelled. |

## View an order

1. Go to **Sales >> Orders**.
2. Click **View Order** on the order.

<ImagePopup src="/images/order-management/order-view.png" alt="The seller's view of an order" />

The **Information** tab lists your products with their price, what has been ordered,
invoiced, shipped, refunded and cancelled, and each product's subtotal. Click the info
icon next to a subtotal to see its discount, the store's commission and the tax.

Below the products are the order totals, including **Total Seller Amount** and
**Admin Commission**. When the store lets sellers see customer details, the billing and
shipping addresses and the shipping and payment methods are shown too.

The **Invoices**, **Shipments** and **Refunds** tabs appear once there is something to
show.

## Create an invoice

1. Open the order with **View Order**.
2. Click **Invoice**.
3. In **Create Invoice**, enter the quantity to invoice for each product. You can
   invoice part of the quantity, but at least one quantity must be more than 0.
4. Click **Create Invoice**.

<ImagePopup src="/images/order-management/create-invoice.png" alt="The Create Invoice dialog" />

You'll see **Invoice created successfully**. To download an invoice, open the
**Invoices** tab and click **Print**.

## Ship the order

Click **Schedule Pickup** on the order row or on the order page. See
[Shipments & Carriers](fulfilment-carriers.md).

## Cancel your part of an order

1. Open the order with **View Order**.
2. Click **Cancel**.
3. Confirm.

Your products that aren't invoiced yet are cancelled and their stock is returned.
Invoiced products can't be cancelled; the store admin refunds them instead. The
customer receives an **Order Cancellation Confirmation** email, with a copy to you and
the store admin. The customer's whole order is cancelled only once every seller's
products in it are cancelled.

Cancelled products count towards your cancellation rate in
[Account Health](../sellers/seller-account-health.md).

## Refunds

Sellers can't refund an order. The store admin issues refunds, and they then appear on
the order's **Refunds** tab.

After any refund, even a partial one, the order's **Seller Payment Status** shows
**Refunded**, and the order can no longer be requested for payment.

## Get paid

When your part of an order is **Completed**, click **Request Payment** on its row. See
[Payment Requests & Payouts](../payments/payment-management.md).

## Emails

- You receive a **New Order Confirmation** email for every new order with your products.
- The customer receives a cancellation email when you cancel.
- When the store sends shipment emails, the contact email of the inventory source you
  ship from receives a **New Shipment Confirmation** email.

You don't receive emails for invoices or refunds.

## For the admin

Go to **Marketplace >> Sales >> Orders** to see every seller's part of every order. An
order with products from two sellers has two rows. Each row shows the order, the
customer, the amounts and commission, and the **Shop**, **Seller** and **Earn**.

<ImagePopup src="/images/order-management/admin-orders.png" alt="Seller orders in the admin panel" />

Click the view icon to open the whole order in **Sales >> Orders**. There you can
invoice, ship and refund the order as usual. When you ship a seller's products, only
that seller's inventory sources are offered. Invoices, shipments and refunds you create
there also appear in the seller's view.

## Settings and permissions

- **Can Create Invoice**, **Can Create Shipment**, **Can Cancel Order** and
  **Can View Customers** in [Sellers settings](../configuration/sellers.md) decide
  which buttons and details sellers see.
- Team members need **Orders**, with **View**, **Cancel**, **Invoice**,
  **Print Invoice**, **Shipment** and **Payment Request** as needed.
- Admins need **Marketplace >> Sales >> Orders** to see the list, and
  **Sales >> Orders** with **View** to open an order.
