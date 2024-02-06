import CloseButton from '@/components/Button/CloseButton';
import SearchBar from '@/components/Search/SearchBar';
import React, {useState} from 'react';

interface SearchBarProps {
  children: React.ReactNode;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  placeholder: string;
  setSearchTerm: (value: string) => void;
}

export function LikeSearchBar({
  children,
  isOpen,
  openModal,
  closeModal,
  placeholder,
  setSearchTerm,
}: SearchBarProps) {
  const [searchTerm, setSearchTermLocal] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    setSearchTermLocal(newSearchTerm);

    if (!isOpen) {
      openModal();
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setSearchTermLocal('');
  };

  return (
    <SearchBar
      isOpen={isOpen}
      openModal={openModal}
      closeModal={closeModal}
      placeholder={placeholder}
    >
      {searchTerm && <CloseButton onClick={handleClear} />}
      {isOpen && children}
    </SearchBar>
  );
}
