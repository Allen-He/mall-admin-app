import Vue from 'vue';
import Vuex from 'vuex';
import { setUserCookie, getUserCookie, removeUserCookie } from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 左侧菜单是否为收起状态（false:展开  true:收起）
    collapsed: false,
    // 用户信息对象
    userInfo: getUserCookie(),
  },
  mutations: {
    changeCollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setUserInfo(state, info) {
      state.userInfo = info;
    },
    logout(state) {
      state.userInfo = {
        username: '',
        appkey: '',
        email: '',
        role: '',
      };
    },
  },
  actions: {
    changeCollapsed({ commit }) {
      commit('changeCollapsed');
    },
    setUserInfo({ commit }, info) {
      commit('setUserInfo', info);
      setUserCookie(info);
    },
    logout({ commit }) {
      commit('logout');
      removeUserCookie();
    },
  },
  modules: {
  },
});
