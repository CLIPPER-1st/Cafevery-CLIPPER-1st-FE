import {useAutocomplete} from '@/hooks/useAutocomplete';
import useInput from '@/hooks/useInput';
import useModal from '@/hooks/useModal';
import {SuggestionsList} from '@/components/Search/SuggestionsList';
import {SearchBar} from '@/components/Search/SearchBar';

export default function LocationSearchBar() {
  const { value: searchTerm, setValue: setSearchTerm } = useInput();
  const { suggestions, handleSuggestionClick } = useAutocomplete(searchTerm);
  const { isOpen, openModal, closeModal } = useModal(false);

  return (
    <SearchBar 
      isOpen={isOpen} 
      openModal={openModal} 
      closeModal={closeModal} 
      placeholder={'위치를 검색하세요.'}
    >
      {isOpen && (
        <SuggestionsList
          suggestions={suggestions}
          onSuggestionClick={(suggestion) => {
            handleSuggestionClick(suggestion);
            setSearchTerm(suggestion.title);
            closeModal();
          }}
        />
      )}
    </SearchBar>
  );
};
