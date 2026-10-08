<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue';

const props = defineProps<{
  src: string;
  alt?: string;
}>();

const open = ref(false);
const closeButton = ref<HTMLButtonElement | null>(null);
let opener: HTMLElement | null = null;

function show(event: Event) {
  opener = event.currentTarget as HTMLElement;
  open.value = true;
}

function hide() {
  open.value = false;
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    hide();
  }
}

watch(open, async (isOpen) => {
  if (typeof document === 'undefined') return;

  document.documentElement.classList.toggle('image-popup-open', isOpen);

  if (isOpen) {
    window.addEventListener('keydown', onKeydown);
    await nextTick();
    closeButton.value?.focus();
  } else {
    window.removeEventListener('keydown', onKeydown);
    opener?.focus();
  }
});

onBeforeUnmount(() => {
  if (typeof document === 'undefined') return;

  window.removeEventListener('keydown', onKeydown);
  document.documentElement.classList.remove('image-popup-open');
});
</script>

<template>
  <span class="image-popup">
    <button
      type="button"
      class="image-popup__trigger"
      :aria-label="`Enlarge image: ${props.alt ?? ''}`"
      @click="show"
    >
      <img :src="props.src" :alt="props.alt" class="image-popup__thumb" loading="lazy" decoding="async" />
    </button>

    <Teleport to="body">
      <div
        v-if="open"
        class="image-popup__overlay"
        role="dialog"
        aria-modal="true"
        :aria-label="props.alt"
        @click.self="hide"
      >
        <button ref="closeButton" type="button" class="image-popup__close" aria-label="Close" @click="hide">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        <div class="image-popup__scroller" @click.self="hide">
          <img :src="props.src" :alt="props.alt" class="image-popup__full" />
        </div>
      </div>
    </Teleport>
  </span>
</template>

<style scoped>
.image-popup {
  display: block;
  margin: 16px 0;
}

.image-popup__trigger {
  display: block;
  max-width: 100%;
  padding: 0;
  border: 0;
  background: none;
  cursor: zoom-in;
}

.image-popup__trigger:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 3px;
  border-radius: 8px;
}

.image-popup__thumb {
  display: block;
  max-width: 100%;
  height: auto;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}

.image-popup__overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  padding: 60px 12px 12px;
  background: rgba(0, 0, 0, 0.85);
  animation: image-popup-fade 0.2s ease;
}

/* Scrolls a tall full-page capture instead of shrinking it to a sliver. */
.image-popup__scroller {
  display: flex;
  width: 100%;
  overflow: auto;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
}

.image-popup__full {
  display: block;
  max-width: 100%;
  height: auto;
  margin: auto;
  border-radius: 8px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  animation: image-popup-zoom 0.2s ease;
}

@media (min-width: 768px) {
  .image-popup__overlay {
    padding: 64px 48px 32px;
  }

  .image-popup__full {
    max-width: min(100%, 1500px);
  }
}

.image-popup__close {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  display: grid;
  width: 40px;
  height: 40px;
  place-items: center;
  border: 0;
  border-radius: 50%;
  background: #fff;
  color: #111;
  cursor: pointer;
}

.image-popup__close:hover {
  background: #e5e7eb;
}

.image-popup__close:focus-visible {
  outline: 2px solid #93c5fd;
  outline-offset: 2px;
}

@keyframes image-popup-fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes image-popup-zoom {
  from {
    transform: scale(0.96);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .image-popup__overlay,
  .image-popup__full {
    animation: none;
  }
}
</style>
