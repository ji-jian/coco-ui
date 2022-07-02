import { createApp } from 'vue'
import App from './App.vue'
import CocoUI from '@cocoui/coco-ui'
import '@cocoui/coco-ui/theme-chalk/index.css'

createApp(App).use(CocoUI).mount('#app')
