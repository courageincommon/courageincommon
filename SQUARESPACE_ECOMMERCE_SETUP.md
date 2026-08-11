# Squarespace E-Commerce Setup Guide

This project uses **Option 1: Squarespace Commerce checkout**. Your custom pages handle design and product showcase; Squarespace handles cart, checkout, payments, and orders.

---

## How the flow works

```
merchandise.html (custom design)  →  "Buy Now"  →  Squarespace product page
                                                          ↓
                                                    Add to cart (/cart)
                                                          ↓
                                                    Squarespace checkout
                                                          ↓
                                                    Payment (Stripe / PayPal / Squarespace Payments)
                                                          ↓
                                                    Order in Commerce → Orders
```

**Donations** stay on Zeffy (separate from merchandise).

---

## Part 1 — Squarespace plan & commerce

### Step 1: Confirm your plan

You need a plan with Commerce:

- **Business**, **Commerce Basic**, or **Commerce Advanced**

Personal plans cannot sell products online.

### Step 2: Enable Developer Mode (if using this codebase)

1. Log in to Squarespace
2. **Settings → Developer Tools → Developer Mode**
3. Turn **Developer Mode** ON
4. Connect GitHub or use the Git URL Squarespace provides
5. Push this repository’s template files to your Squarespace site

> **Note:** Disabling Developer Mode later can remove custom template code. Keep a backup of this repo.

---

## Part 2 — Connect payments

### Step 3: Set up a payment processor

1. Go to **Settings → Payments**
2. Connect one of:
  - **Squarespace Payments** (recommended, built-in)
  - **Stripe**
  - **PayPal**
  - **Square** (in-person + online)
3. Complete verification (bank account, business details)
4. Run a **test purchase** after products are live

Orders are only created **after payment succeeds** — this is handled automatically by Squarespace.

---

## Part 3 — Create your store & products (ECS catalog)

Products and **store prices** are from the **Everything Created Special (ECS)** quote dated **13 July 2026**. The same catalog lives in code at `js/squarespace-store.js`.

### ECS product catalog (store prices)


| #   | Product name                       | Store price | Squarespace slug          | Image file                                 |
| --- | ---------------------------------- | ----------- | ------------------------- | ------------------------------------------ |
| 1   | Sublimated Mug 15 oz               | **$20.00**  | `sublimated-mug-15oz`     | `images/merch-coffee-cup.jpg`              |
| 2   | Sublimated Tumbler 30 oz           | **$30.00**  | `sublimated-tumbler-30oz` | `images/merch-travel-mug.jpg`              |
| 3   | Short Sleeve T-Shirt (Adult/Youth) | **$28.00**  | `short-sleeve-t-shirt`    | `images/merch-tshirt.jpg`                  |
| 4   | Long Sleeve T-Shirt (Adult)        | **$32.00**  | `long-sleeve-t-shirt`     | `images/merch-long-sleeve-placeholder.jpg` |
| 5   | Crew Neck Sweatshirt (Adult)       | **$52.00**  | `crew-neck-sweatshirt`    | `images/merch-sweater.jpg`                 |
| 6   | Hooded Sweatshirt                  | **$60.00**  | `hooded-sweatshirt`       | `images/hooded-sweatshirt.jpg`                 |


**Not sold online:** Courage in Common Ribbon — phone order only (Major Fred Nielson, 516-660-0979).

### Pricing rules (from ECS quote)

- **Store prices above** are the customer-facing prices to enter in Squarespace.
- **Prices are subject to change** (per supplier).
- **Sizes over XL:** additional cost — create separate variants in Squarespace with higher prices (e.g. 2XL, 3XL), or note in product description to contact you for oversized pricing.
- Apparel specs: **left front design only**, **multi-color design**, **American made**.

### Supplier reference (fulfillment — not shown on site)

- **Everything Created Special (ECS)** — Garment Printing Professionals  
- Richard and Jessica Leest · ECS Printing and Crafts  
- 631-807-5707 · 1 Southaven Drive, Brookhaven, NY 11719

---

### Step 4: Add a Store Page

1. **Pages → + → Store**
2. Name it **Shop** (URL slug will be `/shop`)
3. Choose layout (grid recommended)

### Step 5: Create each product in Squarespace

Use the **ECS catalog table** above. For each row:

1. **Commerce → Inventory → Add product**
2. **Name** — exact name from table
3. **Price** — exact **store price** (e.g. `20.00` for mug)
4. **Description** — copy from below
5. **Image** — upload matching file from repo
6. **URL slug** — match table (or update `js/squarespace-store.js`)
7. **Variants** — see variant section below
8. **Save** and **publish**

#### Copy-paste descriptions for Squarespace

**Sublimated Mug 15 oz** — $20.00  

> 15 oz sublimated mug with Courage In Common design.

**Sublimated Tumbler 30 oz** — $30.00  

> 30 oz sublimated travel tumbler with Courage In Common design.

**Short Sleeve T-Shirt (Adult/Youth)** — $28.00  

> Left front design only. Multi-color design. American made. Standard store price for sizes up to XL. Sizes over XL require additional cost.

**Long Sleeve T-Shirt (Adult)** — $32.00  

> Left front design only. Multi-color design. American made. Standard store price for sizes up to XL. Sizes over XL require additional cost.

**Crew Neck Sweatshirt (Adult)** — $52.00  

> Left front design only. Multi-color design. American made. Standard store price for sizes up to XL. Sizes over XL require additional cost.

**Hooded Sweatshirt** — $60.00  

> Left front design only. Multi-color design. American made. Standard store price for sizes up to XL. Sizes over XL require additional cost.

#### Size variants (apparel products 3–6)

For each apparel product in Squarespace:

1. Add variants: **XS, S, M, L, XL** at the **store price** in the table
2. Add **2XL, 3XL** (and up if needed) at **store price + additional cost** — confirm upcharge with ECS before publishing
3. Optional: add variant **Youth** on Short Sleeve T-Shirt if ECS supports it at the same $28 store price

Mugs and tumblers have **no size variants**.

**Ribbon:** Do not add as a product — phone orders only (on `merchandise.html`).

### Step 6: Shipping

1. **Settings → Commerce → Shipping**
2. Add rates, e.g.:
  - Flat rate (e.g. $5.99 US)
  - Free shipping over $75 (optional)
3. Set **origin address** (Glen Cove / Brookhaven area as applicable)

### Step 7: Taxes

1. **Settings → Commerce → Taxes**
2. Enable tax collection for your state if required
3. Consult your accountant for nonprofit/tax-exempt rules if applicable

### Step 8: Checkout form (optional)

1. **Settings → Commerce → Checkout**
2. Add custom fields if needed, e.g.:
  - **Size notes** (short text)
  - **Special instructions**

---

## Part 4 — Connect this codebase to Squarespace

### Step 9: Update product URLs in code

The main site may live on **www.courageincommon.com**, but the Squarespace store and checkout run on **www.courageincommon.org**. All Buy Now links use full URLs on the `.org` domain.

Edit `js/squarespace-store.js` — the `STORE_BASE` constant and `catalog` array list every ECS product with store price, slug, and URL:

```javascript
const STORE_BASE = 'https://www.courageincommon.org';

// Example entry — full catalog is in the file
{
  id: 'sublimated-mug',
  name: 'Sublimated Mug 15 oz',
  storePrice: 20.0,
  slug: 'sublimated-mug-15oz',
  url: `${STORE_BASE}/shop/p/sublimated-mug-15oz`,
}
```

If your Squarespace slugs differ, update each product's `url` and `slug` field, then push via Git.

### Step 10: Deploy site pages

Map your HTML pages to Squarespace:


| File                      | Squarespace usage                                  |
| ------------------------- | -------------------------------------------------- |
| `index.html`              | Home page template or code block                   |
| `origin-story.html`       | Static page                                        |
| `merchandise.html`        | Static page (product showcase + Buy Now links)     |
| `faqs.html`               | Static page                                        |
| `cart.html`               | Redirects to `https://www.courageincommon.org/cart` (legacy URL support) |
| `checkout.html`           | Redirects to `https://www.courageincommon.org/cart`                      |
| `order-confirmation.html` | Info page (Squarespace shows its own confirmation) |


Upload `images/` assets to Squarespace or keep paths consistent in your template.

### Step 11: Navigation

Custom pages do **not** include a cart icon — cart and checkout happen on Squarespace after the customer clicks **Buy Now** on a product page.

Squarespace’s own site header (on store/product pages) provides the cart. Optional: add **Shop** to your main nav linking to `https://www.courageincommon.org/shop`.

---

## Part 5 — Test the full flow

### Step 12: Test checklist

- [ ] Each **Buy Now** on merchandise page opens the correct product
- [ ] **Add to cart** on product page works
- [ ] **/cart** shows items and totals
- [ ] **Checkout** collects shipping and payment
- [ ] **Test payment** completes (use test mode if available)
- [ ] Order appears in **Commerce → Orders**
- [ ] Customer receives **confirmation email**
- [ ] **Donate Now** (Zeffy) still works separately

### Step 13: Go live

1. Disable test mode on payment processor
2. Publish all pages and products
3. Place one real small test order
4. Fulfill from **Commerce → Orders**

---

## Managing orders (your “admin panel”)

Use **Commerce → Orders** in Squarespace:

- View customer, address, items, payment status
- Mark **Fulfilled** when shipped
- Send shipping notification emails
- Process **refunds**
- Export orders (CSV)

No separate admin panel or database is required.

---

## Donations vs merchandise


| Type            | System               | URL                             |
| --------------- | -------------------- | ------------------------------- |
| **Merchandise** | Squarespace Commerce | `https://www.courageincommon.org/shop`, product pages, `/cart` |
| **Donations**   | Zeffy                | Link on site (unchanged)        |


---

## Troubleshooting


| Issue                                 | Fix                                                           |
| ------------------------------------- | ------------------------------------------------------------- |
| Buy Now goes to wrong page            | Update slugs in `js/squarespace-store.js`                     |
| Cart is empty after add               | Ensure products are **visible** and **in stock**              |
| No payment option at checkout         | Finish **Settings → Payments** setup                          |
| Custom cart/checkout pages still used | Use `/cart` not `cart.html`; old pages redirect automatically |
| Developer Mode push fails             | Check Git connection in Developer Tools                       |


---

## Files changed for Squarespace (Option 1)


| Removed / replaced               | Replacement                                    |
| -------------------------------- | ---------------------------------------------- |
| `js/cart.js` (localStorage cart) | `js/squarespace-store.js` (product URL config) |
| `js/checkout.js`                 | Not used — Squarespace checkout                |
| Add to Cart buttons              | **Buy Now** → Squarespace product pages        |
| `cart.html` checkout flow        | Squarespace `/cart` + checkout                 |


---

## Support links

- [Squarespace Commerce getting started](https://support.squarespace.com/hc/en-us/articles/5237452094989)
- [Connecting payments](https://support.squarespace.com/hc/en-us/articles/45175821373325)
- [Developer Mode quick start](https://developers.squarespace.com/quick-start)
- [Sell physical products](https://support.squarespace.com/hc/en-us/articles/45175821373325)

