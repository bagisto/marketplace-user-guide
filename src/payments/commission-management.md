# Commission Management

Commission is how the marketplace earns from each sale. On every seller order, the platform keeps a percentage as commission and the seller receives the rest. The admin sets the rates; the split is calculated automatically on each order, at the moment of sale.

::: info What you'll learn
- Where the global commission rate is set
- How per-seller rates override the default
- How commission is calculated and where it shows up
:::

## The global commission rate

Go to **Configure → Marketplace → General**. The **Admin Commission Percentage** is the default rate applied to seller sales across the marketplace — for example, **20%** means the platform keeps 20% of a sale and the seller earns the other 80%.

<ImagePopup src="/images/commission-management/commission-config.png" alt="Admin Commission Percentage setting" />

The same screen also carries the marketplace **status**, the **seller panel logo**, the **subscription** switch, and the installed **module version**.

## Per-seller commission

The global percentage is the default, but the admin can give an individual seller a **different rate** on that seller's admin edit form — **Commission Enabled** plus a **Commission Percentage** (see [Seller Management](/sellers/seller-management#editing-a-seller)). When enabled, the seller's own rate overrides the global default — useful for negotiated terms or preferred partners. A [subscription plan](/subscriptions/seller-subscription-management) can also set a seller's commission when they subscribe.

## How commission is calculated

Commission is worked out **per order item** when the order is placed, and the rate is **frozen onto the order** so later changes to the config or the seller don't retro-alter past orders:

- **Commission** = the item's total (after any discount) × the applicable rate.
- **Seller earning** = the item's total − commission + tax (the seller keeps the tax).

At invoice time, commission is recomputed on the **net invoiced amount** (after discount) — so a seller is never charged commission on discount money the customer didn't actually pay.

## Where commission shows up

- On the **[order list and detail](/orders/order-management)**, alongside each order's gross amount and the seller's earning.
- On the **[Seller Payout Management](/payments/payment-management)** view — the **Total Commission Earned** card and each order's figures.
- On each **[transaction](/payments/payment-management#transactions)**, broken out per item.

::: tip
Set the global **Admin Commission Percentage** as your baseline, then adjust individual sellers only where you've agreed a special rate — it keeps the platform's economics simple and predictable.
:::
