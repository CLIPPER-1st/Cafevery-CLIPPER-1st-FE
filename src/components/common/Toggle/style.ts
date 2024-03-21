import styled from 'styled-components';
import { ToggleProps } from '@/interfaces/toggle';
import theme from '@/theme';

export const ToggleButtonContainer = styled.div<ToggleProps>`
    position: absolute;
    z-index: 1;
    top: 60px;
    right: 0px;
    width: 85px;
    height: 30px;
    border-radius: 17px;
    background-color: ${props => (props.isOn ? `${theme.colors.brown}` : `${theme.colors.textMain}`)};
    cursor: pointer;
    transition: background-color 0.3s;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

export const ToggleButtonCircle = styled.div<ToggleProps>`
    position: absolute;
    top: 4px;
    left: ${props => (props.isOn ? '58px' : '5px')};
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: ${props => (props.isOn ? `${theme.colors.textMain}` : `${theme.colors.brown}`)};
    transition: left 0.3s;
`;

export const ToggleButtonText = styled.span<ToggleProps>`
    position: absolute;
    color: ${props => (props.isOn ? `${theme.colors.textMain}` : `${theme.colors.brown}`)};
    font-size: 12px;
    line-height: 32px;
    left: ${props => (props.isOn ? '15px' : '30px')};
    user-select: none;
`;
