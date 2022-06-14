import cocoUi2 from '@coco-ui/coco-ui2'
import '@coco-ui/coco-ui2/style/index.css'
import DefaultTheme from 'vitepress/theme'

export default {
  ...DefaultTheme,
  NotFound: () => 'custom 404', // <- this is a Vue 3 functional component
  enhanceApp({ app, router, siteData }) {
    app.use(cocoUi2)
  }
}
