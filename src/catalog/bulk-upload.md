# Bulk Upload

<div class="page-roles"><span class="role role--seller">Seller</span></div>

Bulk upload adds many products at once from a spreadsheet. You can create your own
new products, or sell products that are already in the store's catalog. The file is
checked before anything is imported, and you get a report when it's done.

Go to **Catalog >> Bulk Upload**.

<ImagePopup src="/images/bulk-upload/imports.png" alt="The Bulk Upload page with its two options and past uploads" />

## Choose what to upload

- **List Your Own Products** — create new products in your catalog.
- **Sell Catalog Products** — sell products that are already in the store's catalog,
  at your own price and stock.

You see an option only when the store allows it and your role includes
**Bulk Upload >> Imports >> Create**. Your profile must be complete.

**Past Uploads** lists your earlier uploads with their type, state, file, completion
time and a summary of what was created, updated or deleted. Use the row icons to
**Process**, **Edit**, **Download Report** (a short summary of the run) or **Delete**
an upload, and download the **Error File** when some rows failed.

## Upload a file

1. Go to **Catalog >> Bulk Upload**.
2. Click **List Your Own Products** or **Sell Catalog Products**.
3. In **Source**, under **Download Sample**, download the sample file in CSV, XLS,
   XLSX or XML.
4. Fill in your products using the sample's columns, then upload it in **File**.
5. Click **Next**.
6. For your own products, choose in **Images** how the images reach the store, then
   click **Next**.
7. In **Settings**, check the options below.
8. Click **Start Import**, then confirm.

<ImagePopup src="/images/bulk-upload/create-source.png" alt="The Source step of the bulk upload wizard" />

### Images

- **Image URLs in the sheet** — add public links to the images, separated by commas,
  in the `images` column. The store downloads them for you. This is the recommended
  option.
- **Upload a ZIP of images** — put the image file names in the `images` column and
  upload one ZIP file that contains them. The store sets the largest ZIP you can
  upload, 10 MB unless it has changed it.

Products you sell from the catalog use the catalog's images, so this step doesn't
appear for them.

### Settings

| Setting | What it does |
|---|---|
| **Action** | **Create/Update** adds new products and updates existing ones. **Delete** removes the products in the file. For catalog products, it removes only your offers. |
| **Validation Strategy** | **Stop on Errors** blocks the import when the file has more errors than **Allowed Errors**. Up to that number, the bad rows are skipped and the rest are imported. **Skip Errors** skips every bad row and imports the rest. |
| **Allowed Errors** | Used only with **Stop on Errors**: the most errors the file can have and still be imported. Starts at 10. |
| **Field Separator** | The character between columns in a CSV file, usually a comma. |
| **Process in Background** | Keeps the import running after you leave the page. It appears when the store can run imports in the background. |

## Check and run the import

The **Import** page opens and checks your file straight away. When the check finishes,
it shows the **Total Rows Processed**, **Total Invalid Rows** and **Total Errors**.

- **Every row is valid** — the import starts on its own.
- **Some rows have errors, and your settings allow them to be skipped** — the page
  lists the errors and says the remaining rows can still be imported. Click
  **Start Import** to import them.
- **The file is invalid** — fix the errors and upload the file again.

Click **Download Full Report** to download every error with its row.

The page shows each stage as it runs, with the progress and the number of batches
completed. For your own products, the images are downloaded, the products are
created, related products are linked and prices and stock are finalized. For catalog
products, the offers are added to your shop.

When it finishes, you'll see **Congratulations! Your import was successful.** with
how many products were created, updated or deleted. Click **Back** to see them in
**Catalog >> Products**.

<ImagePopup src="/images/bulk-upload/import-complete.png" alt="A completed import with its summary" />

New imported products follow the store's approval rules like any other product. To
change a product that is already approved, edit it in the product form rather than
importing it again. See [Product Approval](product-approval.md).

## What goes in the file

### Your own products

Start from the sample file. It has a column for each product detail, including
`sku`, `type`, `attribute_family_code`, `categories`, `images`, `name`,
`description`, `price`, `weight`, `status`, `inventories` and, for products with
variations, `configurable_variants`.

- A SKU another seller already uses can't be imported.
- Each product type must be one you are allowed to sell.
- Downloadable products can't be imported. Create them one at a time in the product
  form.
- Each image link can be up to 10 MB.

### Catalog products

The sheet has five columns:

| Column | What to enter |
|---|---|
| `sku` | The catalog product's SKU. Required. |
| `price` | Your price. Leave it empty to use the catalog price. |
| `qty` | How many you have in stock. It goes into your first active inventory source. |
| `condition` | `new` or `old`. Leave it empty for `new`. |
| `description` | A description of your offer. Optional. |

A row fails when no catalog product has the SKU, when you already sell it, when the
SKU appears twice in the file, when the store doesn't allow sellers to sell catalog
products, when you aren't allowed to sell that product type, or when `price`, `qty` or
`condition` has an invalid value.

## Change or rerun an upload

Click the edit icon on an upload in **Past Uploads**, replace the file or change the
settings, then click **Reimport** and confirm. The file is checked again from the
start.

If the store uses subscription plans, products over your plan's limit aren't
imported.
