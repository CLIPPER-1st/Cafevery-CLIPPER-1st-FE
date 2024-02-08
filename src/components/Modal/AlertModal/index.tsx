import React, { useEffect } from 'react';
import Modal from '@/components/Modal/Modal';
import theme from '@/theme';
import * as Styled from './style';

export default function AlertModal({onClose, isOpen, ...props}) {

  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => {
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
