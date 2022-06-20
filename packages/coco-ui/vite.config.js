import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  base: './',
  build: {
    lib: {
      entry: 'index.js',
      name: 'index'
    }
  },
  plugins: [vue()]
})
