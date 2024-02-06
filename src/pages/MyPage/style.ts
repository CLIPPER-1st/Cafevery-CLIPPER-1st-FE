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
  width: 340px;
  height: 2.5px;
  background-color: ${theme.colors.darkBrown};
  margin: 5px 0 5px 0;
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