import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [
    vue(),
    vueDevTools(),
    vueI18nPlugin(),
    legacy({
      targets: ['chrome >= 50', 'edge >= 79', 'safari >= 13.1', 'firefox >= 48'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      modernPolyfills: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
