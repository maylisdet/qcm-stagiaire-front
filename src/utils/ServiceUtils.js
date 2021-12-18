import axios from 'axios';

const getAxiosConfig = () => {
  if (localStorage.getItem('auth-token') !== undefined) {
    return {
      baseURL: `http://localhost:8080/api/`,
      headers: { Authorization: `Bearer ${localStorage.getItem('auth-token')}` },
    };
  } else {
    return {
      baseURL: `http://localhost:8080/api/`,
    };
  }
};

export const API = axios.create(getAxiosConfig());
