import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import myAxios from "@/api/myAxios.js";
import {Progress,BackTop} from 'ant-design-vue'
import Icon from '@/components/Icon/Icon.vue'
import Avatar from '@/components/Avatar/Avatar.vue'
import infiniteScroll from 'vue-infinite-scroll'
import * as api from '@/api/index.js'
Vue.config.productionTip = false

Vue.component('Icon',Icon)
Vue.component('Avatar',Avatar)
Vue.component(Progress.name,Progress)
Vue.component(BackTop.name,BackTop)


Vue.use(infiniteScroll)

Vue.prototype.myAxios=myAxios

Vue.prototype.$api=api

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
