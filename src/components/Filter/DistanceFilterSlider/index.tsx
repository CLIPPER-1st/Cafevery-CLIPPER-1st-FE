import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { distanceState } from '@/atoms/distanceFilter';
import * as Styled from './style';

export const DistanceFilterSlider = () => {
    const [distance, setDistance] = useRecoilState(distanceState);
    const handleDistanceChange = useCallback((e: { target: { value: string; }; }) => {
        const newDistance = parseFloat(e.target.value);
        setDistance(newDistance);
    }, [setDistance]);

    const sliderPercentage = ((distance - 0.5) / 2.5) * 100;

    return (
        <Styled.FilterDistanceWrap>
        <Styled.FilterDistanceSlide>
            <Styled.FilterDistanceSlideInner sliderPercentage={sliderPercentage} />
            <Styled.FilterDistanceRange
            type="range"
            min="0.5"
            max="3"
            step="0.5"
            value={distance.toString()}
            onChange={handleDistanceChange}
            />
        </Styled.FilterDistanceSlide>
        </Styled.FilterDistanceWrap>
    );
};

export const DistanceFilterSliderrMemoized = React.memo(DistanceFilterSlider);
