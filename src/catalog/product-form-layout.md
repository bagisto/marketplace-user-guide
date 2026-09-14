# Product Form Layout

<div class="page-roles"><span class="role role--admin">Admin</span></div>

The product form sellers fill in can be shown as guided steps or as a classic page
with two columns. You set the default for every product, and you can give each
attribute family its own layout and step order. This only changes the seller's form.
The admin product form stays the same.

## Set the default for all families

The defaults live in **Configure >> Marketplace >> Products**, in the
**Product Form** section: **Enable Stepped Product Form**,
**Stepped Form Navigation** and **Show Progress Bar**. See
[Products settings](../configuration/products.md#product-form).

Turning off **Enable Stepped Product Form** also gives sellers a simpler, one-page
**List Your Product** screen instead of the guided one. Family layouts don't change
that screen.

## The Product Form list

Go to **Marketplace >> Catalog >> Product Form**. The list has one row for each
attribute family.

<ImagePopup src="/images/product-form-layout/form-layout-list.png" alt="The Product Form Layout list of attribute families" />

| Column | Values |
|---|---|
| **Attribute Family** | The family's name |
| **Layout** | **Inherit (Global)**, **Stepped** or **Two Column** |
| **Navigation** | **Inherit (Global)**, **Horizontal Tabs** or **Vertical Rail** |

**Inherit (Global)** follows the default you set on the Configure page.

To change several families at once, tick them, click **Select Action**, and use
**Update Layout** or **Update Navigation**.

## Configure one family

1. Go to **Marketplace >> Catalog >> Product Form**.
2. Click **Configure** on the family's row.
3. In **General**, choose the **Form Layout**.
4. If the layout is stepped, choose the **Step Navigation**.
5. In **Step Order**, drag the steps into the order sellers should see them.
6. Click **Save**.

<ImagePopup src="/images/product-form-layout/configure-family.png" alt="Configuring the step order and layout for one attribute family" />

- **Step Order** lists the family's attribute groups. **Media**, the step for the
  product type, and **Organization** always come last.
- **Step Order** and **Step Navigation** only apply to the stepped form, so they are
  turned off when you choose **Two Column**, or **Inherit (Global)** while the global
  stepped form is off.

## What sellers see

- **Stepped** — one step at a time, with the steps in a scrolling row of tabs
  (**Horizontal Tabs**) or, on wide screens, in a list down the side
  (**Vertical Rail**; smaller screens still show tabs). Sellers move
  with **Previous** and **Next**, and a step with a mistake is marked.
- **Two Column** — the whole form on one page, in two columns.

See [Product Management](product-management.md) for how sellers fill in the form.

## Permissions

To give another admin access, tick **Marketplace >> Catalog >> Product Form Layout**
and **Edit** in their role.
