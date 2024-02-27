import {isAxiosError} from 'axios';
import {instance} from './axios';

export const postLogout = async () => {
  try {
    const response = await instance.post(`/api/v1/auth/logout`); //TODO: 엔드포인트 추가해야함
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw error;
    }
  }
};
