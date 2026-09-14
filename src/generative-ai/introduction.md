# Generative AI (Magic AI)

<div class="feature-hero feature--ai">
  <span class="feature-hero__eyebrow">Built into the Marketplace</span>
  <p class="feature-hero__lead">Sellers describe a product in a few words, add a photo if they like, and Generative AI drafts the listing for them: the name, descriptions, specifications, prices, SEO fields and categories. It is branded <strong>Magic AI</strong> in the admin panel, runs on the AI provider you choose, and nothing is saved until the seller reviews the suggestions and saves the product.</p>
  <div class="feature-hero__actions">
    <a class="feature-hero__btn feature-hero__btn--primary" href="/configuration/generative-ai.html">Set up Generative AI</a>
    <a class="feature-hero__btn feature-hero__btn--ghost" href="/generative-ai/generate-product-content.html">See how sellers use it</a>
  </div>
  <ul class="feature-hero__chips" aria-label="Supported AI providers">
    <li>OpenAI</li>
    <li>Anthropic</li>
    <li>Gemini</li>
    <li>Groq</li>
    <li>xAI</li>
    <li>DeepSeek</li>
    <li>Mistral</li>
    <li>Ollama</li>
  </ul>
</div>

## What you can do

<div class="feature-cards feature--ai">
  <a class="feature-card" href="/generative-ai/generate-product-content.html">
    <span class="feature-card__icon feature-card__icon--text" aria-hidden="true"></span>
    <span class="feature-card__title">Generate product content</span>
    <span class="feature-card__desc">Turn a short description into a filled-in product form, field by field, ready for the seller to check.</span>
    <span class="feature-card__tag">Seller Panel</span>
  </a>
  <a class="feature-card" href="/generative-ai/generate-product-content.html#add-reference-photos">
    <span class="feature-card__icon feature-card__icon--camera" aria-hidden="true"></span>
    <span class="feature-card__title">Write from product photos</span>
    <span class="feature-card__desc">Attach photos of the product so the model can describe what it sees, and reuse them as product images.</span>
    <span class="feature-card__tag">Seller Panel</span>
  </a>
  <a class="feature-card" href="/generative-ai/generate-product-content.html#review-and-apply-the-suggestions">
    <span class="feature-card__icon feature-card__icon--list" aria-hidden="true"></span>
    <span class="feature-card__title">Suggest categories</span>
    <span class="feature-card__desc">Get category suggestions alongside the content, and keep only the ones that fit.</span>
    <span class="feature-card__tag">Seller Panel</span>
  </a>
  <a class="feature-card" href="/generative-ai/usage-limits.html">
    <span class="feature-card__icon feature-card__icon--gauge" aria-hidden="true"></span>
    <span class="feature-card__title">Control usage per seller</span>
    <span class="feature-card__desc">Set how many generations each seller gets per day or month, and turn the feature off for any seller.</span>
    <span class="feature-card__tag">Admin panel</span>
  </a>
  <a class="feature-card" href="/configuration/generative-ai.html">
    <span class="feature-card__icon feature-card__icon--settings" aria-hidden="true"></span>
    <span class="feature-card__title">Configuration</span>
    <span class="feature-card__desc">Switch Generative AI on, connect a provider, choose the models and decide what sellers may generate.</span>
    <span class="feature-card__tag">Configure &gt;&gt; Magic AI</span>
  </a>
</div>

## How it works

<ol class="feature-steps feature--ai">
  <li><span class="feature-steps__title">You set it up</span>Connect an AI provider, switch Generative AI on for sellers, and choose the model, the limits and the fields it may fill.</li>
  <li><span class="feature-steps__title">The seller describes the product</span>On their product's edit page, the seller clicks <strong>Generate content</strong>, writes what they sell and can attach photos.</li>
  <li><span class="feature-steps__title">The seller decides</span>Each suggestion is shown next to the current value. The seller keeps the ones they want, applies them to the form and saves the product.</li>
</ol>

## Who uses it

- **Admins** set it up under **Configure >> Magic AI** and control it per seller on
  the seller's record. See [Generative AI Configuration](../configuration/generative-ai.md)
  and [Usage Limits](usage-limits.md).
- **Sellers** use it on the edit page of the products they own, in the Seller
  Panel. Team members need the **Generate Content With Magic AI** permission in
  their role.
- **Customers** don't see it. They see the product once the seller has saved it
  and, if required, you have approved it.

## What it does not do

Generative AI fills in the product form when the seller asks for it, and stops
there:

- It doesn't save, submit or publish a product, and it doesn't change stock or
  approval.
- It doesn't create images. Photos the seller attaches can be added to the product
  as they are.
- It isn't available when a seller sells an existing catalog product or uses bulk
  upload.
- It doesn't act on its own. Each suggestion comes from one request the seller
  starts.

AI models can be wrong. Sellers should check prices, sizes and other facts before
they apply and save the suggestions.

## Generative AI in the rest of your store

Bagisto's own Generative AI features, such as writing content and images in the
admin panel and image search on the storefront, are store features that sellers
don't get. They are described in the
[Bagisto User Guide](https://docs.bagisto.com/generative-ai/introduction).
