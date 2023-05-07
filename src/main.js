import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import 'animate.css';
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag" 
import './background.js'
import messages from './translations.json'

if (!localStorage.getItem('lang')) {
    if (navigator.language.slice(0,2) === 'fr') {
        localStorage.setItem('lang', 'fr')
    } else {
        localStorage.setItem('lang', 'en')
    }
}

const i18n = createI18n({
    
    locale: localStorage.getItem('lang'), // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages

})

if (localStorage.getItem('lang') === 'fr') {
    document.querySelector('html').lang = 'fr'
}

createApp(App)
.use(router)
.use(i18n)
.use(VueGtag, {
    config: { id: "G-90DJXQHB95" }
})
.mount('#app')