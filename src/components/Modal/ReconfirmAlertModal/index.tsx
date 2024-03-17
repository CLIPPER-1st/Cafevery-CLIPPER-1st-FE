import Modal from '@/components/Modal';
import theme from '@/theme';
import * as Styled from './style';
import SmallButton from '@/components/Button/SmallButton';
import useModal from '@/hooks/useModal';
import { useDeleteFavoritePlace } from '@/hooks/useDeleteFavoritePlace';
import { isAxiosError } from 'axios';
import { useQueryClient } from '@tanstack/react-query';
import { ReconfirmAlertModalProps } from '@/interfaces/modal';
import useToast from '@/hooks/useToast';

export default function ReconfirmAlertModal({onClose, isOpen, name, id, ...props}: ReconfirmAlertModalProps) {
  const { displayToast } = useToast();
  const { closeModal } = useModal();
  const queryClient = useQueryClient();
  const { mutate }  = useDeleteFavoritePlace();

  const handleDeleteFavoritePlace = () => {
    mutate(id, {
      onSuccess: async () => {
        closeModal();
        displayToast('삭제되었습니다.');
        await queryClient.invalidateQueries({queryKey: ['userInfo']});
      },
      onError: (error) => {
        if(isAxiosError(error)) {
          displayToast('삭제 실패했습니다. 다시 시도해주세요.');
        }
      },
    });
  };

  return (
    <Modal modalTitle={''} isOpen={isOpen} onClose={onClose} modalType={'SmallModal'} modalColor={theme.colors.white} color={theme.colors.darkBrown} fontSize={20} {...props}>
      <Styled.ModalInnerWrapper>
        {`자주 가는 장소 "${name}"\n삭제 하시겠습니까?`}
        <Styled.ButtonContainer>
            <SmallButton onClick={handleDeleteFavoritePlace}>
              예
            </SmallButton>
            <SmallButton onClick={() => onClose()}>
              아니요
            </SmallButton>
        </Styled.ButtonContainer>
      </Styled.ModalInnerWrapper>
    </Modal>
  );
}