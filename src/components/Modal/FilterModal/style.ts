import {styled} from 'styled-components';
import TimeFilterImg from '@/assets/FilterModalContents/TimeFilter.png';

export const ModalInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

export const SectionTitle = styled.div`
  width: 100%;
  height: 24px;
  font-size: 24px;
  margin: 14px;
`;

export const SectionText = styled.div`
  width: 100%;
  height: 24px;
  font-size: 16px;
  margin: 14px 0 6px 14px;
`;

export const Line = styled.div`
  width: 290px;
  height: 2px;
  background-color: #A97953;
  margin-top: 20px;
`;

export const TimeFilter = styled.div`
  background-image: url(${TimeFilterImg});
  width: 275px;
  height: 60px;
  background-size: 275px 60px;
  margin-bottom: 10px;
`;

export const DistanceFilter = styled.div`
  background-color: #FEFFE7;
  width: 275px;
  height: 180px;
  background-size: 275px 180px;
  border-radius: 10px;
  margin-bottom: 10px;

`;

export const SingleSlider = styled.input.attrs({ type: 'range' })`
  /* 슬라이더의 스타일링 */
`;