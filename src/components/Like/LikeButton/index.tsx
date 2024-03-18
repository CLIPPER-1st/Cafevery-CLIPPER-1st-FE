import Liked from '@/assets/Icons/Liked.png';
import NonLiked from '@/assets/Icons/NonLiked.png';
import Button from '@/components/common/Button/Button';
import { usePutLikeCafe } from '@/hooks/usePutLikeCafe';
import {LikeButtonProps} from '@/interfaces/button';
import { useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useState } from 'react';
import useToast from '@/hooks/useToast';

export default function Likebutton(props: LikeButtonProps) {
  const { mutate }  = usePutLikeCafe();
  const queryClient = useQueryClient();
  const [liked, setLiked] = useState(props.liked);
  const { displayToast } = useToast();

  const getImage = () => {
    return liked ? Liked : NonLiked;
  };

  const handleLike = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    getImage()
      mutate(props.id, {
        onSuccess: async () => {
          setLiked(!liked)
          await queryClient.invalidateQueries({queryKey: [['cafeInfo', props.id], ['cafeLikeList']]});
        },
        onError: (error) => {
          if(isAxiosError(error)) {
            displayToast('좋아요에 실패했어요. 다시 시도해주세요.');
          }
        },
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
