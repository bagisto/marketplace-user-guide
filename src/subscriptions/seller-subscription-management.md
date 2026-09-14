# Plans & Subscriptions

<div class="page-roles"><span class="role role--admin">Admin</span></div>

Subscription plans let you charge sellers for selling on your marketplace. Each plan
sets a price and a length, how many products and team members the seller can have, the
commission you take, and what the seller can use in the Seller Panel.

Plans are off until you turn them on. With plans off, sellers sell without a plan and
you earn through [commission](../payments/commission-management.md).

## Turn on plans

Switch **Subscription Plans** on and enter your terms in
**Configure >> Marketplace >> General**. See
[General settings](../configuration/general.md#turn-on-subscription-plans).

**Marketplace >> Subscription Plans** then appears in the admin panel.

## Create a plan

1. Go to **Marketplace >> Subscription Plans >> Plans**.
2. Click **Add Plan**.
3. Fill in the fields below. **Name**, **Code**, **Price**, **Permissions** and
   **Position** are required.
4. Switch **Status** on so sellers can see the plan.
5. Click **Save**.

<ImagePopup src="/images/seller-subscription-management/edit-plan.png" alt="The plan form with its fields, open on a monthly plan" />

| Field | What it does |
|---|---|
| **Name** and **Description** | The name is shown on the plan card. Sellers see the description when they open the plan. |
| **Code** | A unique code for the plan. |
| **Is Default** | Makes this the free plan. The **Price** field is hidden. Sellers are offered the free plan only until they have had a plan that became active. |
| **Price** | What the plan costs. It must be more than 0 unless **Is Default** is on. |
| **Permissions** | **All** gives access to the whole Seller Panel. **Custom** shows a tree where you tick what the plan includes. |
| **Billing Cycle** | **Monthly** or **Yearly**. |
| **Duration (days)** | How long the plan lasts. Leave it empty for 30 days on a monthly plan or 365 days on a yearly one. |
| **Max Products (Empty = unlimited)** | How many products the seller can list. |
| **Max Staff** | How many team members the seller can add. It starts at 1; clear it for no limit. |
| **Commission Value** | The commission percentage you take from sellers on this plan. It replaces the seller's own rate. Always enter a value; see [Commission](../payments/commission-management.md). |
| **Is Featured** | Marks the plan with a star for sellers. |
| **Status** | Shows the plan to sellers. It is off on a new plan. |
| **Position** | The order the plan appears in. Enter 1 or more, and a different number for each plan. |
| **Allowed Product Types** | The kinds of product sellers on this plan can sell. |

You'll see **Plan created successfully.**

## Manage plans

The **Plans** list shows each plan's **ID**, **Name**, **Code**, **Price**,
**Billing Cycle**, **Status** and **Position**, with icons to edit or delete it. To
switch several plans on or off, tick them and use **Select Action >> Update Status**,
or remove them with **Select Action >> Delete**.

<ImagePopup src="/images/seller-subscription-management/plans-list.png" alt="The Plans list" />

- Editing a plan doesn't change it for sellers who have already bought it.
- A plan with active subscriptions can't be deleted. Deleting a plan cancels its pending
  subscriptions.

## Subscriptions

Go to **Marketplace >> Subscription Plans >> Subscription** to see every plan sellers
have bought, with the **Seller**, **Plan**, **Payment** method, **Status**, dates and
**Price**.

<ImagePopup src="/images/seller-subscription-management/subscriptions.png" alt="The Subscriptions list" />

| Status | What it means |
|---|---|
| **Pending** | Waiting for you to approve because the seller paid offline, or a PayPal payment isn't finished. |
| **Active** | The plan is running. |
| **Expired** | The plan's end date has passed. |
| **Canceled** | You cancelled the plan, the seller cancelled a PayPal payment or bought another plan while this one was pending, or the plan was deleted. |

### Approve a subscription

When a seller pays with a method that isn't PayPal, such as Money Transfer, the plan
waits as **Pending**. Cash On Delivery isn't offered for plans.

1. Go to **Marketplace >> Subscription Plans >> Subscription**.
2. Click the view icon on the pending subscription.
3. Check that you have received the payment.
4. Click **Approve**.

<ImagePopup src="/images/seller-subscription-management/view-subscription.png" alt="A pending subscription with the Approve and Cancel buttons" />

To cancel a pending or active plan, click **Cancel**. To decide on several at once, tick
them and use **Select Action >> Update Status**. A plan can't be approved while the
seller already has an active plan for the same dates.

## What happens automatically

These run on the store's scheduler, so make sure it is running on your server:

- Sellers are emailed 9, 7, 3 and 1 days before their plan ends.
- Plans past their end date are marked **Expired**.
- Sellers' account health is refreshed every day.

When a plan expires without another one to follow, the seller can only reach their
profile and the plans page, their products are hidden, their allowed product types are
cleared, and their commission becomes 100% until they buy a new plan. See
[Choosing a Plan](choosing-a-plan.md#when-your-plan-ends).

## Emails

The seller and the store admin both receive an email when a subscription is created,
activated, cancelled or expires. Sellers also receive the reminder emails before their
plan ends. No email is sent when a subscription is cancelled because the seller bought
another plan, or because the plan was deleted.

## Permissions

To give another admin access, tick **Marketplace >> Subscription Plans** in their role:
**Subscription Plans** with **Create**, **Edit** and **Delete**, and **Subscription**
with **View** and **Edit**.
