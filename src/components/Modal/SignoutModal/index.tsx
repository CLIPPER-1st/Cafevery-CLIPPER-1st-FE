import Modal from '@/components/Modal';
import theme from '@/theme';
import * as Styled from './style';
import SmallButton from '@/components/Button/SmallButton';
import useModal from '@/hooks/useModal';
import { useRecoilState } from 'recoil';
import { alertModalState } from '@/atoms/modalState';
import AlertModal from '@/components/Modal/AlertModal';
import { useDeleteFavoritePlace } from '@/hooks/useDeleteFavoritePlace';
import { isAxiosError } from 'axios';
import { useQueryClient } from '@tanstack/react-query';
import { useLoginStatus } from '@/hooks/useLoginStatus';
import { useSignout } from '@/hooks/useSignout';

export default function SignoutModal({onClose, isOpen, ...props}) {
  const [alertModal, setAlertModal] = useRecoilState(alertModalState);
  const { closeModal } = useModal();
  const { mutate } = useSignout();

  const handleSignout = () => {
    mutate();
  };

  return (
    <>
      <Modal modalTitle={'정말 탈퇴하시겠습니까?'} isOpen={isOpen} onClose={onClose} modalType={'MediumModal'} modalColor={theme.colors.white} color={theme.colors.darkBrown} fontSize={20} {...props}>
        <Styled.ModalInnerWrapper>
          <Styled.ButtonContainer>
            <SmallButton onClick={handleSignout}>
              예
            </SmallButton>
            <SmallButton onClick={() => onClose()}>
              아니요
            </SmallButton>
          </Styled.ButtonContainer>
        </Styled.ModalInnerWrapper>
      </Modal>
      {alertModal?.isOpen && (
        <AlertModal 
          isOpen={alertModal?.isOpen}
          onClose={onClose}
        >
          {alertModal?.message}
        </AlertModal>
      )}
    </>
  );
}