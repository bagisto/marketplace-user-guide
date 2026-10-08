# General

<div class="page-roles"><span class="role role--admin">Admin</span></div>

The **General** screen turns the marketplace on, sets the commission the store
keeps from seller sales, and switches subscription plans on or off.

Go to **Configure >> Marketplace >> General**.

<ImagePopup src="/images/configuration/general.png" alt="The Marketplace General settings with the General, Subscription and Module Information sections" />

## General

| Setting | What it does |
|---|---|
| **Status** | Switches the whole marketplace on or off for the channel. See [Turning the marketplace off](overview.md#turning-the-marketplace-off). |
| **Admin Commission Percentage** | The commission taken from every seller sale, as a percentage from 1 to 100. The field is required and accepts any number from 1 to 100, decimals included. A seller with their own rate uses that instead. The rate is fixed on each order when it is placed. See [Commission](../payments/commission-management.md). |
| **Seller Panel Logo** | The logo in the Seller Panel header, for every channel. Upload a square image for the best fit, as a BMP, JPEG, JPG, PNG, WebP, SVG or ICO file. Without one, the Bagisto icon is shown. |

### Set the commission

1. Go to **Configure >> Marketplace >> General**.
2. In the **General** section, enter the **Admin Commission Percentage**.
3. Click **Save Configuration**.

The new rate applies to orders placed from now on. Orders already placed keep the
rate they were placed with.

## Subscription

Subscription plans let you charge sellers for selling on the marketplace and
limit what each plan includes.

| Setting | What it does |
|---|---|
| **Subscription Plans** | Turns subscription plans on for the channel. |
| **Subscription Terms and Conditions** | The terms sellers must accept before they buy a plan. It appears once **Subscription Plans** is on, is required, and is saved for each language. |

### Turn on subscription plans

1. Go to **Configure >> Marketplace >> General**.
2. In the **Subscription** section, switch **Subscription Plans** on. The
   **Subscription Terms and Conditions** field appears.
3. Enter the terms your sellers agree to.
4. Click **Save Configuration**.

### What changes when plans are on

- **Marketplace >> Subscription Plans** appears in the admin panel, and **Plans**
  appears in the Seller Panel.
- A seller needs an active plan. Until they have one, they can only open their
  profile and the plans page. Their products are hidden from the storefront, their
  shop page can't be opened, and they are left out of the featured sellers.
- What sellers and their team can do is limited to the permissions of their plan.
- Reminder emails go out before a plan ends, ended plans are marked expired, and
  seller account health is refreshed every day. These run on the store's
  scheduler, so ask whoever manages your server to make sure it is running.

See [Plans & Subscriptions](../subscriptions/seller-subscription-management.md)
to create plans.

## Module Information

Shows the version of the marketplace module installed on your store, such as
**Application Version:- v2.5.0.0**. There is nothing to change here.
