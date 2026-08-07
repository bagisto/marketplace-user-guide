# Bulk Upload

Bulk Upload lets a seller add many products at once from a spreadsheet, instead of creating them one by one. Uploads are validated before anything is created, run in the background, and report exactly what happened — so a large catalog can be listed in a single pass.

::: info What you'll learn
- The two kinds of bulk upload
- How the upload wizard is structured, step by step
- How an import is validated, run, and reported
:::

## The two kinds of upload

From the Seller Panel, open **Catalog → Bulk Upload**. The **Imports** screen offers two ways to add products in bulk:

<ImagePopup src="/images/bulk-upload/imports.png" alt="Bulk Upload imports screen" />

- **List Your Own Products** — bulk-create brand-new products in your catalog from a spreadsheet (with images).
- **Sell Catalog Products** — bulk-list products already in the marketplace catalog as your own, at your own price and stock (the bulk version of [Selling Existing Products](/catalog/selling-existing-products)).

Below the cards, **Past Uploads** lists every import with its **type**, **state** (pending / validated / processing / completed), uploaded file, completion time, and a **summary** of created / updated / deleted counts (with an error-file link where relevant).

## Creating an import — the wizard

Choosing a kind opens a short wizard.

<ImagePopup src="/images/bulk-upload/create-source.png" alt="Bulk upload wizard — Source step" />

1. **Source** — confirm the **Type**, download a **sample file** in your format (**CSV / XLS / XLSX / XML**) so your columns line up, and upload your **file**.
2. **Images** *(List Your Own Products only)* — supply images either as **URLs in the sheet** (recommended) or by uploading a **ZIP** of image files (a sample ZIP is provided).
3. **Settings** — choose the **Action** (**Create/Update** or **Delete**), the **Validation Strategy** (**Stop on Errors** or **Skip Errors**), the number of **Allowed Errors**, the **Field Separator** (for CSV), and whether to **Process in Background**.

Finish with **Start Import**, which validates the file and begins.

## Validating and running

Each upload becomes a record you can reopen at any time. A typical import moves through clear phases (shown as a stepper):

- **Validate** — the file is checked before anything is created. You get a verdict — valid, partially valid (bad rows will be skipped, up to your allowed-errors limit), or invalid — with counts of rows processed, invalid rows, and total errors. When there are errors, **Download Full Report** lists exactly what to fix.
- **Download Images** *(own products)* — images referenced in the sheet are fetched up front.
- **Create / Assign / Delete** → **Connect** → **Finalize** — valid rows are imported in the background, related products are linked, and prices and stock are finalized, with live progress.

When it finishes, you get a **"Your import was successful"** summary with **Created / Updated / Deleted** counts, and can download a full processing **report** (records processed, time taken, and so on).

## After the upload

Imported products behave like any other seller product: they appear in **Catalog → Products** and go through the normal [approval flow](/catalog/product-management#drafts-submission-and-approval) before reaching the storefront. Adjust stock and pricing afterwards from [Manage Inventory](/inventory/manage-inventory) and [Manage Pricing](/pricing/manage-pricing).

::: tip Always start from the sample
Download the sample file for your import type and build your sheet from it — matching the expected columns exactly is the quickest way to pass validation on the first try.
:::
