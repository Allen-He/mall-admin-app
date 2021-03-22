import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import getMenuRoutes from '@/utils/permission';
import Home from '../views/layout/Home.vue';
import Login from '../views/layout/Login.vue';

Vue.use(VueRouter);

const asyncRoutes = [
  {
    path: '/products',
    name: 'Products',
    component: Home,
    meta: {
      title: '商品',
      show: true,
      icon: 'appstore',
    },
    children: [
      {
        path: 'list',
        name: 'ProductsList',
        component: () => import('@/views/pages/ProductsList.vue'),
        meta: {
          title: '商品列表',
          show: true,
          icon: 'menu',
        },
      },
      {
        path: 'add',
        name: 'ProductsAdd',
        component: () => import('@/views/pages/ProductsAdd.vue'),
        meta: {
          title: '添加商品',
          show: true,
          icon: 'plus',
        },
      },
      {
        path: 'category',
        name: 'Category',
        component: () => import('@/views/pages/Category.vue'),
        meta: {
          title: '商品类目',
          show: true,
          icon: 'file-text',
        },
      },
    ],
  },
];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    meta: {
      title: '首页',
      show: true,
      icon: 'home',
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/pages/Index.vue'),
        meta: {
          title: '统计',
          show: true,
          icon: 'line-chart',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录',
      show: false,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

let isAddedRoute = false; // 判断是否已添加了一次路由（锁）
router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    const {
      appkey, username, email, role,
    } = store.state.userInfo;
    if (appkey && username && email && role) {
      if (!isAddedRoute) {
        const menuRoutes = getMenuRoutes(role, asyncRoutes);
        // router.addRoutes(menuRoutes); 已被弃用，并已在VueRouter4中删除，请改用router.addRoute()
        store.dispatch('setMenuRoutes', routes.concat(menuRoutes)).then(() => {
          router.addRoute(menuRoutes[0]);
          next();
        });
        isAddedRoute = true;
      }
      return next();
    }
    return next({ name: 'Login' });
  }
  return next();
});

export default router;
