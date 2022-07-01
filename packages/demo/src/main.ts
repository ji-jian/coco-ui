import { createApp } from 'vue'
import App from './App.vue'
import cocoUi2 from '@cocoui/components'
import '@cocoui/style/index.scss'
import router from './router'

import 'element3/lib/theme-chalk/index.css'
import Element3 from 'element3'

createApp(App).use(router).use(cocoUi2).use(Element3).mount('#app')
