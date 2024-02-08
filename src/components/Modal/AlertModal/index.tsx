import React, { useEffect } from 'react';
import Modal from '@/components/Modal/Modal';
import theme from '@/theme';
import * as Styled from './style';
import { useRecoilState } from 'recoil';
import { alertModalState } from '@/atoms/modalState';

export default function AlertModal({onClose, isOpen, ...props}) {
  const [alertModal, setAlertModal] = useRecoilState(alertModalState);

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
