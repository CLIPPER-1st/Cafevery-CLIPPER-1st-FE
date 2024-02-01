import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 100px;
    width: 100%;
    max-width: 315px;
    z-index: 1;
`;

export const CenteredButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;