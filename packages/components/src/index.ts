import CocoButton from '../packages/button'
import CocoList from '../packages/list'
import CocoCard from '../packages/card'
import CocoTag from '../packages/tag'
import CocoLink from '../packages/link'
import CocoMenu from '../packages/menu'
import CocoMenuItem from '../packages/menu-item'
import CocoDivision from '../packages/division'
import CocoIcon from '../packages/icon'
import CocoCrumbs from '../packages/crumbs'
import CocoCrumbsItem from '../packages/crumbs-item'
import CocoInput from '../packages/input'
import CocoTurnPage from '../packages/turn-page'
import CocoTurnPageItem from '../packages/turn-page-item'
import CocoBackTop from '../packages/back-top'
import CocoSkeleton from '../packages/skeleton'
import CocoAlert from '../packages/alert'
import CocoRate from '../packages/rate'
import CocoImage from '../packages/image'
import CocoAvatar from '../packages/avatar'
import CocoAside from '../packages/aside'
import CocoContainer from '../packages/container'
import CocoFooter from '../packages/footer'
import CocoHeader from '../packages/header'
import CocoMain from '../packages/main'
import CocoText from '../packages/text'
import CocoTable from '../packages/table'
import CocoButtonGroup from '../packages/button-group'
import CocoCalendar from '../packages/calendar'
import CocoSwitch from '../packages/switch'
import CocoRadio from '../packages/radio'
import CocoTree from '../packages/tree'
import CocoPageHeader from '../packages/page-header'
import CocoInfo from '../packages/info'
import CocoTextarea from '../packages/textarea'
import CocoSelect from '../packages/select'
import CocoOption from '../packages/option'
import CocoTagging from '../packages/tagging'
import CocoDrawer from '../packages/drawer'
import CocoDialog from '../packages/dialog'
import CocoCheckbox from '../packages/checkbox'
import CocoCollapse from '../packages/collapse'
import CocoCollapseItem from '../packages/collapse-item'
import { Message } from '../packages/message'
import { Notification } from '../packages/notification'

const components: object[] = [
  CocoButton,
  CocoList,
  CocoCard,
  CocoTag,
  CocoLink,
  CocoMenu,
  CocoMenuItem,
  CocoDivision,
  CocoIcon,
  CocoCrumbs,
  CocoCrumbsItem,
  CocoInput,
  CocoTurnPage,
  CocoTurnPageItem,
  CocoBackTop,
  CocoSkeleton,
  CocoAlert,
  CocoRate,
  CocoImage,
  CocoAvatar,
  CocoAside,
  CocoContainer,
  CocoFooter,
  CocoHeader,
  CocoMain,
  CocoText,
  CocoTable,
  CocoButtonGroup,
  CocoCalendar,
  CocoSwitch,
  CocoRadio,
  CocoTree,
  CocoPageHeader,
  CocoInfo,
  CocoTextarea,
  CocoSelect,
  CocoOption,
  CocoTagging,
  CocoDrawer,
  CocoDialog,
  CocoCheckbox,
  CocoCollapse,
  CocoCollapseItem
]

const install = (app: any) => {
  components.forEach((component) => {
    app.use(component)
  })
}

const cocoUi2 = {
  install
} as const

const ab = {
  a: 'ssssssss'
}

export {
  ab,
  install,
  Message,
  Notification,
  CocoButton,
  CocoList,
  CocoCard,
  CocoTag,
  CocoLink,
  CocoMenu,
  CocoMenuItem,
  CocoDivision,
  CocoIcon,
  CocoCrumbs,
  CocoCrumbsItem,
  CocoInput,
  CocoTurnPage,
  CocoTurnPageItem,
  CocoBackTop,
  CocoSkeleton,
  CocoAlert,
  CocoRate,
  CocoImage,
  CocoAvatar,
  CocoAside,
  CocoContainer,
  CocoFooter,
  CocoHeader,
  CocoMain,
  CocoText,
  CocoTable,
  CocoButtonGroup,
  CocoCalendar,
  CocoSwitch,
  CocoRadio,
  CocoTree,
  CocoPageHeader,
  CocoInfo,
  CocoTextarea,
  CocoSelect,
  CocoOption,
  CocoTagging,
  CocoDrawer,
  CocoDialog,
  CocoCheckbox
}

export default cocoUi2
