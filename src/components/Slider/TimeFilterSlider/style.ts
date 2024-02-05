import { FilterTimeSlideInnerProps } from '@/interfaces/timeFilter';
import styled from 'styled-components';

export const FilterTimeWrap = styled.div`
    padding: 4px 0 4px 0;
`;

export const FilterTimeSlide = styled.div`
    position: relative;
    height: 15px;
    width: 280px;
    border-radius: 10px;
    background-color: #FEFFE7;
`;

export const FilterTimeSlideInner = styled.div<FilterTimeSlideInnerProps>`
    position: absolute;
    left: ${props => props.rangeMinPercent}%;
    right: ${props => props.rangeMaxPercent}%;
    height: 15px;
    border-radius: 10px;
    background-color: #A97953;
`;

export const FilterTimeRangeWrap = styled.div`
    position: relative;
`;

export const FilterTimeRange = styled.input`
    position: absolute;
    top: -13px;
    right: -2px;
    height: 7px;
    width: 100%;
    background: none;
    pointer-events: none;
    -webkit-appearance: none;

    &::-webkit-slider-thumb {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        border: 10px solid #FEFFE7;
        background-color: #A97953;
        pointer-events: auto;
        -webkit-appearance: none;
    }

    &::-moz-range-thumb {
        height: 30px;
        width: 30px;
        border: none;
        border-radius: 50%;
        background-color: #FEFFE7;
        pointer-events: auto;
        -moz-appearance: none;
    }
`;
