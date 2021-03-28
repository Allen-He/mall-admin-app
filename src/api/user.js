/** 管理用户需要操作的接口 */
import axios from '@/axios';

/**
 * 用户登录
 * @param {*} params email、password
 */
function login(params) {
  return axios.post('/passport/login', params);
}
/**
 * 用户注册
 * @param {*} params email、password、code、username、role(不必须，可选)
 * @returns
 */
function register(params) {
  return axios.post('/passport/logon', params);
}
/**
 * 获取验证码
 * @param {*} params email
 * @returns
 */
function getCode(params) {
  return axios.post('/passport/getCode', params);
}
/**
 * 找回密码
 * @param {*} params email、password、code
 * @returns
 */
function findBack(params) {
  return axios.post('/passport/findBack', params);
}
/**
 * 修改用户信息
 * @param {*} params email、password、newPassword(可选，非必须)、code、username、role(可选，非必须)
 * @returns
 */
function changeInfo(params) {
  return axios.post('/passport/changeUserInfo', params);
}

export default {
  login,
  register,
  getCode,
  findBack,
  changeInfo,
};
