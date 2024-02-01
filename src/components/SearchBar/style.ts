import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 1;
  top: 100px;
  width: 315px;
  height: 42px;
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

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const SuggestionsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: white;
  position: absolute;
  top: 50px;
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

