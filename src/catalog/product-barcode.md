# Product Barcode

Every seller product can carry a scannable **barcode**. The barcode image is generated automatically from a value you set — you never upload it — and can be generated and printed in bulk for stock, picking, and fulfilment.

::: info What you'll learn
- How a product's barcode is set and generated
- Which barcode symbologies are supported
- How to generate, print, and download barcodes
:::

## Setting a barcode on a product

Open a product from **Catalog → Products** and go to the **Barcode** tab on the edit form.

<ImagePopup src="/images/product-barcode/barcode-tab.png" alt="Barcode tab on the product edit form" />

- **Barcode Value** — the value encoded in the barcode. Set it to whatever the barcode should represent (a product code, GTIN, and so on). If you leave it empty, the product's **SKU** is used.
- **Barcode** — the generated image. It is **read-only and created automatically every time you save the product**, and refreshes whenever the value (or SKU) changes. Once generated, a **Download Barcode** link gives you a single-product PDF.

Save the product and the barcode image is generated from the value.

::: info Supported symbologies
Barcodes are generated as **Code 128**, **EAN-13**, or **UPC-A**. A default symbology applies automatically; EAN-13 / UPC-A values are adjusted to a valid GTIN where needed. QR codes are not used here.
:::

## Barcodes on the products list

The products list shows a **Barcode** column with each product's state (for example, blank until a barcode has been generated), and a **Barcode Value** column you can search and filter.

<ImagePopup src="/images/product-barcode/products-list.png" alt="Barcode column on the seller products list" />

Select one or more products with the checkboxes and use the bulk actions:

- **Generate Barcode** — generate barcodes for the selected products; you choose the symbology (**Code 128 / EAN-13 / UPC-A**). Products without a value get one derived automatically. The result reports how many were generated and how many were skipped.
- **Print Barcodes** — download a single PDF of the selected products' barcodes — a table of **ID**, **Name**, and the **barcode image + value** — ready to print onto labels.

::: tip
Leave **Barcode Value** empty to fall back to the SKU — that keeps the barcode aligned with the code you already use to identify the product.
:::
