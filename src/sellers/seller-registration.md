# Seller Registration & Sign-in

Before a seller can do anything else they have to join the marketplace and get in. This page covers the three screens that surround the Seller Panel — becoming a seller, signing in, and recovering a password — and what the admin controls about each.

::: info What you'll learn
- How someone becomes a seller
- What happens between registering and being able to sell
- How signing in and password recovery work
:::

## Becoming a seller

A visitor starts from the **Become Seller** form. The quickest route is the button on the [marketplace landing page](/storefront/marketplace-landing-page), whose caption the admin sets.

The form asks for a **Password** and **Confirm Password**, and above them an **Additional Information** section built from the [seller attributes](/sellers/seller-attributes) the admin marked as visible on sign up. That's how you decide what a new seller must tell you — add an attribute and mark it visible on sign up, and it appears here for everyone who registers next.

<ImagePopup src="/images/seller-registration/become-seller.png" alt="Become Seller registration form with the Additional Information fields and password fields" />

Select **Register**. The account is created, and the seller is returned to the sign-in screen.

::: info Approval decides what happens next
Under **Configure → Marketplace → Sellers → Registration & Visibility**, **Approval Required** decides whether a new seller can sell straight away. With it on, the account is created unapproved and the seller is told their activation seeks admin approval until you approve them under **Marketplace → Sellers**. With it off, they can sign in and start listing immediately. See [Seller Management](/sellers/seller-management).
:::

## Signing in

The **Seller Login** screen takes an **Email** and **Password**, with a **Show Password** control if the seller wants to check what they typed. Alongside it are **Forgot Password?** and, for anyone who hasn't joined yet, **New seller? Create your account**.

<ImagePopup src="/images/seller-registration/seller-login.png" alt="Seller Login screen with email, password, Forgot Password and Create your account links" />

Three things can stop a sign-in, and each says which:

- **Wrong details** — the seller is asked to check their credentials and try again.
- **Not yet approved** — the seller is told their activation seeks admin approval.
- **Suspended** — the seller is told their account has been suspended and to contact the admin. Suspension is a toggle on the seller's admin edit form.

Once in, the seller lands on the [Dashboard](/sellers/seller-dashboard).

## Recovering a password

**Recover Password** takes the seller's email address and sends a reset link.

- If the address isn't registered, the screen says no user could be found with it.
- If a link has already gone out, the seller is told so rather than sent a second one — one reset request per hour.
- A reset link stays valid for **one hour**.

The link opens **Reset Password**, which shows the **Registered Email** and asks for a new **Password** and **Confirm Password**.

::: tip
Keep the sign-up form short. Every attribute you mark visible on sign up is one more thing standing between an interested seller and a created account — anything you can collect later belongs on [Manage Profile](/sellers/seller-profile) instead.
:::
