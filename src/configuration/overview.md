# Marketplace Configuration

<div class="page-roles"><span class="role role--admin">Admin</span></div>

The marketplace adds its own settings to the admin's **Configure** page. They
decide how sellers join, what they can do with products and orders, how the
storefront presents the marketplace, and how sellers use Generative AI.

## Open the marketplace settings

1. In the admin panel, go to **Configure**.
2. Under **Marketplace**, click the tile for the settings you want.

<ImagePopup src="/images/configuration/configuration-marketplace-tiles.png" alt="The Marketplace group of tiles on the Configure page" />

| Tile | What it controls |
|---|---|
| [General](general.md) | Turning the marketplace on, the default commission, the Seller Panel logo and subscription plans |
| [Sellers](sellers.md) | Seller approval and visibility, what sellers can do with orders, and upload size |
| [Products](products.md) | Product approval, whether sellers create or resell products, the product form and the low-stock level |
| [Moderation & Health](moderation-and-health.md) | Reporting of products and sellers, the red flag, and account-health thresholds |
| [Marketing](marketing.md) | Whether sellers can join admin product discounts, and how join requests are approved |
| [Fulfilment Carriers](fulfilment-carriers.md) | The couriers sellers use to ship orders |
| [Featured Sellers](featured-sellers.md) | The featured sellers shown on the marketplace landing page |
| [Landing Page](landing-page.md) | The banner, highlights, features and seller journey on the landing page |

The settings for Generative AI sit in the **Magic AI** group of the same page,
on the **Marketplace Features** tile. See
[Generative AI Configuration](generative-ai.md).

<ImagePopup src="/images/configuration/configuration-magic-ai-tiles.png" alt="The Magic AI group with the Marketplace Features tile" />

## Settings per channel and per language

A setting can apply to the whole store, to one channel, or to one language:

- A field labelled with a channel name, such as **Default**, is saved for each
  channel.
- A field labelled with a language, such as **English**, is saved for each
  language.
- A field without a label applies everywhere.

Choose the channel or language at the top of the screen before you change these
fields. Each selector only appears when your store has more than one channel or
language.

## Save your changes

Click **Save Configuration** at the top of the screen. Saving marketplace
settings also refreshes the storefront pages the marketplace keeps in its cache,
so customers see the change straight away.

### Turning the marketplace off

**Status** on the [General](general.md) screen switches the whole marketplace on
or off. While it is off:

- the **Marketplace** menu disappears from the admin panel;
- the Seller Panel and the marketplace storefront pages are unavailable;
- seller products are hidden from the storefront and can't be bought.

Your data is kept, and everything returns when you switch it back on.

## Settings in the Marketplace menu

Two lists that work like settings sit in the admin sidebar under
**Marketplace >> Configure**, not on the Configure page:

- **Flag Reasons** — the reasons customers choose when they report a product or
  seller. See [Seller & Product Flagging](../moderation/seller-product-flagging.md).
- **Inventory Sources** — a read-only list of every seller's inventory sources.
  See [Inventory Sources](../inventory/inventory-source-management.md).

## Who can change these settings

Anyone whose admin role includes **Configure** can open and save the marketplace
tiles. The marketplace doesn't add a separate permission for them.
