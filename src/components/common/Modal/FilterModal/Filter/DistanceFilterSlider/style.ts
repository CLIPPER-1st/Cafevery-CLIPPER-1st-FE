// style.ts
import { FilterDistanceSlideInnerProps } from '@/interfaces/distanceFilter';
import styled from 'styled-components';

export const FilterDistanceWrap = styled.div`
    padding: 4px 0 4px 0;
`;

export const FilterDistanceSlide = styled.div`
    position: relative;
    height: 15px;
    width: 280px;
    border-radius: 10px;
    background-color: #FEFFE7;
`;

export const FilterDistanceSlideInner = styled.div<FilterDistanceSlideInnerProps>`
    position: absolute;
    height: 15px;
    width: ${props => props.sliderPercentage}%;
    background-color: #A97953;
    border-radius: 10px 0 0 10px;
    left: -1.5px;

`;

export const FilterDistanceRange = styled.input`
    -webkit-appearance: none;
    position: absolute;
    top: -10px;
    left: -1.5px;
    width: 100%;
    background: transparent;
    pointer-events: auto;

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        border: 10px solid #FEFFE7;
        background-color: #A97953;
    }
`;
