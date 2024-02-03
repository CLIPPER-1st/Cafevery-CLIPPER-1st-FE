import {styled} from 'styled-components';

export const ModalInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  margin-top: 68px;
`;

export const GuestBookContent = styled.div`
  width: 217px;
  height: 138px;
  background: rgba(87, 46, 22, 0.15);
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  overflow: auto;
`;

export const AuthorName = styled.div`
  background-size: 50px 21px;
  width: 50px;
  height: 21px;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 14px;
`;