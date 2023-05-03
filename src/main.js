import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import App from './App.vue'
import router from './router'
import './background.js'
import messages from './translations.json'

const i18n = createI18n({
    
    locale: 'fr', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages

})

createApp(App)
.use(router)
.use(i18n)
.mount('#app')