import Axios from 'axios';
import store from '@/store';

const instance = Axios.create({
  baseURL: ' https://mallapi.duyiedu.com/',
});

instance.interceptors.request.use((config) => {
  if (config.url.includes('/passport')) {
    return config;
  }
  return {
    ...config,
    params: {
      ...config.params,
      appkey: store.state.userInfo.appkey,
    },
  };
}, (err) => Promise.reject(err));

instance.interceptors.response.use((response) => {
  if (response.data.status === 'fail') {
    return Promise.reject(response.data.msg);
  }
  return response.data.data;
}, (err) => Promise.reject(err));

export default instance;
