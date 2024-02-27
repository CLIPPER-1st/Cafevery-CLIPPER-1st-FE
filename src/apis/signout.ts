import {isAxiosError} from 'axios';
import {instance} from './axios';

export const deleteSignout = async () => {
  try {
    const response = await instance.delete(`/api/v1/auth/sign-out`); //TODO: 엔드포인트 추가해야함
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw error;
    }
  }
};
