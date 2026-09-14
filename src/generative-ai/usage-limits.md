# Usage Limits

<div class="feature-meta feature--ai"><span class="feature-meta__primary">Generative AI</span><span>Admin</span><span>Seller</span></div>

Every request a seller makes to Generative AI (Magic AI) uses one generation. You
decide how many generations each seller gets, and you can switch the feature off
for any seller.

## How generations are counted

- Each click on **Generate** uses one generation, however many fields come back.
- Each **Regenerate this field** uses one generation.
- A request the AI service doesn't answer isn't counted.
- The count starts again at midnight each day with a **Daily** limit, or on the
  first of the month with a **Monthly** limit.

A seller can run one generation at a time.

## Set the limit for all sellers

The **Per Seller Limit** and **Limit Period** on
**Configure >> Magic AI >> Marketplace Features** apply to every seller. Leave the
limit empty for no limit. See
[Generative AI Configuration](../configuration/generative-ai.md#limit-how-often-and-what-sellers-generate).

## Change it for one seller

1. Go to **Marketplace >> Sellers**.
2. Click the edit icon on the seller's row.
3. In the **Settings** card, set:
   - **Magic AI Enabled** — switch it off to stop this seller from generating
     content.
   - **Magic AI Generation Limit** — this seller's own limit. Leave it empty to use
     the limit for all sellers, or enter 0 to block generation.
4. Click **Save Seller**.

<ImagePopup src="/images/generative-ai/seller-settings.png" alt="Magic AI Enabled and Magic AI Generation Limit on the Edit Seller page" />

Sellers can't change these fields themselves.

## What sellers see

Sellers find their usage on **My Profile**, in the **Magic AI** block of
**Shop Information**: whether Generative AI is on for their shop, their
**Generation Limit**, how many they have **Used In Current Period**, and the
**Limit Period**.

- The block appears only while Generative AI is switched on for sellers.
- When **Magic AI Enabled** is off for a seller, the block shows only
  **Magic AI is disabled for your shop by the administrator**.
- A seller with no limit sees **Generation Limit: Unlimited**.

<ImagePopup src="/images/generative-ai/profile-usage.png" alt="The Magic AI block in Shop Information on the seller's profile" />

When a limit is set, the **Generate content** dialog also shows a meter such as
**4 / 20 generations used**. Once the limit is reached, the dialog tells the seller
when it resets.

## Good to know

- There is no admin report of generations. Sellers see their own count on their
  profile.
- Usage records older than the previous month are removed automatically each
  month.
