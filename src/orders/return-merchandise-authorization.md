# Return Merchandise Authorization (RMA)

RMA is the marketplace's returns workflow. When a customer wants to return or exchange an item they bought from a seller, they raise an RMA request from their storefront order, and the seller handles it from **Sales → RMA** — reviewing it, messaging the customer, moving it through its statuses, and refunding when the goods come back.

::: info What you'll learn
- How returns reach the seller
- The RMA statuses and how a request moves through them
- How a seller messages, refunds, and reopens a return
:::

## How returns reach the seller

Returns start on the **customer's** side: from their order, a customer raises an RMA against specific items. The marketplace routes each request to the seller who sold those items, so it lands in that seller's RMA list. Whether a product can be returned at all — and under which rule — is set by the seller on the product's **RMA** tab (see [Product Management](/catalog/product-management#the-product-form)).

## The RMA requests list

Open **Sales → RMA** in the Seller Panel. Each request shows its **RMA ID**, the **order ID**, the **customer name**, the **RMA status**, whether it was a **guest** order, the **order status**, and the **date**.

<ImagePopup src="/images/return-merchandise-authorization/rma-list.png" alt="Seller RMA requests list" />

## Working a return

Open a request with its **View** action. The page gathers everything about the return: a **General** panel (date, package condition, notes, images), an **Items** panel (each returned item with its price, RMA quantity, resolution type, and reason), a **Conversation** thread, and **Order / Customer** details.

- **Message the customer** — the conversation thread lets the seller and customer exchange details (reasons, photos, resolution) with file attachments, right on the request.
- **Update the status** — move the request through its lifecycle. RMA statuses are **Pending → Accept → Awaiting → Dispatched Package → Received Package → Solved**, with **Declined**, **Item Canceled**, and **Canceled** as end states. A brand-new request starts at **Pending**, from which you either **Accept** it or **Decline** it; which statuses you can move to next depends on whether the resolution is a **return** or a **cancellation**.
- **Refund on receipt** — moving a return to **Received Package** processes the **refund** for the returned items (you can also refund the shipping). A refund needs the item to have been invoiced first.
- **Reopen** — if you declined a request and the admin allows it, a customer can have it **reopened**, which puts it back to Pending.

::: info Admin oversight
Admins see every seller's RMAs across the marketplace under **Marketplace → Sales → RMA**, and RMA availability and policy are governed by the admin. Each status change notifies the customer.
:::

::: tip
Respond to return messages quickly and keep the status current — a smooth returns experience protects your ratings and your [account health](/sellers/seller-account-health).
:::
