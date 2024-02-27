import {isAxiosError} from 'axios';
import {instance} from './axios';

export const fetchCafeLikes = async () => {
  const response = await instance.get('/cafes/likes');
  console.log('========fetchCafeLikes=========', response);
  return response;
};

export const patchLikeCafe = async (cafeId: number) => {
  try {
    const response = await instance.patch(`/cafes/${cafeId}`);
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw error;
    }
  }
};