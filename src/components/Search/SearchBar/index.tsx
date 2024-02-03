import React from 'react';
import useInput from '@/hooks/useInput';
import * as Styled from './style';
import CloseButton from '@/components/Button/CloseButton';
import { SearchBarProps } from '@/interfaces/searchBar';

export function SearchBar({ 
  children, 
  isOpen, 
  openModal, 
  closeModal, 
  placeholder 
}: SearchBarProps) {
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
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
      />
      {searchTerm && <CloseButton onClick={() => { reset(); closeModal(); }} />}
      {isOpen && children}
    </Styled.Container>
  );
};

export default SearchBar;
