# Generative AI Configuration (Magic AI)

<div class="feature-meta feature--ai"><span class="feature-meta__primary">Generative AI</span><span>Admin</span><span>Configure &gt;&gt; Magic AI</span></div>

This page sets up Generative AI for sellers: switching it on, connecting an AI
provider, and choosing what sellers may generate and how often. What sellers do
with it is described in [Generate Product Content](../generative-ai/generate-product-content.md).

The settings are in the **Magic AI** group of the Configure page. Magic AI is the
name the admin panel uses for Bagisto's Generative AI.

## Before you start

You need an account with an AI provider and its API key, or your own Ollama
server. Three switches must all be on before a seller sees the
**Generate content** button:

1. **Enabled** on **Configure >> Magic AI >> General**.
2. **Enable** on **Configure >> Magic AI >> Marketplace Features**.
3. **Magic AI Enabled** on the seller's own record, which is on unless you turn
   it off. See [Usage Limits](../generative-ai/usage-limits.md).

## Switch on Generative AI

1. Go to **Configure >> Magic AI >> General**.
2. In **Settings**, switch **Enabled** on.
3. Click **Save Configuration**.

<ImagePopup src="/images/configuration/magic-ai-general.png" alt="Magic AI General settings with the Enabled switch" />

## Connect a provider

1. Go to **Configure >> Magic AI >> Providers**.
2. Enter the **API Key** for each provider you use. For Ollama, enter the
   **Base URL** of your server (it starts as `http://localhost:11434`), and an
   **API Key** only if your server needs one.
3. Click **Save Configuration**.

<ImagePopup src="/images/configuration/magic-ai-providers.png" alt="Magic AI Providers settings" />

The key of the provider that owns the chosen model is used when a seller
generates content.

## Set up content generation for sellers

1. Go to **Configure >> Magic AI >> Marketplace Features**.
2. In **Product Content Generation**, switch **Enable** on.
3. Choose the **Model**.
4. Set the options below.
5. Click **Save Configuration**.

<ImagePopup src="/images/configuration/magic-ai-product-content.png" alt="Product Content Generation section of the Marketplace Features settings" />

| Setting | What it does |
|---|---|
| **Enable** | The master switch. When off, no seller can generate content, whatever their own setting. |
| **Model** | The model used when the seller writes a description only. |
| **Allow Reference Images** | Lets sellers attach product photos for the AI to look at. It is on until you change it. |
| **Vision Model** | The model used when photos are attached. Choose one that can read images. It appears when **Allow Reference Images** is on. If you leave it empty, the **Model** above is used for photos too. |
| **Maximum Reference Images** | How many photos a seller can attach to one request. It appears when **Allow Reference Images** is on. Leave it empty to allow 3. |
| **Let Sellers Choose Fields** | Lets sellers tick which fields to fill. When off, every field that can be generated is filled. |
| **Overwrite Filled Attributes** | Lets the AI suggest new values for fields that already have one. When off, only empty fields are suggested. |

## Limit how often and what sellers generate

<ImagePopup src="/images/configuration/magic-ai-limits-scope.png" alt="Limits and Scope sections of the Marketplace Features settings" />

| Section | Setting | What it does |
|---|---|---|
| Limits | **Per Seller Limit** | How many generations each seller can use in the period below. Leave it empty for no limit. You can set a different limit for one seller. |
| Limits | **Limit Period** | Whether the limit resets every day (**Daily**) or every month (**Monthly**). |
| Scope | **Select Attributes** | Limits generation to the attributes you choose in **Allowed Attributes**, which appears when this is on and needs at least one attribute. When off, every field the seller can edit may be filled. |
| Scope | **Suggest Categories** | Lets the AI suggest categories for the product. |

All of these settings apply to every channel.

Images, files, Yes/No switches, SKU, URL key, product number, tax category, RMA
rule and barcode value are never generated, whatever you choose here.

## Next steps

- [Usage Limits](../generative-ai/usage-limits.md) — turn Generative AI off or
  set a different limit for one seller, and see how generations are counted.
- [Generate Product Content](../generative-ai/generate-product-content.md) — how
  sellers use it.
