# Fulfilment Carriers

Fulfilment Carriers let the marketplace run shipping **after** an order is placed — sellers buy shipping labels, schedule courier pickups, and report tracking, all through couriers the **admin** connects once for the whole marketplace. Sellers never see the courier credentials.

::: info What you'll learn
- How fulfilment carriers differ from checkout shipping methods
- How the admin sets up carriers (and the built-in Self Ship option)
- How a seller ships an order through a carrier
:::

::: tip Not a checkout shipping method
A **checkout shipping method** quotes a delivery rate to the customer *before* they pay. A **fulfilment carrier** is used *after* the order, by the seller, to actually ship it. Connecting a carrier never adds an option to customer checkout.
:::

## Setting up carriers (admin)

Go to **Configure → Marketplace → Fulfilment Carriers**.

<ImagePopup src="/images/fulfilment-carriers/admin-config.png" alt="Fulfilment Carriers configuration" />

Out of the box, one carrier is always present:

- **Self Ship (Manual)** — the built-in fallback: the seller arranges their own courier and types the carrier name and tracking number by hand. It's always available and cannot be switched off. You can set the **Title Shown To Sellers**.

Real couriers (Shiprocket, Delhivery, UPS, FedEx, and so on) arrive as **separate integration packages**. Installing one adds its own section here, where the admin enters that courier's account credentials once — sellers then ship through it without ever seeing those details.

## Shipping an order (seller)

When a seller ships an order (from **Sales → Orders → the order → Create Shipment**), they pick one of the configured carriers. Depending on the carrier's capabilities, the seller can:

- **Buy a shipping label** — generated and available to download.
- **Schedule a pickup** — either from the courier's published time slots, or by declaring a ready/close window the courier confirms.
- **Track the shipment** — status flows back automatically from the carrier.

With **Self Ship**, the seller simply enters the courier name and tracking number themselves.

::: info For developers
A courier integration is a standalone package built on the marketplace's carrier interfaces — see the developer guide for [Fulfilment Carrier Development](https://devdocs.bagisto.com/). No marketplace code changes to add a carrier.
:::
