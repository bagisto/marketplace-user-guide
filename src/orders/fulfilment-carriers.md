# Shipments & Carriers

<div class="page-roles"><span class="role role--seller">Seller</span><span class="role role--admin">Admin</span></div>

Sellers ship their products by scheduling a pickup for the order. The carrier decides
how the parcel travels. **Self Ship** is always available: the seller arranges their
own courier and enters the tracking number. A courier integration can also buy labels
and book collections for the seller.

Carriers are only used after an order is placed. Customers still choose from the
store's shipping methods at checkout.

## Schedule a pickup

1. Go to **Sales >> Orders**.
2. Click **Schedule Pickup** on the order's row, or open the order and click
   **Schedule Pickup**.
3. Choose the **Product Ordered Source** your products ship from.
4. Under **Items To Ship**, enter how many of each product you are shipping from that
   source. **Avail.** shows the stock in the source.
5. Choose the **Carrier**. For Self Ship, this is **Manual (Own Arrangement)**, unless
   the store has renamed it.
6. For Self Ship, you can enter the **Carrier Title**, such as the courier's name, and
   the **Tracking ID**.
7. Click **Schedule Pickup**.

<ImagePopup src="/images/order-management/shipment-create.png" alt="The Schedule Pickup page with Self Ship" />

You'll see **Shipment created successfully**. The order's **Shipments** tab shows the
carrier, the tracking number and the inventory source.

| Message | What it means |
|---|---|
| **This order has nothing left to ship** | Everything in your part of the order has shipped, or what's left is cancelled, refunded or has nothing to ship, such as a booking. |
| **Requested quantity is not available** | You entered more than is left to ship or than the source has in stock, or every quantity is 0. |
| **Shipment blocked for RMA quantity: …** | Shown beside a product when that much of its quantity is in a return request, whatever the request's status. That quantity can't be shipped. |

## With a courier integration

When the store has installed and set up a courier integration, choosing it adds more
to the page:

- **Parcel** — the **Weight**, in the store's weight unit, and the **Length**,
  **Width** and **Height** in centimetres. Each must be more than 0. A shipping label is
  bought when you schedule the pickup, and the tracking number is added for you.
- **Collection** — the **Pickup Date**, which can't be in the past, and either a
  **Collection Round** or the **Ready At** and **Doors Close At** times, with any
  **Pickup Instructions** for the driver, up to 500 characters.

After scheduling:

- download the label with **Download** on the shipment, or **Print Label** on the
  order's row;
- the shipment shows the pickup's confirmation and time window, and the **Label Cost**;
- shipments from the same source for the same collection time share one pickup.

The label cost is shown for your information and isn't taken from your payout.

If the courier rejects the collection window, nothing is saved; choose another time and
try again. If the courier can't be booked for another reason, the shipment is still
saved and marked **Not Booked**.

## For the admin

- Set up the carriers sellers can use in
  [Fulfilment Carriers settings](../configuration/fulfilment-carriers.md).
- When you ship a seller's products from **Sales >> Orders**, the store's own shipment
  form is used, and only the seller's inventory sources are offered.

## Settings and permissions

- Sellers see **Schedule Pickup** when **Can Create Shipment** is on in
  [Sellers settings](../configuration/sellers.md).
- Team members need **Orders** with **Shipment**.
