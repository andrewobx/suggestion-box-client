import axios from 'axios';
import api from '../../utils/api';

const basePath = '/auth';

export const loadBox = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.data)
    .catch(err => err.response.data);
};

export const loginUser = payload => {
  return api
    .post(`${basePath}/login`, payload)
    .then(res => res.data)
    .catch(err => {
      throw err.response.data;
    });
};
