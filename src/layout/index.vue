<style lang="scss" scoped>
.layout{
  height: 100%;
  background: #0b122e;
  .amain{
    display: flex;
    height: calc(100% - 5.7143rem);
  }
  .aleft{
    width: 20rem;
    flex: 0 0 20rem;
    background: #0b122e;
    .title{
      height: 3.5714rem;
      color: #ffffff;
      padding-left: 0.7143rem;
      font-weight: bold;
      line-height: 3.5714rem;
      font-size: 1.2857rem;
      border-bottom: 0.0714rem solid #aaa9a9;
      margin-bottom: 0.7143rem;
    }
  }
  .aright{
    width: calc(100vw - 20rem)
  }
}
</style>


<template>
  <div class="layout">
    <all-header></all-header>
    <div class="amain">
      <div class="aleft">
        <div class="title">组织机构管理</div>
        <address-list></address-list>
      </div>
      <router-view class="aright" />
    </div>
  </div>
</template>

<script>
import addressList from "@/components/StatisticsAside/addressList";
import allHeader from "@/components/Header/index";
export default {
  components: {
    "address-list": addressList,
    "all-header": allHeader
  }
}
</script>
