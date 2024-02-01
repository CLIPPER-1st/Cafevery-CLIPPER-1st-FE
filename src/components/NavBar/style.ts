import { styled } from "styled-components";
import theme from '@/theme';

export const Container = styled.div`
    width: 100vw;
    max-width: 430px;
    overflow-x: hidden;
    height: 80px;
    background-color: ${theme.colors.white};
    bottom: 0;
    position: absolute;
    box-shadow: 0px -6px 6px -1px rgba(0, 0, 0, 0.1), 0px -2px 4px -1px rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
