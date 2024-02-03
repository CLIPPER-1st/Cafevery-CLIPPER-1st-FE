import styled from 'styled-components';

export const Container = styled.div`
  width: 315px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  display: flex;
  flex-direction: column;
`;
