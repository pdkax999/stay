<template>
  <div class="test">
    <CardContainer :loadmore="loadMore"  :channelDatas="channelDataList" :busy="busy">
    </CardContainer>
  </div>
</template>

<script type="text/ecmascript-6">
import CardContainer from "@/components/CardContainer/CardContainer.vue";
export default {
  data() {
    return {
      busy: true,
      page: 1,
      channelDataList: [],
    };
  },
  mounted() {
    this.getChannelDataList();
  },
  methods: {
    async getChannelDataList() {
      const {page} = this;
      let result = await this.$api.reqChannelDataList(page);
      this.channelDataList.push(...result.thread_list);
      this.busy = false;
    },
    loadMore() {
      this.busy = true;
      this.page++;
      this.getChannelDataList();
    },
  },
  components: {
    CardContainer,
  },
};
</script>

<style lang='scss'>
.test{
  display: flex;
}
</style>
