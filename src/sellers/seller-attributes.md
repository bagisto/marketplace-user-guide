# Seller Attributes

Seller Attributes are the building blocks of a seller's profile and configuration. Just as product attributes define a product form, seller attributes define the fields that make up a seller — from business details and social links to commission and Magic AI settings. The admin manages them, and controls how they're laid out on the seller form.

::: info What you'll learn
- What seller attributes are and where they're used
- How to create an attribute, field by field
- How to arrange attributes into the seller form
:::

## The attributes list

In the admin panel, go to **Marketplace → Sellers → Seller Attributes**. The list shows every attribute with its **code**, **name**, **type**, and whether it's **required**, **unique**, **locale-based**, or **channel-based**.

<ImagePopup src="/images/seller-attributes/seller-attributes.png" alt="Admin seller attributes list" />

The two header buttons are **Create Seller Attribute** and **Mapping**.

## Creating an attribute

Select **Create Seller Attribute** and define the field:

<ImagePopup src="/images/seller-attributes/attribute-create.png" alt="Create seller attribute form" />

- **Admin name** and per-locale **name** — the internal and displayed labels.
- **Code** — the unique identifier used in the system.
- **Type** — the input type: text, textarea, boolean, select, multiselect, date, datetime, image, file, checkbox.
- **Validation** and **regex**, an optional **default value**, and a rich-text **editor** toggle.
- Flags: **required**, **unique**, **value per locale**, **value per channel**, and visibility toggles — **on sign up**, **on profile**, and **on public** profile.
- **Options** — for select / multiselect / checkbox types, the list of choices (each with a label and position).

Only **user-defined** attributes can be deleted; the system attributes the marketplace ships with are protected.

## Mapping attributes to the form

The **Mapping** screen arranges attributes into the two-column seller form: which **groups** (General, Description, Policies, Meta Description, Address, Social Links, Settings, …) sit in which **column**, and the **order** of attributes within each group. This is exactly the layout that appears on the [seller edit form](/sellers/seller-management#editing-a-seller) and sign-up.

## Attributes that ship by default

The marketplace comes with a full set of seller attributes, including:

- **Commission** — `commission_enabled` and `commission_percentage` set a seller's [commission](/payments/commission-management).
- **Magic AI** — `magic_ai_enabled` and `magic_ai_seller_limit` govern a seller's [Magic AI](/catalog/magic-ai) access and quota.
- **Selling controls** — `allowed_product_types` and `min_order_amount`.
- **Profile & marketing** — business details, policies, and social links (`facebook`, `instagram`, `youtube`, `google_analytics_id`).

::: tip
Add a seller attribute whenever you need a new piece of information or a new per-seller control — it becomes available on the seller form (and, if you choose, at sign-up) for every seller, without any code changes.
:::
