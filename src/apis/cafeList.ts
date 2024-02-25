import { instance } from './axios';

export const fetchCafes = async (centerLatitude: number, centerLongitude: number) => {
    const response = await instance.get(`/cafes/?centerLatitude=${centerLatitude}&centerLongitude=${centerLongitude}`);
    return response;
};