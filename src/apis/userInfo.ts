import { instance } from './axios';

export const fetchUserInfo = async () => {
    const response = await instance.get(`/users/info`);
    return response.data;
};