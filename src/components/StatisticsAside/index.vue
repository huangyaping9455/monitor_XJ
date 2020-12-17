<style lang="scss" scoped>
.statisticsAside{
  width: 22rem;
  height: 100%;
  background-image: url('~@/assets/img/bg_11.png');
  background-size: 100% 100%;
  padding-top: 0.7143rem;
  .title{
    margin-top: 1.0714rem;
    margin-bottom: 0;
    font-size: 1.4286rem;
    color: #01f5f8;
    font-weight: normal;
    text-align: center;
    font-family: 'MicrosoftYaHei';
    margin-bottom: 2.1429rem;
  }
  .mian{
    margin-left: 1.0714rem;
  }
}
</style>

<template>
  <aside class="statisticsAside">
    <h1 class="title">组织机构管理</h1>
    <address-list class="mian"></address-list>
  </aside>
</template>

<script>
import addressList from "@/components/StatisticsAside/addressList";
export default {
  components: {
    "address-list": addressList,
  },
}
</script>
