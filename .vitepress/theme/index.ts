import DefaultTheme from 'vitepress/theme';
import './custom.css';
import ImagePopup from './components/ImagePopup.vue';

export default {
    extends: DefaultTheme,

    enhanceApp({ app }) {
        app.component('ImagePopup', ImagePopup);
    }
}
