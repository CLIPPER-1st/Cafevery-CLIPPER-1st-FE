import styled from 'styled-components';
import theme from '@/theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0 20px 0;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 9px;
  position: relative;
  left: 27px;
`;

export const Label = styled.label`
  font-size: 18px;
  position: relative;
  left: 27px;
  color: ${theme.colors.darkBrown};
`;
