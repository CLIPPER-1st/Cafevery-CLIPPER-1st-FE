import axios from 'axios';
import Cookies from 'js-cookie';

const accessToken = Cookies.get('accessToken');

export const instance = axios.create({
  //baseURL: import.meta.env.VITE_APP_SERVER_URL,
  baseURL: "",
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

instance.interceptors.request.use((config) => {
    const accessToken = Cookies.get('accessToken'); // 요청을 보낼 때마다 쿠키에서 액세스 토큰을 가져옵니다.
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`; // 액세스 토큰이 있으면 헤더에 추가합니다.
      config.withCredentials = true;
    }

    return config;
  }, (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
instance.interceptors.response.use(
  response => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const originalRequest = error.config;
      if (!originalRequest._retry) {
        originalRequest._retry = true;

        try {
          // 토큰 재발급 요청
          const response = await axios.post(`${import.meta.env.VITE_APP_SERVER_URL}/api/v1/auth/reissue`, {}, {
            withCredentials: true,
          });

          if (response.status === 200) {
            // 새로운 accessToken과 refreshToken을 쿠키에 설정
            const accessToken = Cookies.get('accessToken');
            Cookies.set('accessToken', accessToken, { path: '/', domain: 'blossommailbox.com' });
            // 헤더에 새로운 accessToken 설정
            originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
            originalRequest.withCredentials = true;
            // 재발급 받은 토큰으로 요청 재시도
            return instance(originalRequest);
          }
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }
    }

    // 네트워크 오류 또는 서버가 응답을 전혀 보내지 않은 경우
    return Promise.reject(error);
  }
);
