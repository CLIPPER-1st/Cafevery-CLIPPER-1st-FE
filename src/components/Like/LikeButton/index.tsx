import Liked from '@/assets/Icons/Liked.png';
import NonLiked from '@/assets/Icons/NonLiked.png';
import Button from '@/components/common/Button/Button';
import { usePutLikeCafe } from '@/hooks/usePutLikeCafe';
import {LikeButtonProps} from '@/interfaces/button';
import { useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import useToast from '@/hooks/useToast';
import { CafeInfo } from '@/interfaces/cafeInfo';
import { ILikesList } from '@/interfaces/likes';

export default function Likebutton(props: LikeButtonProps) {
  const { mutate }  = usePutLikeCafe();
  const queryClient = useQueryClient();
  const { displayToast } = useToast();

  const getImage = () => {
    return props.liked ? Liked : NonLiked;
  };

  const handleLike = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    getImage()
      mutate(props.id, {
        onSuccess: async () => {
          queryClient.invalidateQueries({ queryKey: ['cafeInfo', props.id] });
          queryClient.invalidateQueries({ queryKey: ['cafeLikeList'] });
        },
        onError: (error) => {
          if(isAxiosError(error)) {
            displayToast('좋아요에 실패했어요. 다시 시도해주세요.');
          }
        },
        onSettled: () => {
          const prev: CafeInfo = queryClient.getQueryData(['cafeInfo', props.id]);
          const updateData = () => {
            if(prev) {
              return {
                ...prev,
                likes: props.liked ? (prev.likes) - 1 : (prev.likes) + 1,
                liked: !props.liked,
              };
            }
          }
          queryClient.setQueryData(['cafeInfo', props.id], updateData())

          const prevLikes: ILikesList = queryClient.getQueryData(['cafeLikeList']);
          console.log('prevLikes', prevLikes)
          const updatedCafes = prevLikes.cafes.filter(cafe => cafe.id !== props.id);
          console.log('updatedCafes', updatedCafes)
          const updateLikesData = () => {
            if(prevLikes) {
              return {
                ...prevLikes,
                cafes: updatedCafes,
              };
            }
          }
          queryClient.setQueryData(['cafeLikeList'], updateLikesData())
        }
      });
  };

  return (
    <Button
      width={33.06}
      height={30}
      onClick={handleLike}
      background={getImage()}
      zIndex={3}
    />
  );
}
