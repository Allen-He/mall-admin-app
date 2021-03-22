/** 管理用户需要操作的接口 */
import axios from '@/axios';

/**
 * 用户登录
 * @param {*} params email、password
 */
function login(params) {
  return axios.post('/passport/login', params);
}
function register(params) {
  return axios.post('/passport/logon', params);
}
function getCode(params) {
  return axios.post('/passport/getCode', params);
}

export default {
  login,
  register,
  getCode,
};
