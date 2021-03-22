<template>
    <div class="RightHeader">
      <div class="btn">
        <a-button
          type="primary"
          @click="toggleCollapsed"
        >
          <a-icon :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
      </div>
      <div class="bread-crumb">
        <a-breadcrumb>
          <a-breadcrumb-item>{{ $route.matched[0].meta.title }}</a-breadcrumb-item>
          <a-breadcrumb-item><a href="#">{{ $route.matched[1].meta.title }}</a></a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <ul class="userInfo">
        <li>Hello, {{ $store.state.userInfo.username }}<a-icon type="down" class="icon"/></li>
        <li @click="logoutHandle">退出</li>
      </ul>
    </div>
</template>

<script>
export default {
  methods: {
    toggleCollapsed() {
      this.$store.dispatch('changeCollapsed');
    },
    logoutHandle() {
      this.$store.dispatch('logout');
      this.$router.push({
        name: 'Login',
      });
    },
  },
};
</script>
