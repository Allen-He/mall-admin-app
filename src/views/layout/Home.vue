<template>
  <div class="home">
    <LeftMenu />
    <div :class="['content', { 'content-collapsed': $store.state.collapsed }]">
      <RightHeader />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import LeftMenu from './components/LeftMenu.vue';
import RightHeader from './components/RightHeader.vue';

export default {
  components: {
    LeftMenu,
    RightHeader,
  },
};
</script>

<style lang="less">
@import url("~@/assets/css/home.less");
</style>
