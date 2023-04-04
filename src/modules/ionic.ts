import { IonicVue } from '@ionic/vue'

import '@/theme/main.css'

export const install: UserModule = ({ app }) => {
  app.use(IonicVue)
}
