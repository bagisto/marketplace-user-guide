# Generate Product Content

<div class="feature-meta feature--ai"><span class="feature-meta__primary">Generative AI</span><span>Seller Panel</span><span>Catalog &gt;&gt; Products</span></div>

Generative AI (Magic AI) writes a product listing from a short description. The
seller checks each suggestion, applies the ones they want to the product form, and
saves the product as usual.

## Before you start

- The admin has switched Generative AI on for sellers. See
  [Generative AI Configuration](../configuration/generative-ai.md).
- The product is one you created yourself. The button isn't shown for products you
  sell from the catalog with **Sell as Yours**.
- If you are a team member, your role includes **Generate Content With Magic AI**.

Create the product first with **List Your Product**. The button is on the product's
edit page. See [Product Management](../catalog/product-management.md).

## Describe the product

1. Go to **Catalog >> Products**.
2. Click the edit arrow on the product.
3. Click **Generate content** at the top of the page.
4. In **Describe your product**, write what you sell, between 10 and 2,000
   characters. The more specific you are, the better the result.
5. Click **Generate**. Writing usually takes 5 to 15 seconds.

<ImagePopup src="/images/generative-ai/describe-product.png" alt="The Generate content dialog with a product description and the fields to fill" />

Content is written in your Seller Panel language, the **Locale** under
**Settings >> General**. Suggestions are applied to the language shown on the edit
page, so choose the same language in both places before you generate.

### Add reference photos

When the admin allows it, you can attach photos for the model to look at before you
click **Generate**:

- Under **Reference images**, click **Add images** and choose JPG, PNG or WebP files
  up to 2 MB each. The dialog shows how many you can add.
- Tick **Use these images as product images.** to add the photos to the product's
  images when you apply the suggestions.

### Choose the fields to fill

When the admin allows it, **Fields to fill** lists every field that can be
generated, all selected at first. Click a field to leave it out, or use
**Select all** and **Clear all**.

## Review and apply the suggestions

Each suggested value appears on its own card, marked **new** when the field was
empty or **replaces** when it had a value, with the current value struck through.

1. Untick any card you don't want. A **Categories** card appears when categories
   are suggested.
2. To get a different value for one field, click its **Regenerate this field**
   icon.
3. Click **Apply**. The button shows how many fields will be applied.
4. Click **Close**.

The dialog confirms how many fields were updated. Applied fields are outlined in
yellow until you change them. If the name changed, the **URL Key** is updated to
match.

A suggestion that doesn't fit the field, such as a colour your store doesn't have,
is listed as skipped with the reason.

## Save the product

Applying only fills in the form. Nothing is stored until you save:

- **Save as Draft** or **Submit** for a draft product.
- **Save Product** for a product you have already submitted.

Using Generative AI doesn't change the product's approval. See
[Product Approval](../catalog/product-approval.md).

## What can be generated

| Generated | Never generated |
|---|---|
| Name, short description and description | Images and files |
| Meta title, meta keywords and meta description | Yes/No switches, such as Status or Featured |
| Price, cost, special price and its dates | SKU, URL key and product number |
| Length, width, height and weight | Tax category, RMA rule and barcode value |
| Options such as colour, size and brand | |
| Categories | |

The admin can narrow this list further. Depending on the settings, fields you have
already filled may be left out too.

## When the button can't generate

| Message | What it means |
|---|---|
| **You have used all … generations for this period** | Your limit is used up. The dialog says when it resets. Ask the store admin if you need more. |
| **Generation unavailable** | Generative AI is switched off for the store or for your shop. |
| **Nothing left to fill** | Every field that can be generated already has a value. Clear a field, or ask the admin to allow overwriting. |
| **Couldn't generate content just now** | The AI service didn't respond. Click **Try again**. The failed attempt doesn't count towards your limit. |

Each **Generate** and each **Regenerate this field** uses one generation. See
[Usage Limits](usage-limits.md).
