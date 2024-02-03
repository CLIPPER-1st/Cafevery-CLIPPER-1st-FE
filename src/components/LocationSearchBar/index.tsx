import {useAutocomplete} from '@/hooks/useAutocomplete';
import useInput from '@/hooks/useInput';
import useModal from '@/hooks/useModal';
import {SuggestionsList} from '@/components/SuggestionsList';
import {SearchBar} from '@/components/SearchBar';

export default function LocationSearchBar() {
  const { value: searchTerm, setValue: setSearchTerm } = useInput();
  const { suggestions, handleSuggestionClick } = useAutocomplete(searchTerm);
  const { isOpen, openModal, closeModal } = useModal(false);

  return (
    <SearchBar isOpen={isOpen} openModal={openModal} closeModal={closeModal}>
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
