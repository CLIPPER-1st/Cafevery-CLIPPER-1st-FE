import { isAxiosError } from 'axios';
import { instance } from './axios';

export const deleteFavoritePlace = async (id: number) => {
    try {
        const response = await instance.delete(`/users/location/${id}`, {});
        return response;
    } catch (error) {
        if (isAxiosError(error)) {
            throw error
        } else {
            throw error
        }
    }
};
