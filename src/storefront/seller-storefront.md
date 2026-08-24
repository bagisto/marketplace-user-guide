# Seller Storefront

Every approved seller gets a public store page on your storefront, and every product page tells shoppers who is selling it. This is the marketplace as a customer experiences it — browsing a seller, comparing sellers on one product, and checking out with items from several at once.

::: info What you'll learn
- What a seller's store page shows
- How shoppers compare sellers on the same product
- What changes in the cart when several sellers are involved
:::

::: warning Store pages depend on "Show Publicly"
Seller store pages only appear when **Show Publicly** is enabled under **Configure → Marketplace → Sellers → Registration & Visibility**. With it off, sellers still sell, but they have no public page.
:::

## The seller's store page

A store page carries the seller's banner and logo from [Manage Profile](/sellers/seller-profile), their business name, address and star rating.

Three tabs run across it — **Products**, **Reviews** and **About**, the first two showing their counts — and a row of actions sits alongside: **Share**, **Contact**, and **Report Issue**.

<ImagePopup src="/images/seller-storefront/seller-store.png" alt="A seller's public store page with banner, product and review counts, and their catalog" />

### Products

The seller's catalog, with **Search for Products** across it and the browsing controls shoppers expect:

- **Sort By** — **Cheapest First**, **Expensive First**, **From A-Z**, **From Z-A**, **Newest First**, **Oldest First**.
- **Filters** — including a **Price Range**, with **Clear All** to reset them.
- **Show** — how many products per page.

A seller with nothing approved yet shows **No products available here**.

### Reviews

Shoppers rate the seller with a **Rating**, a **Title** and a **Comment** from **Write a Review**, and read existing feedback under **Customer Reviews** with **View All Reviews**.

Three rules apply, and each is explained on the spot when it stops someone:

- A shopper must be **signed in** to review.
- A shopper must have **ordered** from the seller.
- A shopper can review a given seller **once**.

Reviews stay hidden until the admin approves them — see [Rating Management](/moderation/rating-management).

### About

The seller's own words, taken straight from their profile: **About Us**, **Return Policy**, **Shipping Policy**, and **Privacy Policy**, with a **Download** option where the seller has attached a document.

## Contacting and reporting a seller

**Share**, **Contact** and **Report Issue** sit together beside the tabs.

- **Share** — a **Share On** panel with the usual networks.
- **Contact** — a short form (**Name**, **Email**, **Subject**, **Query**) that sends the shopper's message to the seller, confirming when the query has been submitted. It's rate-limited, so it can't be used to flood a seller.
- **Report Issue** — the shopper picks a **Reason** from the list the admin maintains, or chooses **Other Reason** and describes it. The same three rules as reviews apply: signed in, has ordered, once only. See [Seller & Product Flagging](/moderation/seller-product-flagging).

## On a product page

Every product page names its seller under **Sold By**, with a **Seller Information** panel that expands with **More Information** and collapses with **Hide**, and a **Top Selling** strip of that seller's other products.

Where more than one seller carries the same product, the page says so — *:count more seller selling same product* — and links to the offers view.

**Report Product** works exactly like Report Issue above, against the listing rather than the seller.

## Comparing offers

The offers view lists every seller carrying a product, each with their own price, condition and description, and its own **Add to Cart**; a downloadable product also shows that seller's **links** and **samples**. Where there are more sellers than fit, a **Load More** control fetches the next batch.

This is the customer-facing side of [Selling Existing Products](/catalog/selling-existing-products): each row is one seller's offer on the same catalog product.

## One cart, several sellers

A shopper can fill a single cart from several sellers and the admin, and check out once. Two things behave differently from a single-seller store:

- **Sold By** appears on each cart line, so the shopper can see which items come from where.
- **Seller Coupons** get their own box, separate from the store-wide coupon field. A shopper entering a seller's code in the wrong box is told to use the other one, and a code that matches nothing in the cart says so. See [Checkout Deals](/marketing/checkout-deals).

Where a seller has a **Minimum Order Amount**, the cart tells the shopper what that seller's minimum is until it's met.

::: info Sellers browsing their own storefront
A signed-in seller looking at the storefront gets a **Switch to manage store** link in the header, straight back to their [Dashboard](/sellers/seller-dashboard).
:::

::: tip
The store page is built almost entirely from things the seller controls — banner, description, policies, and approved reviews. A seller asking why their page looks empty is usually a seller who hasn't finished [Manage Profile](/sellers/seller-profile).
:::
