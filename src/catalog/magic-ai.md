# Magic AI for Sellers

**Magic AI** lets a seller describe a product in a sentence or two and have the marketplace write the listing for them — descriptions, attribute values and suggested categories — instead of filling every field by hand. The admin decides whether it is available at all, which model writes the content, how much each seller may generate, and how far the AI is allowed to reach into a listing.

This page covers the whole feature: what a new marketplace starts with, then every setting in the admin panel in the order the panel presents it, how those settings depend on one another, and what a seller actually sees.

::: info What you'll learn
- The settings a freshly installed marketplace starts with
- Every Magic AI setting in the admin panel, explained one by one
- How the settings depend on each other
- What a seller experiences, and what stops them
:::

## What Magic AI does

When Magic AI is available, a **Generate content** button appears in the header of the seller's product edit form. The seller writes a short description of the product, optionally attaches reference photos, and the AI proposes values for the listing's fields — plus a set of categories. The seller reviews every proposal and chooses what to apply.

Two things are worth understanding before any of the settings make sense:

- **Magic AI writes text, it does not create images.** Photos a seller attaches are only *read* by the AI to inform what it writes.
- **Applying a result only fills the form.** Nothing reaches the catalog until the seller saves the product, and the listing still goes through the normal [approval flow](/catalog/product-management#drafts-submission-and-approval).

## Default settings

A newly installed marketplace ships Magic AI **switched off**, with sensible-but-cautious values behind the switch. Nothing generates until you deliberately turn it on and connect an AI provider.

| Setting | Default on a new marketplace | Meaning of that default |
|---|---|---|
| **Enabled** (Magic AI, application-wide) | Off | Magic AI is inert everywhere |
| **Provider API keys** | Empty | No AI provider is connected |
| **Enable** (Product Content Generation) | Off | Sellers cannot generate, even if the above is on |
| **Model** | Not set | Falls back to the default text model |
| **Allow Reference Images** | On | Sellers may attach photos — once generation itself is enabled |
| **Vision Model** | Not set | Falls back to **Model** |
| **Maximum Reference Images** | 3 | At most three photos per generation |
| **Let Sellers Choose Fields** | Off | Every eligible field is generated; the seller cannot narrow it |
| **Overwrite Filled Attributes** | Off | Only empty fields are proposed |
| **Per Seller Limit** | Blank | Unlimited generations |
| **Limit Period** | Monthly | Usage is counted per calendar month |
| **Select Attributes** | Off | Every attribute the seller can edit is eligible |
| **Suggest Categories** | On | The AI proposes categories |
| **Magic AI Enabled** (per seller) | On | Every seller inherits access |
| **Magic AI Generation Limit** (per seller) | Blank | The seller follows the marketplace-wide limit |

### Why the defaults are shaped this way

**Off by default, everywhere.** Generation costs money at the AI provider and puts words on your storefront. Two separate switches must be turned on before any seller can spend a single generation, so the feature can never start running because somebody enabled something adjacent.

**Cautious about overwriting.** **Overwrite Filled Attributes** starts *off*, so a seller who has already written a careful description will not have it replaced by a machine. The AI fills the gaps and leaves the rest alone. A seller who runs a generation on an already-complete listing is told **Nothing left to fill** rather than having their work quietly rewritten.

**Generous about reach.** **Select Attributes** starts *off* and **Suggest Categories** starts *on*, so the first generation a seller runs is as useful as possible. You can narrow the reach later once you have seen what the AI proposes on your catalog.

**Unlimited but measured.** There is no generation cap out of the box, but the counting window is already set to **Monthly**, so the moment you type a number into **Per Seller Limit** it behaves sensibly without any further setup.

## Magic AI → General

Go to **Configure → Magic AI → General**. This screen holds a single switch, and it is the one every other Magic AI setting hangs from.

Nothing here is marketplace-specific — it governs Magic AI everywhere in Bagisto, including the admin's own AI tools and the storefront features. Turning it on does not hand anything to sellers by itself; it only makes the rest of the chain possible.

<ImagePopup src="/images/magic-ai/magic-ai-general.png" alt="Magic AI General settings with the application-wide Enabled toggle" />

### Enabled

The application-wide switch for Magic AI — every Magic AI feature in Bagisto, not just the marketplace ones.

- **When off** — nothing generates anywhere. Sellers do not see a **Generate content** button; if one is somehow reached, the marketplace answers *Content generation is currently turned off for this store.*
- **When on** — Magic AI becomes *available* to be configured. It does **not** by itself give sellers anything; the marketplace switch in Part 2.3 is still required.

**Affects:** admin, sellers, and storefront AI features alike. This is the top of the chain.

## Magic AI → Providers

Go to **Configure → Magic AI → Providers**. This is where the marketplace is given an AI account to work with.

Bagisto does not ship its own AI. Every generation is a call to an outside provider using credentials you supply, and that provider bills you for it — so until this screen is filled in, nothing can generate.

<ImagePopup src="/images/magic-ai/magic-ai-providers.png" alt="Magic AI provider list with an API Key field for each provider" />

Each supported provider — **OpenAI**, **Anthropic**, **Gemini**, **Groq**, **xAI**, **DeepSeek**, **Mistral** and **Ollama** — has its own **API Key** field. **Ollama** additionally has a **URL**, because it runs on a server you host yourself rather than a vendor's; it is pre-filled with the address Ollama uses on the machine it is installed on.

You do not have to fill in all of them; you need credentials for whichever provider owns the model you intend to use.

**Why it exists:** the marketplace does not have its own AI. It calls out to a provider using your account, and the provider bills you. Because the key is held centrally, **sellers never see or supply credentials** — they simply get a working button.

**When it is empty:** the **Generate content** button may still appear, but a generation cannot complete. The seller sees *Couldn't generate content just now* and — importantly — **is not charged a generation** for the failure.

::: warning A key is a prerequisite, not a setting you can skip
Turning on every switch below without connecting a provider produces a button that always fails. Configure the provider first, then enable the feature.
:::

## Magic AI → Marketplace Features

Go to **Configure → Magic AI → Marketplace Features**. This tile is the marketplace's own, and it holds three sections: **Product Content Generation**, **Limits** and **Scope**.

### Product Content Generation

This is the section that decides whether your sellers get the feature at all, which model writes for them, and how much freedom they have over the result.

Its seven settings fall into three groups: the switch itself, the two model choices and the image rules that go with them, and two settings that shape how much of a listing the AI is allowed to touch.

<ImagePopup src="/images/magic-ai/product-content-generation.png" alt="Product Content Generation settings — Enable, Model, Allow Reference Images, Vision Model, Maximum Reference Images, Let Sellers Choose Fields and Overwrite Filled Attributes" />

#### Enable

The marketplace's own master switch for seller content generation.

- **When off** — no seller can generate product content, **regardless of their individual setting**. A seller whose own Magic AI is switched on is still blocked.
- **When on** — combined with the application-wide **Enabled** above, sellers become eligible.

**Affects:** sellers only. Nothing on the storefront changes directly, though the listings sellers publish are of course what shoppers eventually read.

##### What switching it on actually changes

The admin screen itself barely changes — the toggle moves and the other settings stay visible either way. The difference shows up on the seller's product form.

**Before.** With generation off, the product edit header carries only **Back** and **Save Product**. There is no route into the feature at all; a seller has no way of knowing it exists.

<ImagePopup src="/images/magic-ai/seller-form-without-magic-ai.png" alt="Seller product form header with only Back and Save Product, before Magic AI is enabled" />

**After.** With both master switches on, a **Generate content** button appears in the same header, between **Back** and **Save Product**.

<ImagePopup src="/images/magic-ai/seller-form-with-magic-ai.png" alt="Seller product form header showing the Generate content button after Magic AI is enabled" />

The button appearing is not the same as generation working — it appears on the strength of the switches and the seller's own permission, while a missing provider key only reveals itself when the seller presses it.

#### Model

The model used for **text-only** generation — that is, when the seller attaches no reference photos.

The dropdown lists every text model the platform knows about, each labelled with its provider, for example **OpenAI: GPT-5.2** or **Anthropic: Claude Sonnet 4.6**. Pick one whose provider you entered a key for.

**If you leave it blank**, generation falls back to the platform's default text model. That is a working fallback, not a recommendation — set this deliberately so you know which model your marketplace is paying for.

**Practical example:** a marketplace selling technical parts may prefer a larger, more accurate model here; a marketplace with thousands of simple fashion listings may prefer a smaller, cheaper one, since the descriptions are short and formulaic.

#### Allow Reference Images

Whether sellers may attach product photos for the AI to read.

- **When on** — the seller's dialog offers **Add images**, and the AI sees the photos alongside the written description. This produces markedly better colour, material and style values, because the AI is describing something it can see rather than guessing from a sentence.
- **When off** — the image area disappears from the seller's dialog entirely, and the seller may attach nothing.

**Requires a vision-capable model.** A model that cannot read images will not become able to just because this is switched on.

#### Vision Model

The model used **when a seller attaches reference images**. It may be the same as **Model**.

This setting only appears while **Allow Reference Images** is on. **If you leave it blank, it falls back to Model** — so a marketplace that has chosen one model capable of both text and vision can simply set **Model** and ignore this field.

**Why it is separate:** vision-capable models are often more expensive. Splitting the two lets you run cheap text generations by default and only pay the higher rate when a seller actually attaches photos.

#### Maximum Reference Images

How many photos a seller may attach to a single generation. **Defaults to 3.** Only appears while **Allow Reference Images** is on.

The number is enforced when the seller submits, and the seller's dialog shows their progress against it — *2 of 3 added · JPG, PNG or WebP up to 2 MB*. Each individual file must be a **JPG, PNG or WebP of no more than 2 MB**; a larger file is skipped with *That file was skipped — images must be under 2 MB.*

**Setting it to 0** allows no images at all, which is the same practical outcome as switching **Allow Reference Images** off.

**Why it exists:** every attached image increases what the provider charges for the call. Three is a balance between giving the AI enough to look at and keeping a single generation cheap.

#### Let Sellers Choose Fields

Whether a seller may narrow a generation to a subset of fields.

- **When on** — the seller's dialog shows a **Fields to fill** list with **Select all** and **Clear all**, and the seller ticks exactly which fields the AI should propose.
- **When off** — every eligible field is generated and the seller cannot narrow the set.

**Practical example:** a seller who is happy with their description but wants the AI to fill in material, colour and care instructions can, with this on, ask for only those three — a faster, cheaper, more predictable result. With it off, they must accept a proposal for everything and simply decline what they do not want.

#### Overwrite Filled Attributes

Whether fields that already have a value are eligible for generation.

- **When on** — the AI proposes values for **every** eligible field, filled or not. In the review step, a proposal that replaces something is marked **replaces**, with the previous value struck through, so nothing is lost silently.
- **When off** — **only attributes that are still empty are proposed.** Fields a seller has already written are never touched.

**How this feels to a seller:** with it off, a seller who runs a generation on a complete listing is told **Nothing left to fill** — *Every eligible field already has a value. Clear a field first, or ask the store admin to allow overwriting.* That message is the direct consequence of this setting, and it is the most common Magic AI support question on a marketplace that leaves it off.

### Limits

Every generation costs you money at the provider, so this section caps how freely sellers can spend it.

The two settings only mean anything together: one is the number of generations, the other is the window that number is counted in. Leave the number blank and the window becomes irrelevant, because there is nothing to count against.

<ImagePopup src="/images/magic-ai/marketplace-features-limits.png" alt="Limits section with Per Seller Limit and Limit Period" />

#### Per Seller Limit

The maximum number of generations **each** seller may run within the period below. It is a per-seller allowance, not a shared marketplace pool — a limit of 50 across 20 sellers means each of them gets 50.

- **Leave it blank for unlimited.**
- **Set it to 0** to allow no generations at all — the feature stays visible but every attempt is refused.
- **Individual sellers can override it** — see [Per-seller controls](#per-seller-controls) below.

#### Limit Period

The window the per-seller limit is counted over: **Daily** or **Monthly**.

- **Daily** — the count resets at the start of each day, so a limit of 5 means five generations every day.
- **Monthly** — the count resets at the start of each calendar month.

The two settings are only meaningful together: **Per Seller Limit** is the number, **Limit Period** is the window it is counted in. Changing the period does not erase past usage; it changes which past generations still count towards the current window.

**Only successful generations count.** If the AI provider fails to respond, the seller is told *this didn't use up one of your generations*, and it does not. Regenerating a single field in the review step, however, **does** use one generation — the seller's dialog says so.

### Scope

Scope answers a different question from the settings above: not *whether* the AI may write, but *how far into a listing it may reach*.

By default it reaches everywhere the seller can edit. These three settings let you pull it back to a named set of attributes, and decide whether it is trusted to place products into your category tree.

<ImagePopup src="/images/magic-ai/marketplace-features-scope.png" alt="Scope section with Select Attributes switched on, revealing the required Allowed Attributes list, plus Suggest Categories" />

#### Select Attributes

Whether you want to restrict which attributes the AI may fill.

- **When off** — every attribute the seller can edit on that product is eligible.
- **When on** — only the attributes you pick in **Allowed Attributes** are eligible, and that field becomes **required**.

#### Allowed Attributes

The list of attributes the AI may propose values for. Only appears — and is only required — while **Select Attributes** is on.

**Why you might narrow it:** the AI is good at prose and descriptive attributes and less reliable on values with commercial consequences. Restricting it to description, meta fields, colour and material keeps it away from anything a mistake would be expensive on.

**Some fields are never generated, whatever you choose here.** Image, file, barcode and yes/no fields are excluded by their nature, and **SKU**, **URL Key**, **Product Number**, **Barcode Value**, **Tax Category** and **RMA Rule** are always excluded because they are identifiers or commercial settings rather than descriptive content.

#### Suggest Categories

Whether the AI also proposes categories for the product.

- **When on** — the AI picks from **all** categories on your marketplace and the proposals appear under **Categories** in the review step, where the seller can accept or ignore them. A proposed category the AI invented that does not match your tree is skipped with a note.
- **When off** — categories are skipped entirely and the seller assigns them by hand.

**Affects:** sellers directly, and the storefront indirectly — categories decide where a product is found, so this setting quietly influences catalog navigation.

## How the settings depend on each other

Magic AI is a chain: a seller can only generate when every link holds. In order:

1. **Configure → Magic AI → General → Enabled** must be on.
2. **Configure → Magic AI → Marketplace Features → Product Content Generation → Enable** must be on.
3. A **provider API key** must be set for the provider that owns the chosen model.
4. The individual seller's **Magic AI Enabled** must not be switched off.
5. The seller must have generations **remaining** in the current period.
6. The seller's role must grant **Generate Content With Magic AI**.

Break any one and the seller is refused, with a message naming the reason:

| What is missing | What the seller is told |
|---|---|
| Either master switch is off | *Content generation is currently turned off for this store.* |
| The seller's own switch is off | *Content generation is not enabled for your shop. Please contact the store administrator.* |
| The quota is spent | *You have used all your content generations for this period.* |
| The provider did not respond | *Couldn't generate content just now* — and no generation is consumed |

### Settings that reveal or require other settings

- **Allow Reference Images** reveals **Vision Model** and **Maximum Reference Images**. Switch it off and both disappear, because neither has any meaning without it.
- **Select Attributes** reveals **Allowed Attributes**, and makes it **required** — turning the restriction on without naming any attribute is not a valid configuration.
- **Per Seller Limit** and **Limit Period** are only meaningful together; a blank limit makes the period irrelevant.

### Settings that fall back rather than fail

- **Vision Model** falls back to **Model** when blank.
- **Model** falls back to the platform's default text model when blank.
- **Magic AI Generation Limit** on a seller falls back to **Per Seller Limit** when blank.
- **Magic AI Enabled** on a seller is treated as *allowed* unless the admin has explicitly switched it off.

## Per-seller controls

Everything so far applies to the whole marketplace. Two seller attributes let you depart from it for one seller — to withhold the feature from someone producing poor listings, or to give a high-volume partner a bigger allowance.

Find them on **Marketplace → Sellers**, editing a seller, in the **Settings** group on the right-hand side of the form, below the commission and product-type controls.

<ImagePopup src="/images/magic-ai/seller-magic-ai-controls.png" alt="Magic AI Enabled and Magic AI Generation Limit on the admin seller edit form" />

**Magic AI Enabled:** whether this seller may use Magic AI. Sellers are allowed by default, so this is a switch you use to take access *away* — from a seller producing poor listings, or one you have not yet decided to trust with it. It cannot grant access while either master switch is off.

**Magic AI Generation Limit:** this seller's own allowance, counted over the marketplace-wide **Limit Period**. **Leave it blank and the seller follows Per Seller Limit.** Enter a number and it wins for that seller — higher for a high-volume partner, lower for a seller who has been wasteful.

**Practical example:** with **Per Seller Limit** at 50 monthly, a large partner given a limit of 500 gets 500 per month, a seller given 0 gets none, and everyone left blank gets 50.

### What the seller sees

A seller does not have to guess where they stand. **Manage Profile** carries a read-only **Shop Information** panel that reports their Magic AI position back to them.

This is the screen to point a seller at when they ask why generation has stopped working — it shows their allowance and how much of it is gone, without them needing to contact you.

<ImagePopup src="/images/magic-ai/seller-shop-information.png" alt="Shop Information panel showing Magic AI enabled, generation limit, usage in the current period and the limit period" />

It states whether Magic AI is enabled for their shop and, when it is, their **Generation Limit**, how much they have **Used In Current Period**, and the **Limit Period** those figures are counted over. An unlimited seller sees **Unlimited**. See [Manage Profile](/sellers/seller-profile).

::: info Roles can withhold it separately
Even on a seller account with Magic AI enabled, a team member only gets the button if their role grants **Generate Content With Magic AI**. A seller can therefore let their own staff write listings by hand while keeping generation to themselves. See [Seller Users & Roles](/sellers/seller-user-role-management).
:::

## Using Magic AI as a seller

With everything configured, the seller opens a product and selects **Generate content** in the form header. A two-step dialog opens: **Describe**, then **Review**.

**Step 1: Describe.** The seller writes a short description of the product — this is the prompt. It must be between **10 and 2,000 characters**, and a counter tracks it. Where the admin allows it they attach **reference images**, and tick **which fields to fill** from a row of chips; eligible fields come pre-selected, and the dialog notes that *fields you have already filled are excluded* when overwriting is off. A meter along the bottom shows generations used against the limit before a single one is spent.

<ImagePopup src="/images/magic-ai/dialog-describe.png" alt="Describe step with a written prompt, the character counter, reference image slots, the fields-to-fill chips and the generations-used meter" />

**Step 2: Generating.** The AI writes the content — usually five to fifteen seconds.

**Step 3: Review.** Each proposal is a card marked **new** or **replaces**, with any previous value struck through, and suggested **Categories** appear alongside. Anything the AI could not use is skipped with the reason — no matching option, a value that did not fit the field, or one that failed the field's own validation rule. A running meter shows generations used against the limit, and **Regenerate this field** re-runs a single field at the cost of one generation.

<ImagePopup src="/images/magic-ai/generated.png" alt="Magic AI review step — proposed fields marked new or replaces, with previous values struck through" />

**Step 4: Apply.** Applying **only fills the form**. If the seller opted in, their uploaded reference photos are reused as the product's images. Nothing is stored until the product is saved, and the listing then follows the normal [approval flow](/catalog/product-management#drafts-submission-and-approval).

<ImagePopup src="/images/magic-ai/applied.png" alt="Magic AI confirmation — fields updated on the product form, pending save" />

**Step 5: Save the product.** The dialog closes and the seller is back on the product form with the generated values sitting in the fields — still unsaved. Nothing has reached the catalog yet, and navigating away now would discard the lot.

Which save actions appear depends on the state of the listing. A **draft** offers two: **Save as Draft** keeps it private and unfinished, while **Submit** sends it into the approval flow. A listing that is already live simply offers **Save Product**.

<ImagePopup src="/images/magic-ai/save-draft-or-submit.png" alt="Draft product header offering Generate content, Save as Draft and Submit" />

**Step 6: Approval.** Once saved, the listing takes its place in **Catalog → Products** with its current state shown against it — **Draft** while the seller is still working on it, **Waiting For Approval** once submitted, and **Approved** when the admin has passed it.

Generated content is treated no differently from hand-written content here. It is reviewed by the admin like any other listing, and only reaches the storefront on approval — see [Product Management](/catalog/product-management#drafts-submission-and-approval).

<ImagePopup src="/images/magic-ai/products-after-save.png" alt="Seller products list showing listings marked Approved, Draft and Waiting For Approval" />

::: warning The generation is spent before you save
Quota is counted when the AI answers, not when the seller applies or saves. A seller who generates, dislikes the result and closes the dialog has still used one of their generations. This is deliberate — the provider has already been paid for that call — but it surprises sellers, so it is worth saying out loud when you introduce the feature.
:::

::: tip Write a specific, factual prompt
Materials, size, intended use, audience. The dialog's own hint says it best — *the more specific you are, the better the result* — and a good prompt is the cheapest way to reduce the editing a seller does afterwards.
:::
