import cocoUi2 from '@coco-ui/components'
import '@coco-ui/components/style/index.css'
import DefaultTheme from 'vitepress/theme'
import '../style/global.scss'

export default {
  ...DefaultTheme,
  NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    app.use(cocoUi2)
  }
}
