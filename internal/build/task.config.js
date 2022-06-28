// node包，commonjs规范
const { build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const fs = require('fs')
const { projectRoot, vueComponentRoot, styleRoot } = require('./paths')

let inputList = {}

fs.readdirSync(vueComponentRoot + '/packages').forEach((dir) => {
  inputList[dir] = vueComponentRoot + '/packages/' + dir + '/index.ts'
})

fs.readdirSync(styleRoot).forEach((file) => {
  if (/.scss/.test(file)) {
    console.log('styleRoot', file)
    inputList[file] = styleRoot + '/' + file
  }
})

// 全量打包构建
const buildAll = async () => {
  await build({
    mode: 'production',
    base: projectRoot,
    plugins: [vue()],
    build: {
      rollupOptions: {
        input: inputList,
        output: {
          dir: 'dist',
          format: 'es',
          entryFileNames: `lib/[name].js`,
          chunkFileNames: `lib/[name].js`,
          assetFileNames: (info) => {
            return `lib/theme-chalk/${info.name.replace('.scss', '')}`
          }
        }
      }
    }
  })

  await build({
    mode: 'production',
    base: projectRoot,
    plugins: [vue()],
    build: {
      lib: {
        entry: vueComponentRoot + '/src/index.ts',
        name: 'coco-ui', // umd的变量名
        fileName: (format) => `index.${format}.js`, // 输出文件名
        formats: ['es', 'umd']
      },
      emptyOutDir: false,
      outDir: 'dist/lib'
    }
  })
}
const builds = async () => {
  await buildAll()
}
builds()
