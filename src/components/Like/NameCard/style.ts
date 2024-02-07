import styled, {css} from 'styled-components';
import theme from '@/theme';

interface Props {
  length: number;
}

export const Container = styled.div`
  width: 310px;
  height: 62px;
  background-color: ${theme.colors.brown};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  color: white;
`;

export const Wrapper = styled.div`
  margin-right: 20px;
`;

export const Address = styled.p`
  font-size: 12px;
  color: #a97953;
  margin: 0;
`;

export const Name = styled.p<Props>`
  font-size: 18px;
  color: #feffe7;
  margin: 0;

  ${(props) =>
    props.length > 10
      ? css`
          font-size: 11px;
        `
      : props.length > 8
        ? css`
            font-size: 13px;
          `
        : props.length > 6
          ? css`
              font-size: 16px;
            `
          : css`
              font-size: 18px;
            `}
`;

export const Info = styled.div`
  align-items: center;
  margin-right: 20px;
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
