import { createApp } from 'vue'
import { defineCustomElements as pwaElements } from '@ionic/pwa-elements/loader'

import App from './App.vue'
import { router } from './router'
import { store } from './stores'

const app = createApp(App)
  .use(store)
  .use(router)

Promise.all(
  Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
    .map(i => i.install?.({ app, router, store })),
)
  .then(() => router.isReady())
  .then(() => {
    app.mount('#app')
    pwaElements(window)
  })
