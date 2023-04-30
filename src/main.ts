import { createApp } from 'vue'
import { defineCustomElements as pwaElements } from '@ionic/pwa-elements/loader'

import App from './App.vue'
import { router } from './router'
import { store } from './stores'

const app = createApp(App)

Promise.all(
  Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
    .map(i => i.install?.({ app, router, store })),
)
  .then(() => {
    app
      .use(store)
      .use(router)
      .mount('#app')

    pwaElements(window)
  })
