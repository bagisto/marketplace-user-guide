# Inventory Sources

<div class="page-roles"><span class="role role--seller">Seller</span><span class="role role--admin">Admin</span></div>

An inventory source is a place where a seller keeps stock, such as a warehouse or a
shop. Stock is recorded for each source, and sellers choose a source when they ship an
order.

Every shop starts with a source called **Default**, and sellers can add more.

## Your sources

Go to **Inventories >> Inventory Sources**. The list shows each source's **ID**,
**Code**, **Name**, **Priority** and **Status**, with icons to edit or delete it.

<ImagePopup src="/images/inventory-source-management/inventory-sources.png" alt="The seller's Inventory Sources list" />

## Add a source

1. Go to **Inventories >> Inventory Sources**.
2. Click **Create Inventory Source**.
3. In **General**, enter a **Code**, a **Name** and, if you like, a **Description**.
4. In **Source Address**, enter the **Country**, **State**, **City**, **Street** and
   **Postcode**.
5. In **Contact Information**, enter the **Name**, **Email** and **Contact Number**
   of the person in charge, and a **Fax** if you have one.
6. In **Settings**, enter the **Latitude**, **Longitude** and **Priority**, and switch
   **Status** on.
7. Click **Save Inventory Sources**.

<ImagePopup src="/images/inventory-source-management/source-create.png" alt="The Add Inventory Source form" />

- The **Code** must be at least two characters, start with a letter, and use only
  letters, numbers and underscores. No other source on the marketplace, including the
  store's own sources, can use it.
- **Status** is off on a new source. Switch it on so the source's stock is available
  to customers and the source appears on your product form.

You'll see **Inventory Source Created Successfully**. The new source is added to every
channel your shop sells on. No approval is needed.

## Edit or delete a source

- Click the edit icon to change a source, then click **Save Inventory Sources**.
- Click the delete icon to remove it. You can't delete your last active source. You'll
  see **Last Active Inventory Sources Can Not Deleted**.

## Where sources are used

- Set stock for each source on a product's **Inventories** step, or for many products
  in [Manage Inventory](manage-inventory.md).
- Choose the source an order ships from when you create a shipment. Pickups are
  scheduled from that source. See
  [Shipments & Carriers](../orders/fulfilment-carriers.md).

## For the admin

Go to **Marketplace >> Configure >> Inventory Sources** to see the sources of every
seller, with their **Id**, **Code**, **Name**, **Seller Name**, **Business Name** and
**Status**. Click the icon on a row to see the source's details. Sellers manage their
own sources, so this list is read-only.

<ImagePopup src="/images/inventory-source-management/admin-inventory-sources.png" alt="The admin's read-only list of seller inventory sources" />

Your store's own sources, under **Settings >> Inventory Sources**, don't include
seller sources.
