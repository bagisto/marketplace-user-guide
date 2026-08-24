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

## What the admin sees

The admin can review every seller's sources across the marketplace under **Marketplace → Configure → Inventory Sources**. The list shows each source's **Id**, **Code**, **Name**, the **Seller Name** and **Business Name** it belongs to, and its **Status**, and each row opens a read-only view with the source's **General Information**, **Source Address**, **Contact Information**, and **Seller Information**.

<ImagePopup src="/images/inventory-source-management/admin-inventory-sources.png" alt="Admin inventory sources list showing each source against its seller and business name" />

This view is for oversight only — sources are created, edited, and deleted by the seller who owns them.

::: tip
Order your sources by **priority** the way you actually want them fulfilled — the marketplace draws stock from higher-priority sources first.
:::
