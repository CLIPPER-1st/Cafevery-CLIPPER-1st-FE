import theme from '@/theme';
import styled from 'styled-components';

export const ProfileImage = styled.img`
  width: 183px;
  height: 183px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  border-radius: 100%;
`;

export const Line = styled.div`
  width: 100vw;
  max-width: 430px;
  height: 2.5px;
  background-color: ${theme.colors.darkBrown};
  position: relative;
`;

export const Text = styled.div`
  width: 100%;
  height: 24px;
  margin: 20px 0 20px 0;
  position: relative;
  color: ${theme.colors.darkBrown};
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

export const FullScreenMap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DiscriptionText = styled.div`
  font-size: 12px;
  position: relative;
  margin-top: 30px;
  height: 20px;
  color: ${theme.colors.gray};
`;

export const UnloginText = styled.div`
  font-size: 18px;
  color: ${theme.colors.darkBrown};
  width: 250px;
  height: 45px;
  margin: 20px 0 20px 0px;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SocialButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  position: relative;
`;