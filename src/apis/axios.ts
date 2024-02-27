import axios from 'axios';
import Cookies from 'js-cookie';
import useSetTokens from '../hooks/useSetTokens';

const accessToken = Cookies.get('access_token');
const refreshToken = Cookies.get('refresh_token');
console.log(accessToken);
export const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL, //TODO: 서버 URL
  //baseURL:"",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

instance.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  error => Promise.reject(error)
);

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      if (!refreshToken) {
        throw new Error('토큰 없음');
      }
      
        await sendRefreshToken(refreshToken);
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return instance(originalRequest);
    }

    return Promise.reject(error);
  },
);



const sendRefreshToken = async refreshToken => {
    const response = await instance.get('/auth/token', {
      headers: {
        refreshToken,
      },
    });
    useSetTokens(response.data.accessToken, response.data.refreshToken);
    return response;
};
