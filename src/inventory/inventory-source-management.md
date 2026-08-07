# Inventory Source Management

An **inventory source** is a place a seller holds stock — a warehouse, a store, or a default location. Each seller manages their own sources, complete with address and contact details, and stock for every product is tracked per source.

::: info What you'll learn
- What an inventory source is
- How to create one, field by field
- How sources relate to product stock
:::

## Your sources

From the Seller Panel, open **Inventories → Inventory Sources**. Every seller starts with a **Default** source and can add more. The list shows each source's **ID**, **code**, **name**, **priority**, and **status** (Active / Inactive), with **Edit** and **Delete** actions.

<ImagePopup src="/images/inventory-source-management/inventory-sources.png" alt="Seller inventory sources list" />

## Creating a source

Select **Create Inventory Source** and fill in the four sections:

<ImagePopup src="/images/inventory-source-management/source-create.png" alt="Create inventory source form" />

- **General** — a unique **Code**, a **Name**, and an optional **Description**.
- **Address** — **Country**, **State**, **City**, **Street**, and **Postcode**.
- **Settings** — **Latitude** / **Longitude** (optional), a **Priority** (which source is drawn from first), and a **Status** toggle.
- **Contact Info** — **Contact Name**, **Email**, **Number**, and an optional **Fax**.

Save it, and the source becomes available when you set stock on products.

::: warning You can't delete your only active source
A source can't be deleted if it's the seller's **only active** source — you always need at least one place to hold stock.
:::

## Sources and stock

Stock is held per source: a product's quantity is set against a source, and its total availability is the sum across sources. Manage those quantities from [Manage Inventory](/inventory/manage-inventory), or on a product's **Inventories** tab in [Product Management](/catalog/product-management#the-product-form).

::: tip
Order your sources by **priority** the way you actually want them fulfilled — the marketplace draws stock from higher-priority sources first.
:::
