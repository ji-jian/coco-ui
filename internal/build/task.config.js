// node包，commonjs规范
const { build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const fs = require('fs')
const { vueComponentRoot, styleRoot, cocoLibRoot } = require('./paths')

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

const buildAll = async () => {
  await build({
    mode: 'production',
    plugins: [vue()],
    build: {
      rollupOptions: {
        input: inputList,
        output: {
          format: 'umd',
          preserveModules: true,
          entryFileNames: (info) => {
            console.log(1111, info)
            return `[name].js`
          },
          chunkFileNames: `[name].js`,
          assetFileNames: (info) => {
            return `theme-chalk/${info.name.replace('.scss', '')}`
          }
        },
        preserveEntrySignatures: 'allow-extension'
      },
      outDir: cocoLibRoot + '/lib'
    }
  })

  // await build({
  //   mode: 'production',
  //   plugins: [vue()],
  //   build: {
  //     lib: {
  //       entry: vueComponentRoot + '/src/index.ts',
  //       name: 'coco-ui', // umd的变量名
  //       fileName: (format) => `index.${format}.js`, // 输出文件名
  //       formats: ['es', 'umd']
  //     },
  //     emptyOutDir: false,
  //     outDir: cocoLibRoot + '/lib'
  //   }
  // })
}
const builds = async () => {
  await buildAll()
}
builds()
