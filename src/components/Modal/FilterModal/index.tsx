import * as Styled from './style';
import Modal from '../Modal';
import { useEffect, useMemo, useState } from 'react';
import {TimeFilterSlider, TimeFilterSliderMemoized} from '@/components/TimeFilterSlider';
import { useRecoilState } from 'recoil';
import { timeFilterState } from '@/atoms/timeFilter';

export default function FilterModal({onClose, isOpen}) {
  const [timeFilter, setTimeFilter] = useRecoilState(timeFilterState);
  const [distance, setDistance] = useState(3);
  
  return (
    <Modal modalTitle={''} isOpen={isOpen} onClose={onClose} modalType={'Modal'} modalColor={'#32281F'}>
        <Styled.SectionTitle>{"운영 시간"}</Styled.SectionTitle>
        <Styled.SectionText>{`${timeFilter.minValue}:00 - ${timeFilter.maxValue}:00`}</Styled.SectionText>
        <Styled.ModalInnerWrapper>
          <Styled.TimeFilter />
          <TimeFilterSliderMemoized />
        </Styled.ModalInnerWrapper>
        <Styled.Line />
        <Styled.SectionTitle>{"거리"}</Styled.SectionTitle>
        <Styled.SectionText>{`반경 ${distance}km`}</Styled.SectionText>
        <Styled.ModalInnerWrapper>
          <Styled.DistanceFilter />
          <Styled.SingleSlider
            min="0"
            max="3"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            /* 단일 슬라이더의 나머지 속성들 */
          />
        </Styled.ModalInnerWrapper>

    </Modal>
  );
}
