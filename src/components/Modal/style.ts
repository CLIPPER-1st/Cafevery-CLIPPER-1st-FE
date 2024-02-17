import styled, { css, keyframes } from 'styled-components';
import { ModalContentProps, ModalWrapperProps} from '@/interfaces/modal';
import theme from '@/theme';

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const ModalWrapper = styled.div<ModalWrapperProps & { modalType?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 999;
  background-color: ${(props) => props.modalType === 'SummaryModal' ? 'transparent' : 'rgba(0, 0, 0, 0.5)'};
  backdrop-filter: ${(props) => props.modalType === 'SummaryModal' ? 'none' : 'blur(5px)'};
  ${(props) =>
    props.modalType !== 'SummaryModal' &&
    css`
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background: transparent;
      }
    `}
`;



const getModalSize = (
  modalType?: 'SmallModal' | 'Modal' | 'SummaryModal' | 'MediumModal',
) => {
  switch (modalType) {
    case 'SmallModal':
      return {width: '315px', height: '120px', backgroundSize: '300px 120px'};
    case 'MediumModal':
      return {width: '315px', height: '400px', backgroundSize: '300px 400px'};
    case 'Modal':
      return {width: '315px', height: '600px', backgroundSize: '315px 600px'};
    case 'SummaryModal':
      return {width: '315px', height: '200px', backgroundSize: '300px 200px'};
    default:
      return {width: '300px', height: '600px', backgroundSize: '300px 600px'}; // 기본값
  }
};

// 아래에서 위로 올라가는 애니메이션 정의
// 세로 모드용 애니메이션
export const slideUpAnimationPortrait = keyframes`
  from { transform: translate(-50%, 100%); }
  to { transform: translate(-50%, -20%); }
`;

export const slideUpAnimationLandscapeRanking = keyframes`
  from { transform: translate(-50%, 100%); }
  to { transform: translate(-50%, -20%); }
`;

// 가로 모드용 애니메이션
export const slideUpAnimationLandscape = keyframes`
  from { transform: translate(-50%, 100%); }
  to { transform: translate(-50%, -3%); }
`;

export const ModalContent = styled.div<ModalContentProps>`
  position: fixed;
  top: ${(props) => props.modalType === 'SummaryModal' ? 'auto' : '50%'};
  bottom: ${(props) => props.modalType === 'SummaryModal' ? '15%' : 'auto'};
  left: 50%;
  transform: ${(props) => props.modalType === 'SummaryModal' ? 'translate(-50%, 0)' : 'translate(-50%, -50%)'};
  background-color: ${(props) => props.modalColor};
  background-repeat: no-repeat;
  background-position: center;
  box-sizing: border-box;
  ${({modalType}) => {
    const {width, height, backgroundSize} = getModalSize(modalType);
    return css`
      width: ${width};
      height: ${height};
      background-size: ${backgroundSize};
      border-radius: 20px;
      padding: 15px;
      animation: ${modalType === 'SummaryModal' ? slideUpAnimationPortrait : 'none'} 0.2s ease-out forwards;
    `;
  }}
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
  overflow: hidden;
`;


export const ModalInnerContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ModalTitle = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  color: ${theme.colors.darkBrown};
  font-size: 20px;
  overflow-y: auto;
  white-space: pre;
  overflow: hidden;
`;

