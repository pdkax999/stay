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
         meta:{
           isShowMenu:true 
         }
       },
       {
         path:'/social',
         component: ()=> import('@/page/Social/Social.vue'),
         meta:{
          isShowMenu:false
        }
       },
       {
         path:'/core',
         component: ()=> import('@/page/Core/Core.vue'),
         meta:{
          isShowMenu:true 
        }
       },
       {
         path:'/preview',
         component: ()=> import('@/page/InfoPreview/InfoPreview.vue'),
         meta:{
          isShowMenu:true 
        }
       },
       {
         path:'/test',
         component: ()=> import('@/page/test/test.vue'),
         meta:{
          isShowMenu:true 
        }
       },
       { // 自动跳转路由
        path: '/',
        redirect: '/social'
      }
     ]
    }
  ]
  
})
export default  router