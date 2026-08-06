# Product Barcode

Every seller product can carry a scannable **barcode**. The barcode image is generated automatically from a value you set — sellers don't upload it — and can be printed or downloaded for stock and fulfilment.

::: info What you'll learn
- How a product's barcode is set and generated
- How to generate and print barcodes in bulk from the products list
- Where to download a single product's barcode
:::

## Setting a barcode on a product

Open a product from **Catalog → Products** and go to the **Barcode** tab on the edit form.

<ImagePopup src="/images/product-barcode/barcode-tab.png" alt="Barcode tab on the product edit form" />

- **Barcode Value** — the value encoded in the barcode. Set this to whatever you want the barcode to represent (for example a product code). If left empty, the product's **SKU** is used.
- **Barcode** — the generated image. It is **read-only and created automatically every time you save the product**, and refreshes whenever the barcode value (or SKU) changes.

Save the product, and the barcode image is generated.

::: info
There's no separate "Barcode Type" to pick — the barcode is generated automatically from the value you provide each time you save.
:::

## Barcodes on the products list

The products list shows a **Barcode** column with each product's state — for example **Not Generated** until a barcode has been created.

<ImagePopup src="/images/product-barcode/products-list.png" alt="Barcode column on the seller products list" />

Select one or more products with the checkboxes and use the bulk actions to:

- **Generate** barcodes for the selected products.
- **Print** the selected products' barcodes together — handy for a batch of new stock.

## Downloading a single barcode

From a product's edit form you can **download** its barcode once it's generated, ready to print onto labels or packaging.

::: tip
Leave **Barcode Value** empty to fall back to the SKU — that keeps the barcode aligned with the code you already use to identify the product.
:::
