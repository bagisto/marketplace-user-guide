# Seller Management

Seller Management is where the marketplace admin oversees the whole seller lifecycle — from a seller signing up, through review and approval, to editing, suspending, and stepping into a seller's own panel to help them. Sellers, in turn, get a dedicated **Seller Panel** to run their store.

::: info What you'll learn
- How a seller registers a store and signs in
- How the admin reviews, approves, edits, and suspends sellers from the **Sellers** list
- How to add a seller manually and read their account health and flags
- How to log in as a seller, and what the Seller Panel dashboard shows
:::

## How a seller joins

### Registering a store

A prospective seller opens the seller registration page at `/seller/register`, enters their name, email, and a password, and submits the form to create a store account.

<ImagePopup src="/images/seller-management/seller-registration.png" alt="Seller registration page" />

Whether the new account can start selling immediately or has to wait depends on the **Approval Required** setting under **Configure → Marketplace → Sellers**. When approval is required, the account is created in a *pending* state until the admin approves it.

### Signing in

Once registered, the seller signs in from the seller login page at `/seller/login` to reach their Seller Panel.

<ImagePopup src="/images/seller-management/seller-login.png" alt="Seller login page" />

## Managing sellers from the admin

Everything the admin needs to manage sellers lives under **Marketplace → Sellers** in the admin panel.

### The Sellers list

The **Sellers** grid lists every seller with their identity, account health, and status at a glance.

<ImagePopup src="/images/seller-management/admin-sellers-grid.png" alt="Admin sellers list" />

Each row shows:

- **Seller Name** — the owner's name, with the store email and store URL slug beneath it.
- **Account Health** — the composite health score (for example *100/100 — Healthy*), cancellation rate, rating, and flag count. A new seller shows *Not calculated* until their first refresh.
- **Status** — **Approved** or **Disapproved**, with the date the seller joined.

The row actions on the right let the admin (in order) view the store, **log in as the seller**, refresh account health, **edit** the seller, and delete it.

### Adding a seller manually

Besides self-registration, the admin can create a seller directly. Selecting **Add Sellers** at the top right of the Sellers list opens a **Create Seller** dialog.

<ImagePopup src="/images/seller-management/admin-add-seller.png" alt="Create seller dialog" />

Enter the seller's **Name**, **Email** and **Phone**, a store **Slug** (the store's URL segment), and a **Password** with confirmation, then select **Save**. The seller is created and can sign in immediately with those credentials.

### Approving, editing, and suspending a seller

Use the **edit** (pencil) action on any row to open the seller's admin form, where the admin can update the seller's details, approve or disapprove the account, and suspend or restore it.

<ImagePopup src="/images/seller-management/admin-seller-edit.png" alt="Edit seller form" />

::: tip
Suspending a seller keeps the account but hides the store and blocks the seller from signing in — use it for temporary action rather than deleting a seller and losing their history.
:::

### Account health and flags

The **Account Health** column summarises how well a seller is performing — a score derived from cancellation rate, ratings, and the number of open flags. Selecting **Flags** opens that seller's reported issues. Health is recalculated daily and can be refreshed on demand from the row action.

::: info
Account-health thresholds and the flag reasons available to customers are configured under **Configure → Marketplace → Moderation**. See [Seller & Product Flagging](/seller-product-flagging) for the flagging workflow.
:::

### Logging in as a seller

To help a seller directly, use the **log-in-as-seller** row action. The admin is taken into that seller's own panel in a new session — useful for troubleshooting a store without asking the seller for their password.

## The Seller Panel dashboard

After signing in, the seller lands on their **Dashboard**, a real-time overview of how the store is performing.

<ImagePopup src="/images/seller-management/seller-dashboard.png" alt="Seller Panel dashboard" />

The dashboard surfaces the profile-completion score, account health, total sales and revenue trends, and **Things to do** tiles that deep-link straight to the orders and stock that need attention.

## Setting up the store profile

The seller completes their store identity on the **Manage Profile** page (reached from the account menu, or the dashboard's *Complete Your Profile* link). It covers the store name, logo and banner, contact details, address, policies, social links, and SEO fields.

<ImagePopup src="/images/seller-management/seller-profile.png" alt="Manage Profile page in the Seller Panel" />

A complete profile builds customer trust and controls how the storefront presents the store. For the custom profile fields the admin can require, see [Seller Attributes](/seller-attributes).
