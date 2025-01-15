import axios from 'axios';
import {getEnvConfig} from './configService';

export const axiosInstance = axios.create({
  baseURL: getEnvConfig('API_URL'),
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = async (token: string | undefined) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeAuthToken = () => {
  delete axiosInstance.defaults.headers.common.Authorization;
};

axiosInstance.interceptors.request.use(async config => {
  return config;
});

axiosInstance.interceptors.response.use(
  response => {
    if (response.data && response.data.error) {
      return Promise.reject(response);
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);
