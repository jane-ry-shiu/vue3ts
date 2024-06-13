import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import { vuetify } from '../src/main'

setup((app) => {
  app.use(vuetify)
  // app.component('my-component', MyComponent);
  // app.mixin({
  //   /* My mixin */
  // })
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
