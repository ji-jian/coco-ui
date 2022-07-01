import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// https://github.com/Coco2001/coco-ui
import cocoUi2 from './cocoUi'
import '@cocoui/components/style/index.css' // 线上
// import '@cocoui/style/index.ts' // 测试

// https://github.com/Coco2001/bright-code
import brightCode from 'bright-code'
import 'bright-code/theme/index.css'

// markdown style
import './style/markdown-body.scss'

// global style
import './style/global.scss'

createApp(App)
  .use(router)
  .use(cocoUi2)
  .use((app) => {
    app.directive('high', {
      mounted(el) {
        const blocks = el.querySelectorAll('pre code')
        for (let i: number = 0; i < blocks.length; i++) {
          brightCode.highlightElement(blocks[i])
        }
      }
    })
  })
  .mount('#app')
