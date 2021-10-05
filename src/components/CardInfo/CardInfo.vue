<template>
  <div class="cardInfo">
     <div class="dataInfo">
       <h1>{{total}}<Icon :icon="icon"></Icon> <span class="percent">{{percent}}</span></h1>
     </div>
     <div class="titleTiem">
       <span>{{title}}</span>
       <span>上一个月</span>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['id','icon','title','percent','total']
  }
</script>

<style lang='scss'>
.cardInfo{
width: 284px;
height: 144px;
border-radius: 10px;
background-color: #ff6700;
padding: 28px 0 0 25px;
.dataInfo{
  h1{
    font-weight: normal;
   .percent{
     font-size: 14px;
    position: relative;
    top: -7px;
   }
  }
  .icon{
    color: #41EFFF;
    font-size: 20px;
  }
}
.titleTiem{
  display: flex;
  flex-direction: column;
  span:last-child{
    font-size: 12px;
  }
}
}
</style>
