// plugins/vue-echarts.js
import { defineNuxtPlugin } from '#app'
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart,
  PieChart,
  LineChart
} from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  AxisPointerComponent
} from 'echarts/components'

// Подключаем необходимые компоненты ECharts
use([
  CanvasRenderer,
  BarChart,
  PieChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  AxisPointerComponent
])

export default defineNuxtPlugin((nuxtApp) => {
  // Регистрация компонента глобально
  nuxtApp.vueApp.component('v-chart', ECharts)
})
