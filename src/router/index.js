import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)
 
const  router = new VueRouter({
  routes:[
    {
     path:'/',
     component: ()=> import('@/page/Home/Home.vue'),
     children:[
       {
         path:'/person',
         component: ()=> import('@/page/Personal/Personal.vue'),
       },
       {
         path:'/social',
         component: ()=> import('@/page/Social/Social.vue'),
       },
       {
         path:'/core',
         component: ()=> import('@/page/Core/Core.vue'),
       },
       {
         path:'/preview',
         component: ()=> import('@/page/InfoPreview/InfoPreview.vue'),
       },
       {
         path:'/test',
         component: ()=> import('@/page/test/test.vue'),
       },
       { // 自动跳转路由
        path: '/',
        redirect: '/preview'
      }
     ]
    }
  ]
  
})
export default   router