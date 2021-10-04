import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import Icon from '@/components/Icon/Icon.vue'
import Avatar from '@/components/Avatar/Avatar.vue'

Vue.config.productionTip = false

Vue.component('Icon',Icon)
Vue.component('Avatar',Avatar)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
