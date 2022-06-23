import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: '../packages/components/packages/button/index.ts',
      output: {
        file: 'dist/bundle-button.js',
        format: 'cjs'
      }
    }
  }
})
