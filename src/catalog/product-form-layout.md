# Product Form Layout

The seller product form doesn't have to look the same for every kind of product. Product Form Layout lets the admin choose the shape of that form — stepped or two-column — globally and then per attribute family, along with the order of the steps and how a seller moves between them.

::: info What you'll learn
- The global product form settings
- How to override the layout for one attribute family
- What each layout and navigation option looks like to a seller
:::

::: tip This changes only the seller's form
The admin product form is unaffected by everything on this page. See [Product Management](/catalog/product-management#the-product-form) for the form as a seller meets it.
:::

## The global setting

Go to **Configure → Marketplace → Products → Product Form**:

- **Enable Stepped Product Form** — on, sellers get the step-by-step form; off, they get the classic two-column form.
- **Stepped Form Navigation** — how a seller moves between steps: **Horizontal** shows a scrolling tab strip, **Vertical** shows a side rail with every step visible on wide screens.
- **Show Progress Bar** — whether the stepped form shows how far through the seller is.

This is the default every attribute family follows unless it's given its own.

## Per-family overrides

Go to **Marketplace → Catalog → Product Form**. Each row is an **Attribute Family**, showing the **Layout** and **Navigation** it currently uses, with a **Configure** action — the pencil under **Actions** — to change them.

<ImagePopup src="/images/product-form-layout/form-layout-list.png" alt="Product Form Layout list showing each attribute family with its layout and navigation" />

Select several families with the checkboxes to apply **Update Layout** or **Update Navigation** across the selection in one move.

## Configuring one family

**Configure** opens that family's settings:

**Form Layout:** **Inherit (Global)**, **Stepped**, or **Two Column**. Choosing Inherit tells you which layout the global setting currently resolves to, so you can see what the family will actually get.

**Step Order:** Drag the attribute-group steps into the order sellers should meet them.

**Step Navigation:** **Inherit (Global)**, **Horizontal Tabs**, or **Vertical Rail**.

<ImagePopup src="/images/product-form-layout/form-layout-configure.png" alt="Configuring one family — draggable step order beside the Form Layout and Step Navigation selects" />

Save, and every seller creating or editing a product in that family gets the form you've described.

### Step order and navigation apply only to the stepped form

Both settings are disabled when the layout is **Two Column**, because a two-column form has no steps to order or navigate between. Switch the layout back to **Stepped** — or to **Inherit** where the global setting is stepped — and they become editable again.

::: tip
Put the steps a seller can answer without leaving the room first — the basics and the price — and the ones needing photographs or measurements last. A family whose first step is easy gets far fewer abandoned [drafts](/catalog/draft-products).
:::
