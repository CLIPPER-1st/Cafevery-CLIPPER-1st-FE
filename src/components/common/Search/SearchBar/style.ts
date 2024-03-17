import { SearchBarProps } from '@/interfaces/searchBar';
import styled from 'styled-components';

export interface ContainerProps {
    width?: number;
    position?: string;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    margin?: string;
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 12px;
    padding: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    position: ${props => props.position || 'fixed'};
    z-index: 1;
    top: ${props => props.top}px;
    bottom: ${props => props.bottom}px;
    left: ${props => props.left}px;
    right: ${props => props.right}px;
    width: ${props => props.width || 300}px;
    height: 36px;
    margin: ${props => props.margin};
`;


export const SearchInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
    margin-left: 10px;
    font-size: 18px;
    flex: 1;
    ::placeholder {
        color: #D9D9D9;
    }
`;
