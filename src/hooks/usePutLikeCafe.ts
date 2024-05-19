import {putLikeCafe} from '@/apis/cafeLike';
import { LikeButtonProps } from '@/interfaces/button';
import { CafeInfo } from '@/interfaces/cafeInfo';
import { ILikesList } from '@/interfaces/likes';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import useToast from '@/hooks/useToast';
import { cafeInfoQueryKey, cafeLikeListQueryKey } from '@/constants/queryKeys';

export const usePutLikeCafe = (props: LikeButtonProps) => {
  const queryClient = useQueryClient();
  const { displayToast } = useToast();

  return useMutation({
    mutationFn: (id: number) => putLikeCafe(id),
    onMutate: async () => {
      const prevCafeData: CafeInfo = queryClient.getQueryData(cafeInfoQueryKey(props.id).queryKey);

      const updateCafeData = () => {
        if(prevCafeData) {
          return {
            ...prevCafeData,
            likes: props.liked ? (prevCafeData.likes) - 1 : (prevCafeData.likes) + 1,
            liked: !props.liked,
          };
        }
      }
      queryClient.setQueryData(cafeInfoQueryKey(props.id).queryKey, updateCafeData())

      const prevLikes: ILikesList = queryClient.getQueryData(cafeLikeListQueryKey.queryKey);
      const updatedCafes = prevLikes.cafes.filter(cafe => cafe.id !== props.id);
      const updateLikesData = () => {
        if(prevLikes) {
          return {
            ...prevLikes,
            cafes: updatedCafes,
          };
        }
      }
      queryClient.setQueryData(cafeLikeListQueryKey.queryKey, updateLikesData())
      return({prevCafe: prevCafeData, newCafe: updateCafeData(), prevLikes: prevLikes, newLikes: updateLikesData()});
    },
    onError: (error, id, context) => {
      if(isAxiosError(error)) {
        displayToast('좋아요에 실패했어요. 다시 시도해주세요.');
      }
      queryClient.setQueryData(cafeInfoQueryKey(props.id).queryKey, context.prevCafe);
      queryClient.setQueryData(cafeLikeListQueryKey.queryKey, context.prevLikes);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: cafeInfoQueryKey(props.id).queryKey });
      queryClient.invalidateQueries({ queryKey: cafeLikeListQueryKey.queryKey });
    },
  });
};
