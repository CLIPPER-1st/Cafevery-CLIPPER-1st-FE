import {isAxiosError} from 'axios';
import {instance} from './axios';

export const fetchCafeLikes = async () => {
  const response = await instance.get('/cafes/likes');
  console.log('========fetchCafeLikes=========', response);
  return response;
};

export const likeCafe = async (cafeId: number) => {
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

export const unlikeCafe = async (cafeId: number) => {
  try {
    const response = await instance.delete(`/cafes/${cafeId}`);
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw error;
    }
  }
};
