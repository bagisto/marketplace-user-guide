<script setup lang="ts">
const STORE_URL = 'https://store.webkul.com/laravel-multi-vendor-marketplace.html';
</script>

<template>
  <div class="buy-now">
    <span class="buy-now__pill">
      <span class="buy-now__ring mp-brand mp-spin-border" aria-hidden="true" />

      <a
        class="buy-now__link mp-brand"
        :href="STORE_URL"
        target="_blank"
        rel="noopener"
        aria-label="Buy Now: Bagisto Multi-Vendor Marketplace (opens in a new tab)"
      >
        <span class="mp-tile mp-tile--small buy-now__tile" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </span>

        <span class="buy-now__label mp-ink">Buy Now</span>
      </a>
    </span>
  </div>
</template>

<style scoped>
/* The brand border, tile and gradient text come from ../mp-brand.css; the
   border turns faster here than on the promo card so the button stands out.
   The rotating border is a layer behind the link rather than the link's own
   background: Chrome does not repaint an animated custom property on an
   element inside an href. */
.buy-now {
  display: flex;
  align-items: center;
  height: var(--vp-nav-height);
  margin-left: 12px;
  pointer-events: auto;
}

.buy-now__pill {
  position: relative;
  display: inline-flex;
  border-radius: 12px;
  transition: transform 0.15s ease;
}

.buy-now__ring {
  --mp-spin-duration: 3s;

  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 8px 18px -12px rgba(79, 70, 229, 0.7);
  transition: box-shadow 0.2s ease;
}

:global(.dark .buy-now__ring) {
  box-shadow: 0 8px 20px -12px rgba(124, 58, 237, 0.9);
}

.buy-now__link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 38px;
  padding: 0 15px 0 4px;
  border-radius: inherit;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
}

.buy-now__link:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
}

.buy-now__pill:hover {
  transform: translateY(-1px);
}

.buy-now__pill:hover .buy-now__ring {
  --mp-surface: linear-gradient(var(--mp-tint), var(--mp-tint)) padding-box;

  box-shadow: 0 10px 22px -10px rgba(109, 40, 217, 0.75);
}

.buy-now__pill:active {
  transform: translateY(0);
}

.buy-now__pill:active .buy-now__ring {
  box-shadow: 0 4px 10px -8px rgba(79, 70, 229, 0.7);
}

.buy-now__tile {
  width: 30px;
  height: 30px;
}

/* Phones: a tighter pill, then the cart tile alone under 360px. */
@media (max-width: 480px) {
  .buy-now {
    margin-left: 2px;
  }

  .buy-now__link {
    gap: 6px;
    height: 36px;
    padding-right: 11px;
    font-size: 13px;
  }

  .buy-now__tile {
    width: 28px;
    height: 28px;
    border-radius: 8px;
  }
}

@media (max-width: 359px) {
  .buy-now__link {
    padding: 0 4px;
  }

  .buy-now__label {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
}

@media (prefers-reduced-motion: reduce) {
  .buy-now__pill,
  .buy-now__ring {
    transition: none;
  }

  .buy-now__pill:hover {
    transform: none;
  }
}
</style>
