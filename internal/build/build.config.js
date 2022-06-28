import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'
import { projectRoot, vueComponentRoot, styleRoot } from './paths'

let inputList = {}

fs.readdirSync(vueComponentRoot + '/packages').forEach((dir) => {
  inputList[dir] = vueComponentRoot + '/packages/' + dir + '/index.ts'
})

fs.readdirSync(vueComponentRoot + '/src').forEach((file) => {
  inputList['index'] = vueComponentRoot + '/src/' + file
})

fs.readdirSync(styleRoot).forEach((file) => {
  if (/.scss/.test(file)) {
    console.log('styleRoot', file)
    inputList[file] = styleRoot + '/' + file
  }
})

export default defineConfig({
  mode: 'production',
  base: projectRoot,
  plugins: [vue()],
  build: {
    // rollupOptions: {
    //   input: inputList,
    //   output: {
    //     dir: 'dist',
    //     format: 'es',
    //     entryFileNames: `lib/[name].js`,
    //     chunkFileNames: `lib/[name].js`,
    //     assetFileNames: (info) => {
    //       return `lib/theme-chalk/${info.name.replace('.scss', '')}`
    //     }
    //   }
    // },
    lib: {
      entry: vueComponentRoot + '/src/index.ts',
      name: 'hubojun123', // umd的变量名
      fileName: (format) => `index.${format}.js`, // 输出文件名
      formats: ['es', 'umd']
    }
    // emptyOutDir: false
  }
})
