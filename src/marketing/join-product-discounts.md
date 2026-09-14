# Joining Admin Discounts

<div class="page-roles"><span class="role role--admin">Admin</span><span class="role role--seller">Seller</span></div>

The admin can open a store product discount to sellers. Sellers who join, and are
approved, get that discount on their own products. This lets you run store-wide sales
that include seller products, while each seller chooses whether to take part.

A product discount you create in the admin panel doesn't lower the price of any
seller's product unless that seller has joined it and been approved.

## Open a discount to sellers

1. In the admin panel, go to **Marketing >> Promotions >> Catalog Rules**.
2. Create a catalog rule, or click the edit icon on an existing one.
3. In **Participating Sellers**, check that **Allow Sellers to Join** is on. It is on by
   default for every catalog rule, so switch it off for rules sellers shouldn't join.
4. To add sellers yourself, choose them in **Sellers**. Sellers you add take part
   straight away.
5. Click **Save Catalog Rule**.

<ImagePopup src="/images/join-product-discounts/participating-sellers.png" alt="The Participating Sellers section of a catalog rule" />

Removing a seller from **Sellers** withdraws them from the discount. Switching
**Allow Sellers to Join** off stops the discount for every seller who joined.

## Join a discount

1. In the Seller Panel, go to **Marketing >> Product Discounts**.
2. Click **Join Product Discounts**.
3. To see a discount's conditions, amount and dates, click the view icon on its row.
4. Click **Enroll**.

<ImagePopup src="/images/join-product-discounts/join-list.png" alt="The Join Product Discounts list in the Seller Panel" />

The **Join Product Discounts** button appears only when the admin allows joining and
you have the **Join** permission. The list can include discounts that are switched off
or out of date, so check their status and dates before you enroll.

You'll see **Enrolled in the product discount successfully.** To join several
discounts at once, tick them and use **Select Action >> Enroll**.

The **Participation** badge shows where you stand:

| Badge | What it means |
|---|---|
| **Not Enrolled** | You haven't joined. |
| **Pending** | You joined and are waiting for the admin to approve. |
| **Approved** | The discount applies to your products. |
| **Disapproved** | The admin declined your request. Open the discount and click **Enroll** to ask again. A new request always waits for the admin. |

<ImagePopup src="/images/join-product-discounts/join-view.png" alt="The details of a store discount a seller can join" />

### What joining covers

- You join with all of your own products that match the discount's conditions. You
  can't choose products one by one.
- Catalog products you sell as your own aren't discounted.
- To leave, click **Withdraw** on the discount's row, or use
  **Select Action >> Withdraw**.

## Approve join requests

**Auto-Approve Join Requests** in [Marketing settings](../configuration/marketing.md) is
on by default, so requests are approved straight away. When you switch it off, requests
wait for you.

1. In the admin panel, go to **Marketplace >> Marketing >> Joined Product Discounts**.
2. On a request, click **Approve** or **Disapprove**.

<ImagePopup src="/images/join-product-discounts/joined-product-discounts.png" alt="The Joined Product Discounts list in the admin panel" />

Each row shows the discount, the seller, the **Join Status**, whether the discount is
active, its priority and its dates. To decide on several requests at once, tick them
and use **Select Action >> Update Status**. You can also disapprove a seller who is
already approved.

## Emails

| Email | Sent to | When |
|---|---|---|
| **A seller joined your promotion** | Store admin | A seller asks to join, including when the request is approved automatically |
| **Your promotion join request was approved** | Seller | You approve the request |
| **Your promotion join request was declined** | Seller | You disapprove the request |

No email is sent when you add or remove sellers on the catalog rule, or when a seller
withdraws.

## When the discount applies

A joined discount lowers a seller's prices only while all of these are true:

- joining is switched on in [Marketing settings](../configuration/marketing.md);
- the catalog rule still has **Allow Sellers to Join** on;
- the seller's request is **Approved**;
- the rule itself is active, in date, and matches the channel and customer group.

Prices are updated in the background, so a change can take a little while to show.
Switching joining off in Marketing settings doesn't update prices straight away: joined
discounts stay until the store's daily price update, just after midnight.

For the seller's own discounts, see [Product Discounts](product-discounts.md).

## Permissions

- Team members need **Product Discounts >> Join**, with **View**, **Enroll** and
  **Withdraw** as needed.
- Admins need **Marketplace >> Marketing >> Joined Product Discounts**, with
  **Approve** and **Disapprove**. **Select Action >> Update Status** needs **Approve**.

When joining is switched off in Marketing settings, these permissions and menus are
hidden.
