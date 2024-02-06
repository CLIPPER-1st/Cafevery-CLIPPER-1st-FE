import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  z-index: 0;
  top: 180px;
  height: 70vh;
  z-index: 1;
  align-items: center;
  overflow-y: auto;
  position: fixed;

  @media (max-height: 740px) {
    height: 65vh;
  }

  @media (max-height: 667px) {
    height: 60vh;
  }
`;

export const Wrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
`;
