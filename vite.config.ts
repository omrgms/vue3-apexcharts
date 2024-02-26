import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join, resolve } from 'path';

// https://vitejs.dev/config/

export default defineConfig({
  mode: 'development',
  plugins: [vue()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': join(__dirname, './src'),
      'files': join(__dirname, './public/files'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/scss/index.scss";`
      }
    }
  },
})
