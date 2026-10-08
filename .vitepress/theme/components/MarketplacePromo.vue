<template>
  <div class="mp-promo">
    <section class="mp-card mp-brand mp-spin-border" aria-label="Multi-Vendor Marketplace extension">
      <div class="mp-head">
        <span class="mp-tile">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9.5 4.6 4.2A1.5 1.5 0 0 1 6 3h12a1.5 1.5 0 0 1 1.4 1.2L21 9.5" />
            <path d="M3 9.5a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
            <path d="M5 12.3V21h14v-8.7M10 21v-5h4v5" />
          </svg>
        </span>

        <span class="mp-badge">
          <svg class="mp-sparkle" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 1.5l2.2 6.3 6.3 2.2-6.3 2.2L12 18.5l-2.2-6.3L3.5 10l6.3-2.2z" />
            <path d="M19 15l1 2.5 2.5 1-2.5 1L19 22l-1-2.5-2.5-1 2.5-1z" />
          </svg>

          <span class="mp-ink">Generative AI</span>
        </span>
      </div>

      <p class="mp-title">
        Turn your store into a <span class="mp-ink">multi-vendor marketplace</span>
      </p>

      <p class="mp-text">
        Sellers describe a product, and AI drafts the listing for them to review.
      </p>

      <ul class="mp-list">
        <li v-for="highlight in HIGHLIGHTS" :key="highlight">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>

          {{ highlight }}
        </li>
      </ul>

      <a
        :href="PRODUCT_URL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Explore the Multi-Vendor Marketplace extension (opens in a new tab)"
        class="mp-cta"
      >
        Explore Marketplace

        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </a>

      <a
        :href="DEMO_URL"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Try the Multi-Vendor Marketplace live demo (opens in a new tab)"
        class="mp-demo"
      >
        Try the live demo

        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      </a>
    </section>
  </div>
</template>

<script setup>
const PRODUCT_URL = 'https://bagisto.com/en/laravel-multi-vendor-marketplace/'
const DEMO_URL = 'https://demo.bagisto.com/marketplace/'

const HIGHLIGHTS = [
  'Writes descriptions & SEO meta',
  'Suggests attributes & categories',
  'Reads product photos you attach'
]
</script>

<style scoped>
/* The brand tokens, rotating border, .mp-ink and .mp-tile live in ../mp-brand.css. */

/* Sits in the aside's bottom slot: at the foot of the aside under a short
   outline, and after a long one, where the aside scrolls to reach it. */
.mp-promo {
  padding-top: 24px;
}

.mp-card {
  --mp-surface:
    radial-gradient(120% 70% at 100% 0%, var(--mp-glow-1), transparent 65%) padding-box,
    radial-gradient(100% 60% at 0% 100%, var(--mp-glow-2), transparent 65%) padding-box;

  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 14px 28px -18px rgba(79, 70, 229, 0.55);
}

:global(.dark .mp-card) {
  box-shadow: 0 14px 32px -18px rgba(124, 58, 237, 0.75);
}

/* Header: storefront tile and AI badge */
.mp-head {
  display: flex;
  align-items: center;
  gap: 10px;
}

.mp-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px 4px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  line-height: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: var(--mp-tint);
  box-shadow: inset 0 0 0 1px var(--mp-tint);
}

.mp-sparkle {
  flex: none;
  width: 13px;
  height: 13px;
  color: var(--mp-accent);
  animation: mp-twinkle 2.4s ease-in-out infinite;
}

@keyframes mp-twinkle {
  0%,
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }

  50% {
    transform: scale(0.82) rotate(18deg);
    opacity: 0.7;
  }
}

/* Copy */
.mp-title {
  margin: 14px 0 6px;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.01em;
  color: var(--vp-c-text-1);
}

.mp-text {
  margin: 0 0 12px;
  font-size: 12.5px;
  line-height: 18px;
  color: var(--vp-c-text-2);
}

.mp-list {
  display: grid;
  gap: 7px;
  margin: 0 0 16px;
  padding: 0;
  list-style: none;
}

.mp-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12.5px;
  font-weight: 500;
  line-height: 18px;
  color: var(--vp-c-text-1);
  text-wrap: balance;
}

.mp-list svg {
  flex: none;
  width: 16px;
  height: 16px;
  margin-top: 1px;
  padding: 3px;
  border-radius: 999px;
  color: var(--mp-accent);
  background: var(--mp-tint);
}

/* Actions */
.mp-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 36px;
  border-radius: 10px;
  font-size: 13.5px;
  font-weight: 600;
  color: #ffffff;
  text-decoration: none;
  background: linear-gradient(100deg, #6d28d9 0%, #1d4ed8 50%, #0369a1 100%);
  background-size: 180% 100%;
  background-position: 0% 50%;
  box-shadow: 0 8px 18px -10px rgba(29, 78, 216, 0.9);
  transition: background-position 0.4s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.mp-cta:hover {
  background-position: 100% 50%;
  transform: translateY(-1px);
  box-shadow: 0 10px 22px -10px rgba(109, 40, 217, 0.95);
}

.mp-cta svg {
  width: 15px;
  height: 15px;
  transition: transform 0.2s ease;
}

.mp-cta:hover svg {
  transform: translateX(2px);
}

.mp-demo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 9px;
  font-size: 12.5px;
  font-weight: 500;
  line-height: 18px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.2s ease;
}

.mp-demo:hover {
  color: var(--vp-c-brand-1);
}

.mp-demo svg {
  width: 13px;
  height: 13px;
}

.mp-cta:focus-visible,
.mp-demo:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .mp-sparkle {
    animation: none;
  }

  .mp-cta,
  .mp-cta svg,
  .mp-demo {
    transition: none;
  }

  .mp-cta:hover,
  .mp-cta:hover svg {
    transform: none;
  }
}
</style>
