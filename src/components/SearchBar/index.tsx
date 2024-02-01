import { useAutocomplete } from '@/hooks/useAutocomplete';
import * as Styled from './style';
import useInput from '@/hooks/useInput';
import useModal from '@/hooks/useModal';
import { ChangeEvent } from 'react';
import CloseButton from '@/components/Button/CloseButton/CloseButton';

export default function SearchBar() {
  const { value: searchTerm, handleChange: handleSearchChange, setValue: setSearchTerm, reset } = useInput<HTMLInputElement>();
  const { suggestions, handleSuggestionClick } = useAutocomplete(searchTerm);
  const { isOpen, openModal, closeModal } = useModal(false);

  return (
    <Styled.Container>
      <Styled.SearchInput
        type="text"
        placeholder="위치를 검색하세요."
        value={searchTerm}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleSearchChange(e);
          openModal();
        }}
      />
      {searchTerm && <CloseButton onClick={() => reset()} />}
      {isOpen && (
        <Styled.SuggestionsList
          onBlur={() => {
            closeModal();
          }}
        >
          {suggestions &&
            suggestions.map((suggestion) => (
              <Styled.SuggestionItem
                key={suggestion.id}
                onClick={() => {
                  handleSuggestionClick(suggestion);
                  setSearchTerm(suggestion.title);
                  closeModal();
                }}
              >
                {suggestion.title}
              </Styled.SuggestionItem>
            ))}
        </Styled.SuggestionsList>
      )}
    </Styled.Container>
  );
}
