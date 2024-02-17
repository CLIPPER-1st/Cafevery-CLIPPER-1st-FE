import {unlikeCafe} from '@/apis/cafeLike';
import {useMutation} from '@tanstack/react-query';

export const useDeleteLikeCafe = () => {
  return useMutation({
    mutationFn: (id: number) => unlikeCafe(id),
  });
};
