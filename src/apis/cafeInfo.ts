import { instance } from './axios';

export const fetchCafeInfo = async (cafeId: number) => {
    const response = await instance.get(`/cafes/cafe/${cafeId}`);
    return response.data;
};