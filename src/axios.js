import Axios from 'axios';

const instance = Axios.create({
  baseURL: ' https://mallapi.duyiedu.com/',
});

instance.interceptors.request.use((request) => request, (err) => Promise.reject(err));

instance.interceptors.response.use((response) => {
  if (response.data.status === 'fail') {
    return Promise.reject(response.data.msg);
  }
  return response.data.data;
}, (err) => Promise.reject(err));

export default instance;
