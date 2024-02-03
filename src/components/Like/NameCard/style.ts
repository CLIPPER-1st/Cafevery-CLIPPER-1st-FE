import styled from 'styled-components';
import theme from '@/theme';

export const Container = styled.div`
  width: 315px;
  height: 62px;
  background-color: ${theme.colors.brown};
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
  padding: 16px;
  color: white;
`;
