import styled from 'styled-components';

export const SuggestionsList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: white;
    position: absolute;
    top: 47px;
    left: 0;
    width: 335px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 15px 15px;
    max-height: 300px;
    overflow-y: auto;
    z-index: 100;
`;

export const SuggestionItem = styled.li`
    padding: 10px;
    border-bottom: 1px solid #D9D9D9;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background-color: #D9D9D9;
    }
`;

