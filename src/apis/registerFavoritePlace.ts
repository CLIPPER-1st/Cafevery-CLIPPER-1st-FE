import { PostRegisterFavoritePlaceRequest } from '@/interfaces/postRegisterFavoritePlaceRequest';
import { isAxiosError } from 'axios';
import { instance } from './axios';

export const registerFavoritePlace = async (body: PostRegisterFavoritePlaceRequest) => {
    try {
        const response = await instance.post<PostRegisterFavoritePlaceRequest>(`/users/location`, {
            name: body.name,
            latitude: body.latitude,
            longitude: body.longitude,
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