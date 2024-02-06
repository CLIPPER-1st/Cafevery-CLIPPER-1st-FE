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
  marign: 10px 0;
`;

export const BlurredBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Wrapper = styled.div`
  margin-right: 40px;
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
