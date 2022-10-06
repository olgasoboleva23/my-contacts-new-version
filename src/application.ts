import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from './plugins/axios'

// import './assets/main.css'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const app = createApp(App).use(Quasar, quasarUserOptions)

app.use(createPinia())
app.use(router)
app.use(axios, {
    baseUrl: 'https://olgasoboleva23.github.io/my-contacts-new-version/',
})

app.mount('#app')
