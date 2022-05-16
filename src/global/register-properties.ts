import { App } from 'vue'
import {
  Apple,
  ArrowDown,
  Baseball,
  BellFilled,
  Calendar,
  Checked,
  Cherry,
  Chicken,
  CircleClose,
  CircleCloseFilled,
  CirclePlus,
  Close,
  Cloudy,
  Compass,
  Connection,
  CreditCard,
  DataAnalysis,
  DataLine,
  Delete,
  Edit,
  Fold,
  Food,
  Fries,
  GoodsFilled,
  Histogram,
  IceCreamRound,
  Iphone,
  Lightning,
  MapLocation,
  More,
  OfficeBuilding,
  Present,
  Refresh,
  Search,
  SetUp,
  Tools,
  Trophy,
  UserFilled,
  VideoCameraFilled
} from '@element-plus/icons-vue'

const icons = [
  Delete,
  Checked,
  Calendar,
  Iphone,
  Tools,
  GoodsFilled,
  VideoCameraFilled,
  Fold,
  ArrowDown,
  UserFilled,
  CircleCloseFilled,
  CircleClose,
  CirclePlus,
  Refresh,
  Search,
  Edit,
  Close,
  More,
  Histogram,
  MapLocation,
  DataLine,
  CreditCard,
  Apple,
  Baseball,
  Cherry,
  Chicken,
  Cloudy,
  Connection,
  Compass,
  DataAnalysis,
  Food,
  Fries,
  IceCreamRound,
  Lightning,
  OfficeBuilding,
  Present,
  SetUp,
  Trophy,
  BellFilled
]
// 注册全局字体
export function registerIcons(app: App) {
  for (const icon of icons) {
    app.component(icon.name, icon)
  }
}

// 注册全局组件
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageDialog from '@/components/page-dialog'
import LyCard from '@/components/ly-card'

const cpns = [LyCard, PageSearch, PageContent, PageDialog]

export function registerComponent(app: App) {
  for (const cpn of cpns) {
    app.component(cpn.name, cpn)
  }
}
