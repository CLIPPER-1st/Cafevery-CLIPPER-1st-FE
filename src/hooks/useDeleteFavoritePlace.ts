import { useMutation } from '@tanstack/react-query';
import { deleteFavoritePlace } from '@/apis/deleteFavoritePlace';

export const useDeleteFavoritePlace = () => {
    return useMutation({
        mutationFn: (id: number) => deleteFavoritePlace(id),
    });
};