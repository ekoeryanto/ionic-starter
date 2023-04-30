/// <reference types="@capacitor-firebase/authentication" />

import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'tabs',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
    CapacitorCookies: {
      enabled: true,
    },
    FirebaseAuthentication: {
      providers: ['google.com', 'microsoft.com', 'yahoo.com', 'phone'],
    },
  },
}

export default config
