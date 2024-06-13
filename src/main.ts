import './assets/main.css'
import 'vuetify/styles'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import router from './router'

const app = createApp(App)

export const vuetify = createVuetify({
  components,
  directives
})

app.use(vuetify)
app.use(createPinia())
app.use(router)

app.mount('#app')
