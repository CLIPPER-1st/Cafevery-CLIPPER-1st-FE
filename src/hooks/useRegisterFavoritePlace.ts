import { useMutation } from '@tanstack/react-query';
import { registerFavoritePlace } from '@/apis/registerFavoritePlace';
import { PostRegisterFavoritePlaceRequest } from '@/interfaces/postRegisterFavoritePlaceRequest';

export const useRegisterFavoritePlace = () => {
    return useMutation({
        mutationFn: (body: PostRegisterFavoritePlaceRequest) => registerFavoritePlace(body),
    });
};