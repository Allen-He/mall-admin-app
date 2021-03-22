<template>
  <div class="home">
    <LeftMenu />
    <div class="content">
      <RightHeader />
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
