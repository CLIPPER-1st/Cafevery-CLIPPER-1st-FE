import {patchLikeCafe} from '@/apis/cafeLike';
import {useMutation} from '@tanstack/react-query';

export const usePatchLikeCafe = () => {
  return useMutation({
    mutationFn: (id: number) => patchLikeCafe(id),
  });
};
