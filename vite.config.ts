import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

/**
 * Minimal versions for Copilot:
 * Chrome : 50+
 * Firefox : 48+
 * Safari : 13.1+
 * Edge : 79+
 * iOS Safari : 13.4+
 * Android Chrome/WebView : 61+
 */

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), vueI18nPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
