import { useAutocomplete } from '@/hooks/useAutocomplete';
import useInput from '@/hooks/useInput';
import useModal from '@/hooks/useModal';
import { SuggestionsList } from '@/components/Search/SuggestionsList';
import { SearchBar } from '@/components/Search/SearchBar';

export default function LocationSearchBar() {
  const { value: searchTerm, setValue: setSearchTerm, reset } = useInput();
  const { suggestions, handleSuggestionClick } = useAutocomplete(searchTerm);
  const { isOpen, openModal, closeModal } = useModal();

  const handleChangeAndOpenModal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); 
    if (!isOpen) {
      openModal();
    }
  };

  return (
    <SearchBar 
      isOpen={isOpen} 
      openModal={openModal} 
      closeModal={closeModal} 
      placeholder={'위치를 검색하세요.'}
      top={100}
      onChange={handleChangeAndOpenModal}
      value={searchTerm}
      reset={reset}
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
