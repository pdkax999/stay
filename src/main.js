import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import {Progress} from 'ant-design-vue'
import Icon from '@/components/Icon/Icon.vue'
import Avatar from '@/components/Avatar/Avatar.vue'
import infiniteScroll from 'vue-infinite-scroll'
Vue.config.productionTip = false

Vue.component('Icon',Icon)
Vue.component('Avatar',Avatar)
Vue.component(Progress.name,Progress)
Vue.use(infiniteScroll)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
