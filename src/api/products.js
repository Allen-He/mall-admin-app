// 管理与products相关的接口
import axios from '@/axios';

export default {
  list(params) {
    return axios.get('/products/all', { params });
  },
  remove(params) {
    return axios.delete(`/products/${params.id}`);
  },
  add(params) {
    return axios.post('/products/add', params);
  },
  lookup(id) {
    return axios.get(`/products/${id}`);
  },
  edit(params) {
    return axios.put('/products/edit', params);
  },
};
