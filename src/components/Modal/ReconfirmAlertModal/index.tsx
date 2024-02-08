import React, { useEffect } from 'react';
import Modal from '@/components/Modal/Modal';
import theme from '@/theme';
import * as Styled from './style';
import SmallButton from '@/components/Button/SmallButton';
import useModal from '@/hooks/useModal';
import { useRecoilState } from 'recoil';
import { alertModalState } from '@/atoms/modalState';
import AlertModal from '../AlertModal';

export default function ReconfirmAlertModal({onClose, isOpen, name, id, ...props}) {
  const [alertModal, setAlertModal] = useRecoilState(alertModalState);
  const { closeModal } = useModal();

  const handleDeleteFavoritePlace = () => {
    //TODO: 삭제 로직 구현
    closeModal();
    setAlertModal({
      isOpen: true,
      message: '삭제되었습니다.',
    });
  }
    return (
      <>
        <Modal modalTitle={''} isOpen={isOpen} onClose={onClose} modalType={'SmallModal'} modalColor={theme.colors.white} color={theme.colors.darkBrown} fontSize={20} {...props}>
          <Styled.ModalInnerWrapper>
            {`자주 가는 장소 "${name}"\n삭제 하시겠습니까?`}
            <Styled.ButtonContainer>
                <SmallButton onClick={() => handleDeleteFavoritePlace()}>
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