// 请求类目信息的接口
import axios from '@/axios';

export default {
  list(params) {
    return axios.get('/category/all', { params });
  },
};
