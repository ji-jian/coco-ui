import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
console.log(111)

export default defineConfig({
  base: '../',
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        button: './packages/components/packages/button/index.ts',
        alert: './packages/components/packages/alert/index.ts'
      },
      output: {
        dir: 'dist',
        format: 'es'
      }
    }
  }
})
