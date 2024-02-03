import styled from 'styled-components';
import theme from '@/theme';

export const Container = styled.div`
  width: 315px;
  height: 62px;
  background-color: ${theme.colors.brown};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  color: white;
  marign: 10px 0;
`;

export const Wrapper = styled.div`
  margin-right: 40px;
`;

export const Address = styled.p`
  font-size: 12px;
  color: #a97953;
  margin: 0;
`;

export const Name = styled.p`
  font-size: 18px;
  color: #feffe7;
  margin: 0;
`;

export const Info = styled.div`
  align-items: center;
`;

export const Business = styled.p`
  font-size: 12px;
  color: #feffe7;
  margin: 0;
`;

export const State = styled.div`
  margin: 0;
`;

export const Likes = styled.span`
  font-size: 12px;
  margin-right: 10px;
  color: #feffe7;
`;

export const Distance = styled.span`
  font-size: 12px;
  color: #feffe7;
`;

export const Liked = styled.div``;
