<template>
  <div>
    <CardMessage></CardMessage>
    <!-- <a-back-top>
      <div class="ant-back-top-inner">
        UP
      </div>
    </a-back-top> -->
  </div>
</template>

<script type="text/ecmascript-6">
import CardMessage from "../../page/test/CardMessage/CardMessage.vue";
  export default {

  mounted() {

      this.getdata()

    setTimeout(() => {
      
      this.getdata()

    }, 2000);
  },

    methods: {
    async getdata(){

     let result = await this.myAxios.post('/osapi/Channel/getChannelDataList',{
       channel_id: "2",
     page: 1
     })

      console.log(result);
      

     }
    },
    components:{
      CardMessage
    }
  }
</script>

<style lang='scss'>

 
</style>
