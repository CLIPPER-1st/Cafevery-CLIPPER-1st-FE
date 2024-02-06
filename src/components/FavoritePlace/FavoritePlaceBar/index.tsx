import CloseButton from '@/components/Button/CloseButton';
import SearchBar from '@/components/Search/SearchBar';
import useInput from '@/hooks/useInput';
import useModal from '@/hooks/useModal';
import { FavoritePlaceBarProps } from '@/interfaces/searchBar';
import React, {useState} from 'react';

export function FavoritePlaceBar({
  children,
  placeholder,
}: FavoritePlaceBarProps) {
  const { isOpen, openModal, closeModal } = useModal(false);
  const { value, setValue, reset } = useInput();

  const handleClear = () => {
    setValue('');
  };

  return (
    <SearchBar
      isOpen={isOpen}
      openModal={openModal}
      closeModal={closeModal}
      placeholder={"이름"}
      width={250}
      position={"absolute"}
      onChange={(e) => setValue(e.target.value)}
      value={value}
      reset={reset}
    >
      {value && <CloseButton onClick={handleClear} />}
      {isOpen && children}
    </SearchBar>
  );
}
