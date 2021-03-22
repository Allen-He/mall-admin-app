import Cookies from 'js-cookie';
/**
 * 保存user信息到cookie
 * @param {*} info
 */
export function setUserCookie(info) {
  const arr = Object.entries(info);
  for (let i = 0; i < arr.length; i += 1) {
    Cookies.set(arr[i][0], arr[i][1]);
  }
  return true;
}
/**
 * 从cookie获取user信息
 */
export function getUserCookie() {
  return {
    username: Cookies.get('username'),
    appkey: Cookies.get('appkey'),
    email: Cookies.get('email'),
    role: Cookies.get('role'),
  };
}
/**
 * 移除cookie中的user信息
 */
export function removeUserCookie() {
  Cookies.remove('username');
  Cookies.remove('appkey');
  Cookies.remove('email');
  Cookies.remove('role');
}
