import CloseButton from '@/components/Button/CloseButton';
import SearchBar from '@/components/Search/SearchBar';
import useInput from '@/hooks/useInput';
import useModal from '@/hooks/useModal';

export function LikeSearchBar({onSearch}) {
  const {value: searchTerm, setValue: setSearchTerm} = useInput();
  const {isOpen, openModal, closeModal} = useModal();

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  const handleChange = (e: {target: {value: string}}) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <SearchBar
      isOpen={isOpen}
      openModal={openModal}
      closeModal={closeModal}
      placeholder={'이름으로 검색하기.'}
      top={100}
      onChange={handleChange}
      value={searchTerm}
      reset={handleClear}
    >
      {searchTerm && <CloseButton onClick={handleClear} />}
    </SearchBar>
  );
}
