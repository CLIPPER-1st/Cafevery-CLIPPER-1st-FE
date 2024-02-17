import Liked from '@/assets/Icons/Liked.png';
import NonLiked from '@/assets/Icons/NonLiked.png';
import Button from '@/components/Button/Button';
import { useDeleteLikeCafe } from '@/hooks/useDeleteLikeCafe';
import { useRegisterLikeCafe } from '@/hooks/useRegisterLikeCafe';
import {LikeButtonProps} from '@/interfaces/button';
import { useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useState } from 'react';
import AlertModal from '@/components/Modal/AlertModal';
import { alertModalState } from '@/atoms/modalState';
import { useRecoilState } from 'recoil';
import useModal from '@/hooks/useModal';

export default function Likebutton(props: LikeButtonProps) {
  const mutateRegister  = useRegisterLikeCafe();
  const mutateDelete  = useDeleteLikeCafe();
  const queryClient = useQueryClient();
  const [liked, setLiked] = useState(props.liked);
  const [alertModal, setAlertModal] = useRecoilState(alertModalState);
  const { closeModal } = useModal();

  const getImage = () => {
    return liked ? Liked : NonLiked;
  };

  const handleLike = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    getImage()
    if(props.liked) {
      mutateDelete.mutate(props.id, {
        onSuccess: async () => {
          console.log(`unlike ${props.id}`);
          setLiked(!liked)
          await queryClient.invalidateQueries({queryKey: [['cafeInfo', props.id], ['cafeLikeList']]});
        },
        onError: (error) => {
          if(isAxiosError(error)) {
            setAlertModal({
              isOpen: true,
              message: '좋아요에 실패했어요.\n다시 시도해주세요.',
            });  
          }
        },
      });
    } else {
      mutateRegister.mutate(props.id, {
        onSuccess: async () => {
          console.log(`like ${props.id}`);
          setLiked(!liked)
          await queryClient.invalidateQueries({queryKey: [['cafeInfo', props.id], ['cafeLikeList']]});
        },
        onError: (error) => {
          if(isAxiosError(error)) {
            setAlertModal({
              isOpen: true,
              message: '좋아요에 실패했어요.\n다시 시도해주세요.',
            });
          }
        },
      });
    }
  };

  return (
    <>
      <Button
        width={33.06}
        height={30}
        onClick={handleLike}
        background={getImage()}
        zIndex={3}
      />
      {alertModal?.isOpen && (
        <AlertModal 
          isOpen={alertModal?.isOpen}
          onClose={closeModal}
        >
          {alertModal?.message}
        </AlertModal>
      )}
    </>
  );
}
