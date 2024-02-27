import { instance } from './axios';

export const fetchCafeInfo = async (cafeId: number) => {
    const response = await instance.get(`api/v1/cafes/${cafeId}`);
    return response.data.data.cafe;
};