import styled, { keyframes } from 'styled-components';
import SplashIconImg from '@/assets/Splash/SplashIcon.png';

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 932px;
  min-height: 850px;
  overflow-x: hidden;
`;


export const Wrapper = styled.div`
  z-index: 10;
  width: 100vw;
  max-width: 430px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: linear-gradient(10deg, #FED2A1 0%, #A97953 100%);
`;

// 둥실둥실 떠다니는 효과를 위한 keyframes 정의
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-25px); }
  100% { transform: translateY(0px); }
`;

// SplashIcon 스타일링과 애니메이션 적용
export const SplashIcon = styled.div`
  width: 232.57px;
  height: 300.9px;
  background-image: url(${SplashIconImg});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 30%;
  animation: ${floatAnimation} 2s ease-in-out infinite;
`;