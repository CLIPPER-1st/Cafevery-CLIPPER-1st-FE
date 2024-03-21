import styled, { css, keyframes } from 'styled-components';
import SplashIconImg from '@/assets/Splash/SplashIcon.png';

interface WrapperProps {
  animateOut: boolean;
}

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  position: fixed; /* 이 부분을 fixed로 변경 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100; /* Splash가 다른 컴포넌트 위에 오도록 z-index 설정 */
`;


const slideOutRight = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
`;

export const Wrapper = styled.div<WrapperProps>`
  max-width: 430px;
  max-height: 932px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* 이것은 그대로 유지 */
  background: linear-gradient(10deg, #e6d5ce 0%, #815f51 100%);

  ${({ animateOut }) =>
    animateOut &&
    css`
      animation: ${slideOutRight} 0.5s forwards;
    `}
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

export const SplashIcon = styled.div`
  width: 232.57px;
  height: 300.9px;
  background-image: url(${SplashIconImg});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 30%;
  animation: ${floatAnimation} 3s ease-in-out infinite;
`;
