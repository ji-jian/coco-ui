// import { resolve } from 'path'

// /* 源文件 */
// // 项目根目录
// export const projectRoot = resolve(__dirname, '..', '..')
// // 包目录
// export const pkgRoot = resolve(projectRoot, 'packages')
// // 包/组件目录
// export const vueComponentRoot = resolve(pkgRoot, 'components')
// // 包/样式目录
// export const styleRoot = resolve(pkgRoot, 'style')

const { resolve } = require('path')

const projectRoot = resolve(__dirname, '..', '..')

const pkgRoot = resolve(projectRoot, 'packages')

const vueComponentRoot = resolve(pkgRoot, 'components')

const cocoLibRoot = resolve(pkgRoot, 'coco-ui')

const styleRoot = resolve(pkgRoot, 'style')

module.exports = {
  projectRoot,
  pkgRoot,
  vueComponentRoot,
  cocoLibRoot,
  styleRoot
}
