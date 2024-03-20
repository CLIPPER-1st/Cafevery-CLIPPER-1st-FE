import { instance } from './axios';

export const fetchSettingUserInfo = async () => {
    const response = await instance.get(`/users`);
    console.log(response.data)
    return response.data;
};