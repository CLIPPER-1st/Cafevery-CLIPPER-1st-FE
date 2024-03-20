import styled from 'styled-components';
import theme from '@/theme';

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div``;

export const Label = styled.label`
  left: 27px;
  font-size: 24px;
  color: ${theme.colors.darkBrown};
  position: absolute;
  top: 127px;
  left: 27px;
`;

export const Line = styled.div`
  width: 100vw;
  max-width: 430px;
  height: 2.5px;
  background-color: ${theme.colors.darkBrown};
  margin: 191px 0 5px 0;
  position: relative;
`;
