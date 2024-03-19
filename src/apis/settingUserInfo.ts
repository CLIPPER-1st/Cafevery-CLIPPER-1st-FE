import { instance } from './axios';

export const fetchSettingUserInfo = async () => {
    const response = await instance.get(`/users`);
    return response.data.data;
};