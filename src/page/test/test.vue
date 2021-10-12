<template>
  <div class="test-container">

   <!-- <Menu :guideList="menuList" pitchGuide></Menu>

   <Menu class="wra-guide" :guideList="guideData" :showMenuItem="5"  type="text" pitchGuide></Menu> -->

  </div>
</template>

<script type="text/ecmascript-6">
// import Menu from "@/common/Menu.vue";
export default {

  components:{
    // Menu 
  },
  data(){

    return {
      menuList: [
        "yinpin",
        "50",
        "50",
        "tupian",
        "yinpin",
        "tupian",
        "yinpin",
        "tupian",
        "yinpin",
        "yinpin",
        "yinpin",
      ],
       guideData:[
        "xiangqing",
        "50",
        "50",
        "tupian",
        "yinpin",
        "分析",
        "吃饭",
      ],
       List: [
        {
          count: "930",
          title: "发布",
          id: 1,
        },
        {
          count: "82",
          title: "浏览",
          id: 2,
        },
        {
          count: "5.7k",
          title: "粉丝",
          id: 3,
        },
        {
          count: "13",
          title: "关注",
          id: 4,
        },
        {
          count: "74",
          title: "照片",
          id: 5,
        },
        {
          count: "10.6K",
          title: "获赞",
          id: 6,
        },
        {
          count: "8.4K",
          title: "收到评论",
          id: 7,
        },
        {
          count: "34",
          title: "人生",
          id: 8,
        },

        {
          count: "24",
          title: "如戏",
          id: 9,
        },
        {
          count: "29",
          title: "种树",
          id: 10,
        },
        {
          count: "67",
          title: "不付此生",
          id: 11,
        },
      ],
    }
  }
};
</script>

<style lang='scss'>
.test-container{
width: 100%;

background-color: #fff;

  .wra-guide{
    width: 580px;
    background-color: #fff;
    margin: 15px 0;
  }
  .box{
    width: 500px;
  }

  .wrap{
    width: 885px;
  }

}
</style>
