import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: center;
  z-index: 0;
  margin-top: 180px;
`;

export const Wrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  display: flex;
  flex-direction: column;
`;
