// TimeFilterSlider.tsx
import React, { useCallback, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { timeFilterState } from '@/atoms/timeFilter';
import * as Styled from './style';
import { useLocation } from 'react-router-dom';

export function TimeFilterSlider() {
    const nowUrl = useLocation();
    const [{ minValue, maxValue }, setTimeFilter] = useRecoilState(timeFilterState(nowUrl.pathname));

    const minGap = 3; 

    const handleMinTimeChange = useCallback((e) => {
        const inputTime = Number(e.target.value);
        if (inputTime < maxValue - minGap) {
            setTimeFilter(current => ({ ...current, minValue: inputTime }));
        }
    }, [maxValue, setTimeFilter]);

    const handleMaxTimeChange = useCallback((e) => {
        const inputTime = Number(e.target.value);
        if (inputTime > minValue + minGap) {
            setTimeFilter(current => ({ ...current, maxValue: inputTime }));
        }
    }, [minValue, setTimeFilter]);

    const { rangeMinPercent, rangeMaxPercent } = useMemo(() => {
        const minPercent = (minValue / 24) * 100;
        const maxPercent = 100 - ((maxValue / 24) * 100);
        return { rangeMinPercent: minPercent, rangeMaxPercent: maxPercent };
    }, [minValue, maxValue]);

    return (
        <Styled.FilterTimeWrap>
            <Styled.FilterTimeSlide>
                <Styled.FilterTimeSlideInner rangeMinPercent={rangeMinPercent} rangeMaxPercent={rangeMaxPercent} />
            </Styled.FilterTimeSlide>
            <Styled.FilterTimeRangeWrap>
                <Styled.FilterTimeRange
                    type="range"
                    min="0"
                    max="23"
                    value={minValue}
                    onChange={handleMinTimeChange}
                />
                <Styled.FilterTimeRange
                    type="range"
                    min="1"
                    max="24"
                    value={maxValue}
                    onChange={handleMaxTimeChange}
                />
            </Styled.FilterTimeRangeWrap>
        </Styled.FilterTimeWrap>
    );
};

export const TimeFilterSliderMemoized = React.memo(TimeFilterSlider);
