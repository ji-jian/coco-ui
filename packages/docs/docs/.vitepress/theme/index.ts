import { VPTheme } from '@vue/theme'
import tyhUi from 'tyh-ui2'
import './code.scss'
import './global.scss'
import './markdown.scss'
import 'tyh-ui2/style/index.css'

export default Object.assign({}, VPTheme, {
  enhanceApp({ app }) {
    app.use(tyhUi)
  }
})