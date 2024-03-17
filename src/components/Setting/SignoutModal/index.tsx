import Modal from '@/components/common/Modal';
import theme from '@/theme';
import * as Styled from './style';
import SmallButton from '@/components/common/Button/SmallButton';
import { useSignout } from '@/hooks/useSignout';
import { SignoutModalProps } from '@/interfaces/modal';

export default function SignoutModal({onClose, isOpen, ...props}: SignoutModalProps) {
  const { mutate } = useSignout();

  const handleSignout = () => {
    mutate();
  };

  return (
    <Modal modalTitle={'정말 탈퇴하시겠습니까?'} isOpen={isOpen} onClose={onClose} modalType={'SmallModal'} modalColor={theme.colors.white} color={theme.colors.darkBrown} fontSize={20} {...props}>
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
  );
}