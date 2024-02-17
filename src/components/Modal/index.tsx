import React from 'react';
import ReactDOM from 'react-dom';
import * as Styled from './style';
import { ModalProps } from '@/interfaces/modal';

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  modalTitle,
  modalType,
  modalColor,
  fontSize,
  color,
}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Styled.ModalWrapper show={isOpen} modalType={modalType} onClick={onClose}>
      <Styled.ModalContent
        onClick={(e: React.SyntheticEvent) => e.stopPropagation()}
        modalType={modalType}
        modalColor={modalColor}
        fontSize={fontSize}
        color={color}
      >
        <Styled.ModalInnerContent>
          <Styled.ModalTitle>{modalTitle}</Styled.ModalTitle>
          {children}
        </Styled.ModalInnerContent>
      </Styled.ModalContent>
    </Styled.ModalWrapper>,
    document.getElementById('modal-root') // 이것은 모달이 렌더링 될 대상 DOM 요소입니다.
  );
};

export default Modal;
