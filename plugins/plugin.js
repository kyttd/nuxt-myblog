import Vue from 'vue'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import {
  uniFileEditAlt,
  uniFolderOpen,
  uniTagAlt,
  uniCalender,
  uniLayerGroupMonochrome,
  uniCarWash
} from 'vue-unicons/dist/icons'
// import 'vue-unicons/dist/vue-unicons-ssr.css'
Unicon.add([
  uniFileEditAlt,
  uniFolderOpen,
  uniTagAlt,
  uniCalender,
  uniLayerGroupMonochrome,
  uniCarWash
])
Vue.use(Unicon)
