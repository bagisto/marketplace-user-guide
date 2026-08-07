# Seller & Product Flagging

Flagging lets customers report a problem with a **product** or a **seller** — a wrong, damaged, duplicate, or overpriced listing, or an issue with the seller. The admin defines the reasons customers can choose and reviews the flags that come in.

::: info What you'll learn
- What customers can flag, and the rules around it
- How the admin defines flag reasons
- Where flags are reviewed, and the red-flag limit
:::

## Who can flag

Like reviews, a flag can only be raised by a customer who has **ordered** the product (or from the seller), and each customer can flag a given product or seller **once** — which keeps flags meaningful rather than noise.

## Flag reasons (admin)

The admin controls the list of reasons a customer may pick when flagging. In the admin panel, go to **Marketplace → Configure → Flag Reasons**.

<ImagePopup src="/images/seller-product-flagging/flag-reasons.png" alt="Flag reasons list" />

Each reason has a **type** — **Product** or **Seller** — and a **status**:

- **Product** reasons apply to a listing, e.g. *Receive wrong product*, *Missing product parts*, *Damaged product*, *Poor product quality*.
- **Seller** reasons apply to the seller, e.g. *Wrong product sold by seller*, *Over price product sold by seller*, *Duplicate product sold*.

Use **Create Reason** to add one — an **admin name**, per-language **labels**, a **type** (Product or Seller), and a **status** — and edit, delete, enable, or disable reasons to control what customers can pick.

<ImagePopup src="/images/seller-product-flagging/reason-create.png" alt="Create flag reason form" />

## Reviewing flags (admin)

When customers flag products or sellers, the admin reviews them:

- **Product flags** — from **Marketplace → Catalog → Products**, a product's flags list shows who raised each flag, their email, the reason, and the date.
- **Seller flags** — from **Marketplace → Sellers**, a seller's flags list shows the same.

## Flag settings (admin)

Whether flagging is available at all, and how it's scored, is controlled in the system configuration under **Configure → Marketplace → Moderation** — a separate place from the reason list above. It has two sub-sections:

- **Product Flags** — an **Enable Flag** toggle that turns product flagging on or off.
- **Seller Flags** — an **Enable Flag** toggle, plus **Show Red Flag** and a **Red Flag Limit**. Once a seller collects more flags than the limit, a red flag is shown on their profile, and flags feed into the seller's [account health](/sellers/seller-account-health).

::: info Two different places
The *list of reasons* customers pick from lives under **Marketplace → Configure → Flag Reasons** (a management page inside the Marketplace section). The *flag settings* — turning flagging on and setting the red-flag limit — live under the system **Configure → Marketplace → Moderation**.
:::

::: tip
Keep your reasons specific and few — a short, clear list gets more useful reports than a long, overlapping one.
:::
