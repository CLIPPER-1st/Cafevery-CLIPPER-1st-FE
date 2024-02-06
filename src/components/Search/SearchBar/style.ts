import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 12px;
    padding: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    position: fixed;
    z-index: 4;
    top: 100px;
    width: 315px;
    height: 36px;
`;

export const SearchInput = styled.input`
    border: none;
    outline: none;
    margin-left: 10px;
    font-size: 18px;
    flex: 1;
    ::placeholder {
        color: #D9D9D9;
    }
`;
