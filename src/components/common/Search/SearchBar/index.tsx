import React from 'react';
import useInput from '@/hooks/useInput';
import * as Styled from './style';
import CloseButton from '@/components/common/Button/CloseButton';
import { SearchBarProps } from '@/interfaces/searchBar';

export function SearchBar({ 
  children, 
  isOpen, 
  openModal, 
  closeModal, 
  placeholder,
  width,
  position,
  top,
  bottom,
  left,
  right,
  onChange,
  value,
  reset,
  margin,
  maxLength,
  defaultValue
}: SearchBarProps) {

  return (
    <Styled.Container
      position={position}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      width={width}
      margin={margin}
    >
      <Styled.SearchInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        defaultValue={defaultValue}
      />
      {value && <CloseButton onClick={() => { reset(); closeModal(); }} />}
      {isOpen && children}
    </Styled.Container>
  );
};

export default SearchBar;
