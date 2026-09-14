# Product Barcode

<div class="page-roles"><span class="role role--seller">Seller</span></div>

Every product can have a barcode for scanning when you pick, pack or count stock. You
set the value, and the barcode image is created for you. You can also create and print
barcodes for many products at once.

## Add a barcode to a product

1. Go to **Catalog >> Products**.
2. Click the edit arrow on the product.
3. Open the **Barcode** step.
4. Enter the **Barcode Value**, such as the product code or GTIN you already use.
5. Click **Save Product**, or **Submit** for a draft.

<ImagePopup src="/images/product-barcode/barcode-tab.png" alt="The Barcode step with a generated barcode" />

The **Barcode** image is created when you save and updated whenever the value changes.
Click **Download Barcode** for a PDF of it. No two products can have the same barcode
value.

The barcode uses **Code 128** unless you create it with another format from the
products list.

## Create barcodes for many products

1. Go to **Catalog >> Products**.
2. Tick the products.
3. Click **Select Action**, point to **Generate Barcode** and choose **Code 128**,
   **EAN-13** or **UPC-A**.

The message tells you how many barcodes were created and how many were skipped.

- A product without a barcode value gets a 12-digit value made from its catalog
  product ID, which isn't always the ID shown in the products list.
- For **EAN-13** and **UPC-A**, a value that isn't a valid code of that kind is
  adjusted to one and saved.

## Print barcodes

1. Go to **Catalog >> Products**.
2. Tick the products.
3. Click **Select Action >> Print Barcodes**.

<ImagePopup src="/images/product-barcode/products-list.png" alt="Generated barcodes in the products list with the Select Action menu" />

You get one PDF listing each product's **ID**, **Name** and **Barcode**, ready to print
on labels. Products without a barcode value are left out.

## Barcodes in the products list

The **Barcode** column shows each product's barcode and its value, or
**Not Generated**. Use **Filter** to find a product by **Barcode Value**.

## Good to know

- A barcode on a catalog product you sell as your own is saved on the catalog product
  itself, so other sellers of that product see it too.
- Team members need **Product Barcode** in their role, with **Generate** to create
  barcodes, and **Print** to print them or use **Download Barcode**.
