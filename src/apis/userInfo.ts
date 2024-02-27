import { instance } from './axios';

export const fetchUserInfo = async () => {
    const response = await instance.get(`/api/v1/users/info`);
    return response.data.data.infos;
};