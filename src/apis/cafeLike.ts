import {isAxiosError} from 'axios';
import {instance} from './axios';

export const fetchCafeLikes = async () => {
  const response = await instance.get('/cafes/likes');
  return response;
};

export const putLikeCafe = async (cafeId: number) => {
  try {
    const response = await instance.put(`/cafes/${cafeId}`);
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw error;
    }
  }
};