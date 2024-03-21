import MyMarkerImg from '@/assets/Markers/MyMarker.png';
import { CircleProps } from "@/interfaces/distanceFilter";
import { styled } from "styled-components";
import theme from '@/theme';

export const Circle = styled.div<CircleProps>`
    background: rgba(169, 121, 83, 0.35);
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    border-radius: 50%;
    position: absolute;
`;

export const MyMarker = styled.div`
    background: url(${MyMarkerImg});
    width: 30px;
    height: 30px;
    background-size: 30px 30px;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
`;

export const DistanceFilter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.textMain};
    width: 270px;
    height: 180px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    margin-bottom: 15px;
`;