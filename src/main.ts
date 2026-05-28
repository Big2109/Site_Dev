import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import router from './router'

import {
    faPhone,
    faEnvelope,
    faLocationDot,
    faShoppingCart,
    faTrashCan
} from '@fortawesome/free-solid-svg-icons'

import {
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

library.add(
    faPhone,
    faEnvelope,
    faLocationDot,
    faShoppingCart,
    faTrashCan,
    faWhatsapp
)

const app = createApp(App)

app.component(
    'font-awesome-icon',
    FontAwesomeIcon
)

app.use(router)

app.mount('#app')