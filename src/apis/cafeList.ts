import { instance } from './axios';

export const fetchCafes = async (centerLatitude: number, centerLongitude: number) => {
    const response = await instance.get(`/api/v1/cafes?centerLatitude=${centerLatitude}&centerLongitude=${centerLongitude}`);
    return response;
};