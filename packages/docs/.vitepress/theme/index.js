import CocoUI from '@cocoui/components'
import '@cocoui/style/index.scss'
import DefaultTheme from 'vitepress/theme'
import '../style/global.scss'

export default {
  ...DefaultTheme,
  NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    app.use(CocoUI)
  }
}
