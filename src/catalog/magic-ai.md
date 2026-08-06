# Magic AI for Sellers

**Magic AI** lets sellers generate product content — such as descriptions — with AI, straight from the product form, instead of writing everything by hand. The admin controls who can use it and how much.

::: info What you'll learn
- What Magic AI generates for sellers
- How the admin enables it and sets limits
- Where a seller uses it
:::

## What it does

When Magic AI is enabled for a seller, a **Generate with Magic AI** action appears beside supported content fields on the product form (for example, the **Description**). The seller gives a short prompt, Magic AI drafts the content, and the seller edits it before saving. Fields filled this way are marked as AI-generated.

## Enabling Magic AI (admin)

Magic AI is off by default. The admin turns it on in two places:

1. **Globally** under **Configure → Magic AI**, where the AI provider credentials are also set.
2. **Per seller**, on the seller's admin edit form — where the admin also sets that seller's **daily** and **lifetime** generation limits and the **scope** of what they may generate.

Each seller's usage is recorded, and old generation records are pruned automatically every month.

::: warning
Magic AI needs a valid AI provider (an API key) configured under **Configure → Magic AI**. Without working credentials, generation won't run — even if it's enabled for the seller.
:::

::: tip
Magic AI drafts content — it doesn't publish it. The seller always reviews and edits the text, and a new or edited product still goes through the normal [approval flow](/sellers/seller-management).
:::
