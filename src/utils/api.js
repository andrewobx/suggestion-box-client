import axios from 'axios';
import { LOCAL_STORAGE } from '../constants';
import { isTokenAboutToExpire } from './jwt';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

let isRefreshing = false;
const refreshToken = () => {
  const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
  return new Promise((resolve, reject) => {
    if (!isRefreshing) {
      isRefreshing = true;
      http
        .post(
          '/auth/refresh-tokens',
          { refreshToken: localStorage.getItem(LOCAL_STORAGE.REFRESH_TOKEN) },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        )
        .then(res => {
          isRefreshing = false;
          const { token } = res.data.access;
          localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, token);
          resolve(token);
        })
        .catch(err => {
          isRefreshing = false;
          reject(err);
        });
    } else {
      resolve();
    }
  });
};

http.interceptors.request.use(
  request => {
    const originalRequest = request;

    const accessToken = localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
    if (!isTokenAboutToExpire()) {
      if (accessToken !== null) {
        request.headers.Authorization = `Bearer ${accessToken}`;
      }
      return request;
    }

    return refreshToken().then(res => {
      const newToken = res || accessToken;
      originalRequest.headers.Authorization = `Bearer ${newToken}`;

      return originalRequest;
    });
  },
  error => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);

export default http;
