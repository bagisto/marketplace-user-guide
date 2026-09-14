# Account Health

<div class="page-roles"><span class="role role--seller">Seller</span><span class="role role--admin">Admin</span></div>

Account health shows how well a seller is serving customers, based on cancelled
orders, customer ratings and reports. Sellers use it to spot problems early, and
the admin uses it to find sellers who need attention.

## Check your account health

Sellers go to **Performance >> Account Health** in the Seller Panel.

<ImagePopup src="/images/seller-account-health/account-health.png" alt="The Account Health page in the Seller Panel" />

The page shows:

- **Overall Health** — **Healthy**, **At Risk** or **Unhealthy**. It follows the
  worst of the metrics below.
- **Health Score** — a score out of 100.
- **Order Cancellation Rate** — the share of your ordered items that were cancelled
  in the last 30 days, whether you, the customer or the admin cancelled them.
- **Customer Feedback** — your average rating from approved reviews of your shop in
  the last 90 days.
- **Flags** — reports raised against your shop by customers in the last 90 days. It
  appears when seller reporting is switched on.

Each metric is marked **Good**, **Needs Attention** or **Critical**, or
**No Data** when there is nothing to measure yet.

### Refresh the figures

Click **Refresh now** to recalculate. You can refresh again after 60 minutes. Team
members need the **Refresh Account Health** permission.

### See how the score is worked out

Click **How is this calculated?**. The guide explains each metric and has a live
calculator where you can try different values. Nothing you enter is saved.

<ImagePopup src="/images/seller-account-health/health-guide.png" alt="The How the Health Score Is Calculated guide" />

## What each metric needs

| Metric | Good | Needs Attention | Critical |
|---|---|---|---|
| **Order Cancellation Rate** | Below the warning rate | At or above the warning rate | Above the critical rate |
| **Customer Feedback** | 4.0 or higher | 3.0 to 3.9 | Below 3.0 |
| **Flags** | Well under the red flag limit | Approaching the limit | Close to or over the limit |

The warning and critical cancellation rates and the red flag limit are set by the
admin in [Moderation & Health](../configuration/moderation-and-health.md).

## How the score works

- The 100 points are shared equally between the metrics that count: cancellations
  always, feedback once the seller has reviews, and flags when reporting is on.
- A perfect metric earns its full share. A poor one takes points away.
- A score of 67 to 100 is **Healthy**, 34 to 66 is **At Risk**, and 0 to 33 is
  **Unhealthy**.

Because **Overall Health** follows the worst metric, a seller can have a high score
and still be marked **Unhealthy** when one metric is critical.

## When the figures change

Account health is stored when it is refreshed:

- the seller clicks **Refresh now**;
- the admin clicks **Refresh Account Health** on the seller's row, or uses it as a
  bulk action.

When subscription plans are on, every seller is also refreshed once a day by the
store's scheduler. Until a seller is refreshed for the first time, the admin's list
shows **Not calculated**.

## For the admin

Go to **Marketplace >> Sellers**. The **Account Health** column shows each seller's
score and band, their cancellation rate, rating and flags.

- To find sellers who need attention, click **Filter** and choose **Unhealthy** or
  **At Risk** under **Account Health**.
- To recalculate, click the **Refresh Account Health** icon on a row, or tick
  several sellers and use **Select Action >> Refresh Account Health**.

The list shows the band of the score, so it can say **Healthy** while one of the
seller's metrics is critical. Open the seller's Account Health page with
**Login as Seller** to see each metric.

## Keep your account healthy

- Keep stock accurate so you don't have to cancel orders.
- Describe products honestly so customers get what they expect.
- Answer customer messages quickly and resolve returns fairly.
- Read reviews and flags to see what customers are unhappy about.
