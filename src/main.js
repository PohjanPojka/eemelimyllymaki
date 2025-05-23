import './assets/main.css'

import { createApp } from 'vue'
import { createI18n, useI18n } from 'vue-i18n'

import App from './App.vue'


const app = createApp(App)

const response = await fetch("../locale.json");
const locale = await response.json();

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
        en: locale.en,
        de: locale.de,
        fi: locale.fi,
        se: locale.se
    }
})

export function changeLocale(locale) {
    i18n.global.locale.value = locale;
}

app.use(i18n)
app.mount('#app')
