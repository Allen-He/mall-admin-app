<template>
  <div class="home">
    <LeftMenu :key="menuKey" />
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
  data() {
    return {
      menuKey: new Date().getTime(),
    };
  },
  watch: {
    $route() {
      this.menuKey = new Date().getTime();
    },
  },
};
</script>

<style lang="less">
@import url("~@/assets/css/home.less");
</style>
