import {putLikeCafe} from '@/apis/cafeLike';
import {useMutation} from '@tanstack/react-query';

export const usePutLikeCafe = () => {
  return useMutation({
    mutationFn: (id: number) => putLikeCafe(id),
  });
};
