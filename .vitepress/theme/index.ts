import DefaultTheme from 'vitepress/theme';
import { useRoute } from 'vitepress';
import { h, nextTick, onMounted, watch } from 'vue';
import './custom.css';
import ImagePopup from './components/ImagePopup.vue';
import MarketplacePromo from './components/MarketplacePromo.vue';

/**
 * Center the active sidebar entry within the sidebar's own scroll area, so a
 * deep page (e.g. Reporting) isn't left off-screen when the page loads.
 */
function scrollSidebarToActive() {
    nextTick(() => {
        requestAnimationFrame(() => {
            const sidebar = document.querySelector<HTMLElement>('.VPSidebar');

            if (!sidebar) return;

            const active =
                sidebar.querySelector<HTMLElement>('a.active') ??
                [...sidebar.querySelectorAll<HTMLElement>('.VPSidebarItem.is-active')].pop();

            if (!active) return;

            const sidebarRect = sidebar.getBoundingClientRect();
            const activeRect = active.getBoundingClientRect();
            const delta =
                activeRect.top - sidebarRect.top - (sidebar.clientHeight - activeRect.height) / 2;

            if (Math.abs(delta) < 4) return;

            sidebar.scrollBy({ top: delta, behavior: 'instant' as ScrollBehavior });
        });
    });
}

export default {
    extends: DefaultTheme,

    // The Multi-Vendor Marketplace promotion sits under the page outline, as on
    // the other Bagisto docs sites.
    Layout: () =>
        h(DefaultTheme.Layout, null, {
            'aside-outline-after': () => h(MarketplacePromo),
        }),

    enhanceApp({ app }) {
        app.component('ImagePopup', ImagePopup);
    },

    setup() {
        const route = useRoute();

        onMounted(scrollSidebarToActive);

        watch(() => route.path, scrollSidebarToActive);
    },
};
