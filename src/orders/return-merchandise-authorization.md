# Returns (RMA)

<div class="page-roles"><span class="role role--customer">Customer</span><span class="role role--seller">Seller</span><span class="role role--admin">Admin</span></div>

Returns use the store's RMA (return merchandise authorization) system. When a customer
asks to return a product, the request goes to the seller who sold it. The seller talks
to the customer and moves the request along, and the admin can see and act on every
return.

## Before returns can be requested

- The store sets the return window, the return policy, the file types customers can
  attach and the product types that can be returned in **Configure >> Sales >> RMA**.
  See [RMA settings](https://docs.bagisto.com/configure/rma) in the Bagisto User Guide.
- Sellers choose whether each product can be returned on the product's **RMA** step,
  with **Allow RMA** and a return rule. See
  [Product Management](../catalog/product-management.md). The setting applies to
  orders placed after it is switched on, so switch it on before you start selling.

## How a customer asks for a return

Customers go to **RMA** in their account and create a request for one product at a
time. A product can be returned once it is invoiced, and cancelled while it isn't
invoiced yet. Customers choose what they want, the reason, the quantity and the package
condition, can add details and photos, and must accept the return policy. See
[RMA](https://docs.bagisto.com/orders/rma) in the Bagisto User Guide.

Sellers aren't emailed about new returns, so check **Sales >> RMA** regularly.

## Your return requests

Go to **Sales >> RMA** in the Seller Panel.

<ImagePopup src="/images/return-merchandise-authorization/rma-list.png" alt="The seller's return requests" />

Each request shows the **RMA ID**, the **Order ID**, the **Customer Name**, the
**RMA Status**, whether it was a **Guest** order, the **Order Status**
(**Delivered**, **Undelivered**, **Canceled** or **Closed**) and the **Date**.

## Handle a return

1. Go to **Sales >> RMA**.
2. Click the view icon on the request.

<ImagePopup src="/images/return-merchandise-authorization/rma-status.png" alt="A return request with its status, items and conversation" />

The page shows:

- **General** — the date, package condition, the customer's information and photos;
- **Items** — the product, its price, the return and order quantities, what the
  customer wants and why;
- **Conversation** — messages between you and the customer;
- the **Status**, the **Order Details** and the **Customer Details**.

### Reply to the customer

1. Under **Conversation**, type your message.
2. To add a file, click **Attachments**. You can attach PDF, JPG or PNG files up to
   2 MB.
3. Click **Send Message**.

The customer receives a **New RMA Message Received** email. When the customer replies,
the reply appears in the conversation; the store admin is emailed about it, not you.

### Update the status

1. Choose the next status under **Update Status**.
2. Click **Save Changes**.

The customer sees the new status on the return, with a note about the change in the
conversation.

| From | You can choose |
|---|---|
| **Pending Review** | **Approved** or **Request Declined** |
| An approved return | **Awaiting Return**, **Return In Transit**, **Refunded** or **Request Canceled** |
| An approved cancellation | **Awaiting Return**, **Item Canceled** or **Request Canceled** |

After **Pending Review**, active statuses the store adds itself also appear. Choosing
**Item Canceled** cancels the product's quantity on the order.

::: warning Refunds
Sellers can't issue refunds. Choosing **Refunded** in the Seller Panel doesn't refund the
customer, and it hides the admin's refund option for that return. Leave the refund to
the store admin, as described below.
:::

**Update Status** is no longer shown once the request is **Refunded**, **Solved**,
**Request Declined**, **Item Canceled** or **Request Canceled**, or when the order is
canceled or closed.

While a quantity is in a return request, whatever the request's status, it can't be
shipped.

## Return statuses

| Status | What it means |
|---|---|
| **Pending Review** | The customer has asked for a return. |
| **Approved** | The return is accepted. |
| **Awaiting Return** | Waiting for the customer to send the product back. |
| **Return In Transit** | The product is on its way back. |
| **Refunded** | The request is marked as refunded. |
| **Solved** | The customer closed the request. |
| **Request Declined** | The return was refused. |
| **Item Canceled** | The product was cancelled on the order. |
| **Request Canceled** | The request was withdrawn. |

## For the admin

Go to **Marketplace >> Sales >> RMA** to see every return that includes a seller's
product, with the **Seller** and **Shop**.

<ImagePopup src="/images/return-merchandise-authorization/admin-rma.png" alt="Seller returns in the admin panel" />

Click the view icon to open the return. There you can message the customer and seller,
and change the status. When you change the status, the customer receives a
**Status Updated!** email.

To refund the customer, use **Refund Item** or **Cancel Item** under **Order Actions**.
They are available while the return is **Approved**, **Awaiting Return** or
**Return In Transit**.

Return reasons, rules, statuses and custom fields are managed under **Sales >> RMA** in
the admin panel.

## Permissions

- Team members need **RMA** with **View** to open and update returns.
- Admins need **Marketplace >> Sales >> RMA** with **View** to see the list, and
  **Sales >> RMA >> Requests** to open, message and update a return.
