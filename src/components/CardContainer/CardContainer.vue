<template>
  <div class="channelContainer"
        v-infinite-scroll="loadmore"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10">

    <CardMessage  :info="info" v-for="(info,index) in channelDatas" :key="index"></CardMessage> 
    
    <div class="loadding" v-if="busy">
        <img src="../../assets/loading-spinning-bubbles.svg" alt="加载图片" />
    </div>
</div>
</template>

<script type="text/ecmascript-6">
 import CardMessage from "@/components/CardMessage/CardMessages.vue";
  export default {
  components:{
    CardMessage
  },
  props:{
   channelDatas:{
     type:Array
   },
   busy:{
     type:Boolean
   },
   loadmore:{
     type:Function
   }   
  }
  }
</script>

<style lang='scss'>

.channelContainer{
  width: 580px;
}

.loadding{
   transform: translateY(30px);
   width: 100%;
   height: 170px;
   display: flex;
   
   img{
     width: 100px;
     height: 100px;
     margin: auto;
   }
  }
 
</style>
