import CocoButton from '@coco-ui/components/packages/button'
import CocoList from '@coco-ui/components/packages/list'
import CocoCard from '@coco-ui/components/packages/card'
import CocoTag from '@coco-ui/components/packages/tag'
import CocoLink from '@coco-ui/components/packages/link'
import CocoMenu from '@coco-ui/components/packages/menu'
import CocoMenuItem from '@coco-ui/components/packages/menu-item'
import CocoDivision from '@coco-ui/components/packages/division'
import CocoIcon from '@coco-ui/components/packages/icon'
import CocoCrumbs from '@coco-ui/components/packages/crumbs'
import CocoCrumbsItem from '@coco-ui/components/packages/crumbs-item'
import CocoInput from '@coco-ui/components/packages/input'
import CocoTurnPage from '@coco-ui/components/packages/turn-page'
import CocoTurnPageItem from '@coco-ui/components/packages/turn-page-item'
import CocoBackTop from '@coco-ui/components/packages/back-top'
import CocoSkeleton from '@coco-ui/components/packages/skeleton'
import CocoAlert from '@coco-ui/components/packages/alert'
import CocoRate from '@coco-ui/components/packages/rate'
import CocoImage from '@coco-ui/components/packages/image'
import CocoAvatar from '@coco-ui/components/packages/avatar'
import CocoAside from '@coco-ui/components/packages/aside'
import CocoContainer from '@coco-ui/components/packages/container'
import CocoFooter from '@coco-ui/components/packages/footer'
import CocoHeader from '@coco-ui/components/packages/header'
import CocoMain from '@coco-ui/components/packages/main'
import CocoText from '@coco-ui/components/packages/text'
import CocoTable from '@coco-ui/components/packages/table'
import CocoButtonGroup from '@coco-ui/components/packages/button-group'
import CocoCalendar from '@coco-ui/components/packages/calendar'
import CocoSwitch from '@coco-ui/components/packages/switch'
import CocoRadio from '@coco-ui/components/packages/radio'
import CocoTree from '@coco-ui/components/packages/tree'
import CocoPageHeader from '@coco-ui/components/packages/page-header'
import CocoInfo from '@coco-ui/components/packages/info'
import CocoTextarea from '@coco-ui/components/packages/textarea'
import CocoSelect from '@coco-ui/components/packages/select'
import CocoOption from '@coco-ui/components/packages/option'
import CocoTagging from '@coco-ui/components/packages/tagging'
import CocoDrawer from '@coco-ui/components/packages/drawer'
import CocoDialog from '@coco-ui/components/packages/dialog'
import CocoCheckbox from '@coco-ui/components/packages/checkbox'
import CocoCollapse from '@coco-ui/components/packages/collapse'
import CocoCollapseItem from '@coco-ui/components/packages/collapse-item'
import { Message } from '@coco-ui/components/packages/message'
import { Notification } from '@coco-ui/components/packages/notification'

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
