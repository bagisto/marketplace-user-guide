# Seller Attributes

Seller Attributes are the building blocks of a seller's profile and configuration. Just as product attributes define a product form, seller attributes define the fields the admin (and seller) fill in for each seller — from business details and social links to commission and Magic AI settings. The admin manages them under the Marketplace section of the admin panel.

::: info What you'll learn
- What seller attributes are
- How the admin creates and maps them
- Examples of the attributes that ship by default
:::

## Managing attributes

In the admin panel, go to **Marketplace → Sellers → Seller Attributes**. The list shows every attribute with its **code**, **name**, **type**, and whether it's **required**, **unique**, or **locale-based**.

<ImagePopup src="/images/seller-attributes/seller-attributes.png" alt="Admin seller attributes list" />

- **Create Seller Attribute** — add a new field (text, boolean, price, select, multiselect, and so on), and set whether it's required or unique.
- **Mapping** — arrange which attributes appear on the seller form and how the form is laid out.

## Attributes that ship by default

The marketplace comes with a full set of seller attributes, including:

- **Commission** — `commission_enabled` and `commission_percentage` set a seller's [commission](/payments/commission-management).
- **Magic AI** — `magic_ai_enabled` and `magic_ai_seller_limit` govern a seller's [Magic AI](/catalog/magic-ai) access and quota.
- **Selling controls** — `allowed_product_types` and `min_order_amount`.
- **Profile & marketing** — business details plus social links such as `facebook`, `instagram`, `youtube`, and `google_analytics_id`.

::: tip
Add a seller attribute when you need a new piece of information or a new per-seller control — it becomes available on the seller form for every seller, without any code changes.
:::
