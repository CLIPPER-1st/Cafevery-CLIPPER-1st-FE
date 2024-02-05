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

interface TimeFilterGrayAreaProps {
  widthPercent: number;
}

export const TimeFilterGrayLeft = styled.div<TimeFilterGrayAreaProps>`
  background: rgba(0, 0, 0, 0.6);
  margin-top: 3.5px;
  width: ${props => (280 * props.widthPercent) / 100}px;
  height: 53px;
  background-size: 275px 60px;
  position: absolute;
  left: 23.5px;
  border-radius: 9px 0 0 9px;
`;

export const TimeFilterGrayRight = styled.div<TimeFilterGrayAreaProps>`
  background: rgba(0, 0, 0, 0.6);
  margin-top: 3.5px;
  width: ${props => (280 * props.widthPercent) / 100}px;
  height: 53px;
  background-size: 275px 60px;
  position: absolute;
  right: 23.5px;
  border-radius: 0 9px 9px 0 ;
`;

export const CheckButtonWrapper = styled.div`
  position: absolute;
  right: 5px;
  bottom: 5px;
`;

