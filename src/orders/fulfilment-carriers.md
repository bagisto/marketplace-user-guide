# Fulfilment Carriers

Fulfilment Carriers let the marketplace run shipping **after** an order is placed — sellers buy shipping labels, schedule courier pickups, and report tracking, all through couriers the **admin** connects once for the whole marketplace. Sellers never see the courier credentials.

::: info What you'll learn
- How fulfilment carriers differ from checkout shipping methods
- How the admin sets up carriers, and the built-in Self Ship option
- What a seller sees at shipment time, by carrier type
:::

::: tip Not a checkout shipping method
A **checkout shipping method** quotes a delivery rate to the customer *before* they pay. A **fulfilment carrier** is used *after* the order, by the seller, to actually ship it. Connecting a carrier never adds an option to customer checkout.
:::

## Setting up carriers (admin)

Go to **Configure → Marketplace → Fulfilment Carriers**.

<ImagePopup src="/images/fulfilment-carriers/admin-config.png" alt="Fulfilment Carriers configuration" />

Out of the box, one carrier is always present:

- **Self Ship (Manual)** — the built-in fallback: the seller arranges their own courier and types the carrier name and tracking number by hand. It's always available and cannot be switched off. You can set the **Title Shown To Sellers** that overrides its name in the seller's shipment form.

Real couriers (Shiprocket, Delhivery, UPS, FedEx, and so on) arrive as **separate integration packages**. Installing one adds its own section here, where the admin enters that courier's account credentials once — sellers then ship through it without ever seeing those details. A carrier is only offered to sellers once it's installed, switched on, and fully configured.

## What a carrier can do

Carriers declare which capabilities they support, and the seller's shipment form adapts to match:

- **Labels** — generate and buy a shipping label; tracking is filled in automatically and the label is downloadable.
- **Pickups** — book a courier collection, either from published **time slots** or within a **ready/close window**.
- **Tracking** — status flows back from the carrier automatically.

## What the seller sees at shipment time

When a seller ships an order (from **Sales → Orders → the order → Schedule Pickup**), they pick one of the configured carriers:

- **Self Ship (Manual)** — the seller enters the courier name and tracking number themselves; nothing is booked.
- **Label-capable carrier** — a **Parcel** section (weight and dimensions) appears; the label is bought on submit and its cost and a **Download** button show on the shipment.
- **Pickup-capable carrier** — a **Collection** section appears to schedule the courier visit (slot or window) with a pickup date and instructions.

If a booking fails, the shipment is still saved and marked **Not Booked** so the seller can retry — no shipment is lost.

::: info For developers
A courier integration is a standalone package built on the marketplace's carrier interfaces — see the developer guide for [Fulfilment Carrier Development](https://devdocs.bagisto.com/). No marketplace code changes are needed to add a carrier.
:::
