import CocoButton from '@cocoui/components/packages/button'
import CocoList from '@cocoui/components/packages/list'
import CocoCard from '@cocoui/components/packages/card'
import CocoTag from '@cocoui/components/packages/tag'
import CocoLink from '@cocoui/components/packages/link'
import CocoMenu from '@cocoui/components/packages/menu'
import CocoMenuItem from '@cocoui/components/packages/menu-item'
import CocoDivision from '@cocoui/components/packages/division'
import CocoIcon from '@cocoui/components/packages/icon'
import CocoCrumbs from '@cocoui/components/packages/crumbs'
import CocoCrumbsItem from '@cocoui/components/packages/crumbs-item'
import CocoInput from '@cocoui/components/packages/input'
import CocoTurnPage from '@cocoui/components/packages/turn-page'
import CocoTurnPageItem from '@cocoui/components/packages/turn-page-item'
import CocoBackTop from '@cocoui/components/packages/back-top'
import CocoSkeleton from '@cocoui/components/packages/skeleton'
import CocoAlert from '@cocoui/components/packages/alert'
import CocoRate from '@cocoui/components/packages/rate'
import CocoImage from '@cocoui/components/packages/image'
import CocoAvatar from '@cocoui/components/packages/avatar'
import CocoAside from '@cocoui/components/packages/aside'
import CocoContainer from '@cocoui/components/packages/container'
import CocoFooter from '@cocoui/components/packages/footer'
import CocoHeader from '@cocoui/components/packages/header'
import CocoMain from '@cocoui/components/packages/main'
import CocoText from '@cocoui/components/packages/text'
import CocoTable from '@cocoui/components/packages/table'
import CocoButtonGroup from '@cocoui/components/packages/button-group'
import CocoCalendar from '@cocoui/components/packages/calendar'
import CocoSwitch from '@cocoui/components/packages/switch'
import CocoRadio from '@cocoui/components/packages/radio'
import CocoTree from '@cocoui/components/packages/tree'
import CocoPageHeader from '@cocoui/components/packages/page-header'
import CocoInfo from '@cocoui/components/packages/info'
import CocoTextarea from '@cocoui/components/packages/textarea'
import CocoSelect from '@cocoui/components/packages/select'
import CocoOption from '@cocoui/components/packages/option'
import CocoTagging from '@cocoui/components/packages/tagging'
import CocoDrawer from '@cocoui/components/packages/drawer'
import CocoDialog from '@cocoui/components/packages/dialog'
import CocoCheckbox from '@cocoui/components/packages/checkbox'
import CocoCollapse from '@cocoui/components/packages/collapse'
import CocoCollapseItem from '@cocoui/components/packages/collapse-item'
import { Message } from '@cocoui/components/packages/message'
import { Notification } from '@cocoui/components/packages/notification'

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
