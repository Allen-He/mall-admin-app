<template>
  <div class="leftMenu">
    <a-menu
      class="menu-list"
      :default-selected-keys="[$route.matched[1].name]"
      :default-open-keys="[$route.matched[0].name]"
      mode="inline"
      theme="dark"
      :inline-collapsed="$store.state.collapsed"
    >
      <!-- 使用 v-if v-for 过滤掉不需要显示的route -->
      <!-- <template v-for="route in $store.state.menuRoutes">
        <a-sub-menu :key="route.name" v-if="route.meta.show">
          <span slot="title">
            <a-icon :type="route.meta.icon" />
            <span>{{ route.meta.title }}</span>
          </span>
          <template v-for="routeChild in route.children">
            <a-menu-item
              :key="routeChild.name"
              v-if="routeChild.meta.show"
            >
              <router-link :to="{ name: routeChild.name }">
                <a-icon :type="routeChild.meta.icon" />
                {{ routeChild.meta.title }}
              </router-link>
            </a-menu-item>
          </template>
        </a-sub-menu>
      </template> -->

      <!-- 使用 vuex的计算属性getters 过滤掉不需要显示的route -->
      <a-sub-menu
        v-for="route in $store.getters.filterMenuRoutes"
        :key="route.name"
      >
        <span slot="title">
          <a-icon :type="route.meta.icon" />
          <span>{{ route.meta.title }}</span>
        </span>
        <a-menu-item
          v-for="routeChild in route.children"
          :key="routeChild.name"
        >
          <router-link :to="{ name: routeChild.name }">
            <a-icon :type="routeChild.meta.icon" />
            {{ routeChild.meta.title }}
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  // created() {
  //   // console.log(this.$store.state.menuRoutes);
  //   // console.log(this.$store.getters.filterMenuRoutes);
  //   // console.log(this.$route.name);
  //   // console.log(this.$route.matched);
  // },
  // watch: {
  //   '$route.matched': function () {
  //     console.log(this.$route.matched);
  //   },
  // },
};
</script>
