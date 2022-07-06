// node包，commonjs规范
const { build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const fs = require('fs')
const { vueComponentRoot, styleRoot, cocoLibRoot } = require('./paths')

let componentsList = {}
let styleList = {}

fs.readdirSync(vueComponentRoot + '/packages').forEach((dir) => {
  componentsList[dir] = vueComponentRoot + '/packages/' + dir + '/index.ts'
})

fs.readdirSync(vueComponentRoot + '/src').forEach((dir) => {
  componentsList['index'] = vueComponentRoot + '/src/' + dir
})

fs.readdirSync(styleRoot).forEach((file) => {
  if (/.scss/.test(file)) {
    styleList[file] = styleRoot + '/' + file
  }
})

const buildAll = async () => {
  // 打包 style 样式
  await build({
    mode: 'production',
    plugins: [vue()],
    build: {
      rollupOptions: {
        input: styleList,
        output: [
          {
            assetFileNames: (info) => {
              return `theme-chalk/${info.name.replace('.scss', '')}`
            }
          }
        ]
      },
      emptyOutDir: false,
      outDir: cocoLibRoot,
      publicDir: 'font',
      assetsDir: 'theme-chalk/font'
    }
  })

  // UMD 构建：组件库以 CDN 方式引入
  await build({
    mode: 'production',
    plugins: [vue()],
    build: {
      lib: {
        entry: vueComponentRoot + '/src/index.ts',
        name: 'CocoUI', // umd的变量名
        fileName: (format) => `dist/index.${format}.js`, // 输出文件名
        formats: ['umd']
      },
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖,解决插件报错问题(reading 'isCE')
        external: ['vue'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue'
          }
        }
      },
      emptyOutDir: false,
      outDir: cocoLibRoot
    }
  })

  // 全部组建与单个组件打包
  Object.keys(componentsList).forEach(async (key) => {
    await build({
      mode: 'production',
      plugins: [vue()],
      build: {
        lib: {
          entry: componentsList[key],
          fileName: (format) => {
            let dir = format === 'es' ? 'es' : 'lib'
            let fileName = format === 'es' ? 'mjs' : 'js'
            return `${dir}/${key}.${fileName}`
          }, // 输出文件名
          formats: ['es', 'cjs']
        },
        rollupOptions: {
          // 确保外部化处理那些你不想打包进库的依赖,解决插件报错问题(reading 'isCE')
          external: ['vue'],
          output: {
            // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
            globals: {
              vue: 'Vue'
            }
          }
        },
        emptyOutDir: false,
        outDir: cocoLibRoot
      }
    })
  })
}
const builds = async () => {
  await buildAll()
}
builds()
