import React from 'react';
import useInput from '@/hooks/useInput';
import * as Styled from './style';
import CloseButton from '@/components/Button/CloseButton/CloseButton';
import { SearchBarProps } from '@/interfaces/searchBar';

export function SearchBar({ children, isOpen, openModal, closeModal }: SearchBarProps) {
  const { value: searchTerm, handleChange: handleSearchChange, reset } = useInput();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(e);
    if (!isOpen) {
      openModal();
    }
  };

  return (
    <Styled.Container>
      <Styled.SearchInput
        type="text"
        placeholder="위치를 검색하세요."
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm && <CloseButton onClick={() => { reset(); closeModal(); }} />}
      {isOpen && children}
    </Styled.Container>
  );
};

export default SearchBar;
