import './assets/main.css'
import 'vuetify/styles'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import router from './router'

export const vuetify = createVuetify({
  components,
  directives
})
export const createMyApp = () => {
  const app = createApp(App)

  app.use(vuetify)
  app.use(createPinia())
  app.use(router)

  return app
}

// TODO: Add conditional rendering for storybook
// if (typeof process !== 'undefined') {
const app = createMyApp()
app.mount('#app')
// }
