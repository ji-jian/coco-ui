import CocoButton from '@icoco/components/packages/button'
import CocoList from '@icoco/components/packages/list'
import CocoCard from '@icoco/components/packages/card'
import CocoTag from '@icoco/components/packages/tag'
import CocoLink from '@icoco/components/packages/link'
import CocoMenu from '@icoco/components/packages/menu'
import CocoMenuItem from '@icoco/components/packages/menu-item'
import CocoDivision from '@icoco/components/packages/division'
import CocoIcon from '@icoco/components/packages/icon'
import CocoCrumbs from '@icoco/components/packages/crumbs'
import CocoCrumbsItem from '@icoco/components/packages/crumbs-item'
import CocoInput from '@icoco/components/packages/input'
import CocoTurnPage from '@icoco/components/packages/turn-page'
import CocoTurnPageItem from '@icoco/components/packages/turn-page-item'
import CocoBackTop from '@icoco/components/packages/back-top'
import CocoSkeleton from '@icoco/components/packages/skeleton'
import CocoAlert from '@icoco/components/packages/alert'
import CocoRate from '@icoco/components/packages/rate'
import CocoImage from '@icoco/components/packages/image'
import CocoAvatar from '@icoco/components/packages/avatar'
import CocoAside from '@icoco/components/packages/aside'
import CocoContainer from '@icoco/components/packages/container'
import CocoFooter from '@icoco/components/packages/footer'
import CocoHeader from '@icoco/components/packages/header'
import CocoMain from '@icoco/components/packages/main'
import CocoText from '@icoco/components/packages/text'
import CocoTable from '@icoco/components/packages/table'
import CocoButtonGroup from '@icoco/components/packages/button-group'
import CocoCalendar from '@icoco/components/packages/calendar'
import CocoSwitch from '@icoco/components/packages/switch'
import CocoRadio from '@icoco/components/packages/radio'
import CocoTree from '@icoco/components/packages/tree'
import CocoPageHeader from '@icoco/components/packages/page-header'
import CocoInfo from '@icoco/components/packages/info'
import CocoTextarea from '@icoco/components/packages/textarea'
import CocoSelect from '@icoco/components/packages/select'
import CocoOption from '@icoco/components/packages/option'
import CocoTagging from '@icoco/components/packages/tagging'
import CocoDrawer from '@icoco/components/packages/drawer'
import CocoDialog from '@icoco/components/packages/dialog'
import CocoCheckbox from '@icoco/components/packages/checkbox'
import CocoCollapse from '@icoco/components/packages/collapse'
import CocoCollapseItem from '@icoco/components/packages/collapse-item'
import { Message } from '@icoco/components/packages/message'
import { Notification } from '@icoco/components/packages/notification'

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

const cocoUI = {
  install
} as const

export {
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

export default cocoUI
