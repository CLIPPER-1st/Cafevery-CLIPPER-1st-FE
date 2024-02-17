import {likeCafe} from '@/apis/cafeLike';
import {useMutation} from '@tanstack/react-query';

export const useRegisterLikeCafe = () => {
  return useMutation({
    mutationFn: (id: number) => likeCafe(id),
  });
};