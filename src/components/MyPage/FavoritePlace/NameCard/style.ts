import styled from 'styled-components';
import theme from '@/theme';

export const Container = styled.div`
  width: 213px;
  height: 40px;
  background-color: ${theme.colors.white};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  padding: 2px 15px 2px 15px;
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Name = styled.p`
  font-size: 20px;
  color: ${theme.colors.darkBrown};
`;