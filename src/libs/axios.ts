import Axios from 'axios';

import storage from '../utils/storage';
import { API_BASE_URL } from '../config';

export const axios = Axios.create({
    // baseURL: API_BASE_URL,
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': storage.getToken() !== '' ? `Bearer ${storage.getToken()}` : ''
    }
});

axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    console.error(message);

    return Promise.reject(error);
  }
);