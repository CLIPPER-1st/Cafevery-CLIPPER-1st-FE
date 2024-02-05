import * as Styled from './style';
import Modal from '../Modal';
import { useMemo } from 'react';
import { TimeFilterSliderMemoized} from '@/components/Slider/TimeFilterSlider';
import { useRecoilState } from 'recoil';
import { timeFilterState } from '@/atoms/timeFilter';
import { DistanceSliderrMemoized } from '@/components/Slider/DistanceSlider';
import { distanceState } from '@/atoms/distanceFilter';

export default function FilterModal({onClose, isOpen}) {
  const [timeFilter, ] = useRecoilState(timeFilterState);
  const [distance, ] = useRecoilState(distanceState);

    // minValue와 maxValue를 기반으로 왼쪽과 오른쪽 흑백 영역의 너비를 계산
    const leftGrayWidth = useMemo(() => {
      return ((timeFilter.minValue) / 24) * 100; // 시간 비율을 백분율로 계산
    }, [timeFilter.minValue]);
  
    const rightGrayWidth = useMemo(() => {
      return (1 - (timeFilter.maxValue) / 24) * 100; // 시간 비율을 백분율로 계산
    }, [timeFilter.maxValue]);
  
  return (
    <Modal modalTitle={''} isOpen={isOpen} onClose={onClose} modalType={'Modal'} modalColor={'#32281F'}>
        <Styled.SectionTitle>{"운영 시간"}</Styled.SectionTitle>
        <Styled.SectionText>{`${timeFilter.minValue}:00 - ${timeFilter.maxValue}:00`}</Styled.SectionText>
        <Styled.ModalInnerWrapper>
          <Styled.TimeFilter>
            <Styled.TimeFilterGrayLeft widthPercent={leftGrayWidth}/>
            <Styled.TimeFilterGrayRight widthPercent={rightGrayWidth}/>
          </Styled.TimeFilter>
          <TimeFilterSliderMemoized />
        </Styled.ModalInnerWrapper>
        <Styled.Line />
        <Styled.SectionTitle>{"거리"}</Styled.SectionTitle>
        <Styled.SectionText>{`반경 ${distance}km`}</Styled.SectionText>
        <Styled.ModalInnerWrapper>
          <Styled.DistanceFilter />
          <DistanceSliderrMemoized />
        </Styled.ModalInnerWrapper>

    </Modal>
  );
}
