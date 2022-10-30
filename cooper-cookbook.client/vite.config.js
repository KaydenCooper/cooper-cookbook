import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: '../cooper-cookbook/client',
    sourcemap: false
  },
  server: {
    port: 8080
  }
})
