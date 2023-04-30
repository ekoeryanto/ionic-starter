import { VueFire, VueFireAuth } from 'vuefire'
import { initializeApp } from 'firebase/app'
import config from '@/config'

export const install: UserModule = ({ app }) => {
  const firebaseApp = initializeApp(config.firebaseApp)

  app.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  })
}
