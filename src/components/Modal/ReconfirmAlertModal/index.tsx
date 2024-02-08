import React, { useEffect } from 'react';
import Modal from '@/components/Modal/Modal';
import theme from '@/theme';
import * as Styled from './style';
import SmallButton from '@/components/Button/SmallButton';

const buttonTypes = [
  { key: 'yes', name: '예' },
  { key: 'no', name: '아니요' },
];

export default function ReconfirmAlertModal({onClose, isOpen, ...props}) {
  return (
    <Modal modalTitle={''} isOpen={isOpen} onClose={onClose} modalType={'SmallModal'} modalColor={theme.colors.white} color={theme.colors.darkBrown} fontSize={20} {...props}>
      <Styled.ModalInnerWrapper>
        {props.children}
        <Styled.ButtonContainer>
          {buttonTypes.map((type) => (
            <SmallButton key={type.key}>
              {type.name}
            </SmallButton>
          ))}
        </Styled.ButtonContainer>
      </Styled.ModalInnerWrapper>
    </Modal>
  );
}
