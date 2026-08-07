# Seller Account Health

Account Health is a single, honest read on how a seller is doing — built from **cancellations**, **customer feedback**, and **flags**. Sellers see it in their panel; the admin sees it per seller and marketplace-wide, and uses it to keep the marketplace reliable.

::: info What you'll learn
- The three metrics behind the score
- How the score and its bands are calculated
- How and when it refreshes
:::

## The seller's view

A seller opens **Performance → Account Health**. It shows an **Overall Health** verdict, a **Health Score** out of 100 on an Unhealthy → At Risk → Healthy gauge, and three metric cards.

<ImagePopup src="/images/seller-account-health/account-health.png" alt="Seller account health page" />

- **Order Cancellation Rate** — cancelled units over the **last 30 days**, with a target (for example, below 2.5%). Lower is better.
- **Customer Feedback** — the seller's average rating across **approved** reviews (last 90 days), target 4.0 and above. Shows "No Data" until there are reviews.
- **Flags** — flags customers raised against the store in the **last 90 days**, measured against the marketplace's red-flag limit.

## How the score works

Each metric is graded **good / warning / critical** against its thresholds, and the three combine into a **0–100** score split into bands:

- **0–33 Unhealthy**, **34–66 At Risk**, **67–100 Healthy**.

The overall verdict follows the worst-performing metric that has data, so one bad area is surfaced rather than averaged away. Cancellation always counts; feedback counts once there are reviews; flags count while flagging is enabled. The **cancellation-rate thresholds** (warning and critical percentages) are set by the admin under **Configure → Marketplace → Moderation & Health → Account Health**.

## Refreshing

- **Seller** — the page shows when it was last updated and a **Refresh now** button, with a short cooldown between manual refreshes (and a countdown to the next allowed refresh). A **How is this calculated?** guide explains the maths interactively.
- **Admin** — can refresh a seller's health any time (no cooldown) from the sellers list, individually or in bulk, and a scheduled job keeps every seller's health current.

::: tip
The fastest wins are usually **fewer cancellations** (keep stock accurate so you don't cancel orders) and **more approved reviews**. Both feed directly into the score — and into [Featured Sellers](/sellers/featured-sellers).
:::
