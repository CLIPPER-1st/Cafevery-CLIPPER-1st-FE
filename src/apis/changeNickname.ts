import { isAxiosError } from 'axios';
import { instance } from './axios';

export const changeNickname = async (nickname: string) => {
    try {
        const response = await instance.patch(`/users/nickname`, {
            nickname: nickname
        });
        return response;
    } catch (error) {
        if (isAxiosError(error)) {
            throw error;
        } else {
            throw error;
        }
    }
};
