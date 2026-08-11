/**
 * Squarespace Commerce — ECS product catalog (store prices).
 * Supplier: Everything Created Special (ECS) — quote dated 13 July 2026.
 *
 * Store and checkout live on www.courageincommon.org (separate from main site domain).
 */
(function () {
  const STORE_BASE = 'https://www.courageincommon.org';

  const STORE = {
    shopUrl: `${STORE_BASE}/shop`,

    /** ECS store prices — used on merchandise.html and Squarespace admin setup */
    catalog: [
      {
        id: 'sublimated-mug',
        name: 'Sublimated Mug 15 oz',
        storePrice: 20.0,
        slug: 'sublimated-mug-15oz',
        url: `${STORE_BASE}/shop/p/sublimated-mug-15oz`,
        image: 'images/merch-coffee-cup.jpg',
        description: '15 oz sublimated mug with Courage In Common design.',
        variants: null,
      },
      {
        id: 'sublimated-tumbler',
        name: 'Sublimated Tumbler 30 oz',
        storePrice: 30.0,
        slug: 'sublimated-tumbler-30oz',
        url: `${STORE_BASE}/shop/p/sublimated-tumbler-30oz`,
        image: 'images/merch-travel-mug.jpg',
        description: '30 oz sublimated travel tumbler.',
        variants: null,
      },
      {
        id: 'short-sleeve-tee',
        name: 'Short Sleeve T-Shirt (Adult/Youth)',
        storePrice: 28.0,
        slug: 'short-sleeve-t-shirt',
        url: `${STORE_BASE}/shop/p/short-sleeve-t-shirt`,
        image: 'images/merch-tshirt.jpg',
        description: 'Left front design only. Multi-color design. American made.',
        variants: 'Sizes XS–XL (standard store price). Sizes over XL: additional cost — contact us or see product page.',
      },
      {
        id: 'long-sleeve-tee',
        name: 'Long Sleeve T-Shirt (Adult)',
        storePrice: 32.0,
        slug: 'long-sleeve-t-shirt',
        url: `${STORE_BASE}/shop/p/long-sleeve-t-shirt`,
        image: 'images/merch-long-sleeve-placeholder.jpg',
        description: 'Left front design only. Multi-color design. American made.',
        variants: 'Sizes XS–XL (standard store price). Sizes over XL: additional cost.',
      },
      {
        id: 'crewneck-sweatshirt',
        name: 'Crew Neck Sweatshirt (Adult)',
        storePrice: 52.0,
        slug: 'crew-neck-sweatshirt',
        url: `${STORE_BASE}/shop/p/crew-neck-sweatshirt`,
        image: 'images/merch-sweater.jpg',
        description: 'Left front design only. Multi-color design. American made.',
        variants: 'Sizes XS–XL (standard store price). Sizes over XL: additional cost.',
      },
      {
        id: 'hooded-sweatshirt',
        name: 'Hooded Sweatshirt',
        storePrice: 60.0,
        slug: 'hooded-sweatshirt',
        url: `${STORE_BASE}/shop/p/hooded-sweatshirt`,
        image: 'images/hooded-sweatshirt.jpg',
        description: 'Left front design only. Multi-color design. American made.',
        variants: 'Sizes XS–XL (standard store price). Sizes over XL: additional cost.',
      },
    ],

    pricingNotes: [
      'Prices are subject to change per supplier quote.',
      'Sizes over XL require an additional cost (configure as variant price modifiers in Squarespace).',
      'Store prices from ECS quote dated 13 July 2026.',
    ],

    supplier: {
      name: 'Everything Created Special (ECS)',
      contact: 'Richard and Jessica Leest',
      business: 'ECS Printing and Crafts',
      phone: '631-807-5707',
      address: '1 Southaven Drive, Brookhaven, NY 11719',
    },
  };

  STORE.products = Object.fromEntries(
    STORE.catalog.map((p) => [p.id, p.url])
  );

  function formatPrice(amount) {
    return `$${amount.toFixed(2)}`;
  }

  function applyStoreLinks() {
    document.querySelectorAll('[data-store-product]').forEach((el) => {
      const key = el.dataset.storeProduct;
      const product = STORE.catalog.find((p) => p.id === key);
      const url = product ? product.url : STORE.products[key];
      if (url) {
        el.href = url;
      } else {
        el.href = STORE.shopUrl;
        el.setAttribute('title', 'Update js/squarespace-store.js with your Squarespace product URL');
      }
    });

    document.querySelectorAll('[data-store-shop]').forEach((el) => {
      el.href = STORE.shopUrl;
    });
  }

  window.CICStore = STORE;
  window.CICStore.formatPrice = formatPrice;

  document.addEventListener('DOMContentLoaded', applyStoreLinks);
})();
