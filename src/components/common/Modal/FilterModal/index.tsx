import * as Styled from './style';
import Modal from '@/components/common/Modal';
import { useMemo } from 'react';
import { TimeFilterSliderMemoized} from '@/components/common/Modal/FilterModal/Filter/TimeFilterSlider';
import { useRecoilState } from 'recoil';
import { timeFilterState } from '@/atoms/timeFilter';
import { DistanceFilterSliderrMemoized } from '@/components/common/Modal/FilterModal/Filter/DistanceFilterSlider';
import { distanceState } from '@/atoms/distanceFilter';
import DistanceFilter from '@/components/common/Modal/FilterModal/Filter/DistanceFilter';
import CheckButton from '@/components/common/Button/CheckButton';
import { useLocation } from 'react-router-dom';
import theme from '@/theme';
import { FilterModalProps } from '@/interfaces/modal';

export default function FilterModal({ onClose, isOpen }: FilterModalProps) {
  const nowUrl = useLocation();
  const [{ minValue, maxValue }, ] = useRecoilState(timeFilterState(nowUrl.pathname));
  const [distance, ] = useRecoilState(distanceState(nowUrl.pathname));

    /* minValue와 maxValue를 기반으로 왼쪽과 오른쪽 흑백 영역의 너비를 계산 */
    const leftGrayWidth = useMemo(() => {
      return ((minValue) / 24) * 100; // 시간 비율을 백분율로 계산
    }, [minValue]);
  
    const rightGrayWidth = useMemo(() => {
      return (1 - (maxValue) / 24) * 100; // 시간 비율을 백분율로 계산
    }, [maxValue]);

    // 거리 텍스트를 조건부로 설정
    const distanceText = useMemo(() => {
      if (nowUrl.pathname === '/likes' && distance === 3) {
        return `반경 전체`;
      }
      return `반경 ${distance}km`;
    }, [distance, nowUrl.pathname]);

    const handleCheckbuttonClick = () => {
      onClose();
    }
  
  return (
    <Modal modalTitle={''} isOpen={isOpen} onClose={onClose} modalType={'Modal'} modalColor={theme.colors.brown} color={theme.colors.textMain} fontSize={20}>
        <Styled.SectionTitle>{"운영 시간"}</Styled.SectionTitle>
        <Styled.SectionText>{`${minValue}:00 - ${maxValue}:00`}</Styled.SectionText>
        <Styled.ModalInnerWrapper>
          <Styled.TimeFilter>
            <Styled.TimeFilterGrayLeft widthPercent={leftGrayWidth}/>
            <Styled.TimeFilterGrayRight widthPercent={rightGrayWidth}/>
          </Styled.TimeFilter>
          <TimeFilterSliderMemoized />
        </Styled.ModalInnerWrapper>
        <Styled.Line />
        <Styled.SectionTitle>{"거리"}</Styled.SectionTitle>
        <Styled.SectionText>{distanceText}</Styled.SectionText>
        <Styled.ModalInnerWrapper>
          <DistanceFilter />
          <DistanceFilterSliderrMemoized />
        </Styled.ModalInnerWrapper>
        <Styled.CheckButtonWrapper>
          <CheckButton onClick={() => handleCheckbuttonClick()}/>
        </Styled.CheckButtonWrapper>
    </Modal>
  );
}
