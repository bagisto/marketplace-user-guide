# Seller Subscriptions

Seller Subscriptions let the marketplace charge sellers a recurring fee to sell, using **plans** that can bundle their own commission rate, product and staff limits, and permissions. It's an **optional** feature — off by default — that the admin turns on when they want a subscription-based model.

::: info What you'll learn
- How to enable subscriptions
- Everything a plan defines
- How sellers subscribe, and the subscription lifecycle
:::

## Enabling subscriptions

Subscriptions are disabled until the admin switches them on. Go to **Configure → Marketplace → General**, enable **Subscription Plans**, and set the **subscription terms** sellers must agree to. Until this is on, the plans area isn't available.

<ImagePopup src="/images/seller-subscription-management/subscription-settings.png" alt="Marketplace settings with the subscription switch" />

## Plans

Once enabled, the admin manages plans under **Marketplace → Subscription Plans → Plans**, where each plan can be created, edited, enabled, or reordered. A plan defines:

- **Name**, **code**, and **description**, and whether it's the **default** (free) plan.
- **Price** and **billing cycle** (**monthly** or **yearly**), with an optional custom **duration** in days.
- **Max Products** and **Max Staff** the seller may have (empty means unlimited).
- **Commission Value** — the commission rate that applies to a seller on this plan.
- **Permissions** — either **all** access or a **custom** set from the seller permission tree.
- **Allowed Product Types**, **featured** flag, **status**, and **position**.

## Subscribing (seller)

With subscriptions on, a seller browses the **available plans** in their panel — each card shows the price, duration, product/staff limits, commission, and the permissions it grants. Choosing one opens a summary, requires agreeing to the **terms**, and then takes payment (free/default plans activate immediately; paid plans go through a payment gateway). Sellers can see their **subscription history** too.

## The subscription lifecycle

- A new subscription starts **pending**, becomes **active** on successful payment (or immediately for a free plan), and later moves to **expired** or **cancelled**. Statuses are **pending / active / expired / cancelled**.
- When a subscription activates, the seller's **commission**, **allowed product types**, **product limit**, and **staff limit** follow the plan. If a plan's product limit is exceeded, the newest products beyond the limit are disabled until the seller is within limits again.
- The admin reviews who's subscribed under **Marketplace → Subscription Plans → Subscription**, and can **approve** or **cancel** subscriptions. Sellers are reminded before a subscription expires, and expired subscriptions are closed automatically.

::: info Commission-only marketplaces
If you'd rather not charge a recurring fee, simply leave subscriptions off — sellers then sell without a subscription and you earn purely through [commission](/payments/commission-management).
:::
