import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import { vueComponentRoot, styleRoot } from './paths'

let inputList = {}

fs.readdirSync(vueComponentRoot).forEach((file) => {
  inputList[file] = vueComponentRoot + '/' + file + '/index.ts'
})

fs.readdirSync(styleRoot).forEach((file) => {
  if (/.scss/.test(file)) {
    console.log('styleRoot', file)
    inputList[file] = styleRoot + '/' + file
  }
})

export default defineConfig({
  base: '../',
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: inputList,
      output: {
        dir: 'dist',
        format: 'es',
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
