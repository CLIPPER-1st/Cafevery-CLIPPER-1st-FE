import styled, { keyframes } from 'styled-components';
import SplashIconImg from '@/assets/Splash/SplashIcon.png';
import theme from '@/theme';

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


export const Wrapper = styled.div`
  max-width: 430px;
  max-height: 932px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: transparent;

`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

export const LoadingIcon = styled.div`
  width: 116px;
  height: 150px;
  background-image: url(${SplashIconImg});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 38%;
  animation: ${floatAnimation} 1s ease-in-out infinite;
`;

export const LoadingText = styled.div`
  width: 116px;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 56%;
  text-align: center;
  animation: ${floatAnimation} 1s ease-in-out infinite;
  color: ${theme.colors.lightBrown};
`;
