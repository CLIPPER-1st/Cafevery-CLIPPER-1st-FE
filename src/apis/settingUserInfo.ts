import { instance } from './axios';

export const fetchSettingUserInfo = async () => {
    const response = await instance.get(`api/v1/users`); //TODO: 수정해야함.
    return response.data.data;
};