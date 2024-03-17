import styled from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  z-index: 0;
  top: 180px;
  height: 68vh;
  z-index: 1;
  align-items: center;
  overflow-y: auto;
  position: fixed;

  @media (max-height: 740px) {
    height: 63vh;
  }

  @media (max-height: 667px) {
    height: 58vh;
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
