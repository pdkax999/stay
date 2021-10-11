<template>
  <div class="home-container">
    <Header></Header>
    <div class="content">
      <div class="menu-left">
        <ul class="menu-list">
          <li class="avatar-wrapper" v-show="$route.meta.isShowMenu">
            <Avatar></Avatar>
          </li>
          <li class="menu" @click="menuActive=1" :class="{active:menuActive==1}">
            <Icon icon="diannao"></Icon>
          </li>
          <li class="menu" @click="menuActive=2" :class="{active:menuActive==2}" v-show="$route.meta.isShowMenu">
            <Icon icon="shuzhuangtu" ></Icon>
          </li>
          <li class="menu" @click="menuActive=3" :class="{active:menuActive==3}">
            <Icon icon="suijiyonghu" ></Icon>
          </li>
          <li class="menu" @click="menuActive=4" :class="{active:menuActive==4}">
            <Icon icon="suijiyonghu" ></Icon>
          </li>
        </ul>
        </div>
        <div class="person-content">
         <router-view></router-view>
      </div>
      </div>
      
  </div>
</template>

<script type="text/ecmascript-6">
  import Header from "../../components/Header/Header.vue";
  export default {
   components:{
     Header
   },
   data(){
     return {
       menuActive:1
     }
   }
  }
</script>

<style lang="scss">

  .content{
    background-color: #F5F4F9;
    display: flex;
   
    .menu-left{
      width: 81px;
      background: #fff;
      flex: none;
      .menu-list{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #999999;
        .avatar-wrapper{

        width: 55px;
        height: 55px;
        // background-color: red;

      }
      .active{
          background-color: #2C74EA;
       .icon{
         color: #fff;
       }
      }

      li:not(:first-child){
        font-size: 35px;
        width: 50px;
        height: 50px;
        margin-top: 20px;
        text-align: center;
        display: flex;
        border-radius: 10px;
        .icon{
          margin: auto;
        }
        
      }
      }
      
    }

    .avatar-wrapper{
      margin-top: 20px;
    }

    .person-content{
      flex: 1;
      padding: 35px 113px 0px  32px;
    }
  }

 
</style>
