import React, { useEffect } from 'react';
import Modal from '@/components/common/Modal';
import theme from '@/theme';
import * as Styled from './style';
import { useSetRecoilState } from 'recoil';
import { alertModalState } from '@/atoms/modalState';
import { AlertModalProps } from '@/interfaces/modal';

export default function AlertModal({onClose, isOpen, ...props}: AlertModalProps) {
  const setAlertModal = useSetRecoilState(alertModalState);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout;
    if (isOpen) {
      timer = setTimeout(() => {
        setAlertModal({
          isOpen: false,
          message: '',
        });
        onClose();
      }, 800);
    }

    return () => clearTimeout(timer);
  }, [isOpen, onClose]);

  return (
    <Modal modalTitle={''} isOpen={isOpen} onClose={onClose} modalType={'SmallModal'} modalColor={theme.colors.white} color={theme.colors.darkBrown} fontSize={26} {...props}>
      <Styled.ModalInnerWrapper>
        {props.children}
      </Styled.ModalInnerWrapper>
    </Modal>
  );
}
