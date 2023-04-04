/// <reference types="vite/client" />
/// <reference types="vitest" />
/// <reference types="vue/ref-macros" />
/// <reference types="vite-plugin-pages/client" />
/// <reference types="vite-plugin-vue-layouts/client" />
/// <reference types="vite-plugin-pwa/client" />
/// <reference types="unplugin-vue-macros/macros-global" />

interface UserModuleContext {
    app: ReturnType<typeof import('vue').createApp>
    router: ReturnType<typeof import('vue-router').createRouter>
    store: ReturnType<typeof import('pinia').createPinia>
}

type UserModule = (ctx: UserModuleContext) => void