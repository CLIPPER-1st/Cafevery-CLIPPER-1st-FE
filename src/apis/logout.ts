import {isAxiosError} from 'axios';
import {instance} from './axios';

export const postLogout = async () => {
  try {
    const response = await instance.post(`auth/logout`, {});
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw error;
    }
  }
};
