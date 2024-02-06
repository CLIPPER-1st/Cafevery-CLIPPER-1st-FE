import CloseButton from '@/components/Button/CloseButton';
import SearchBar from '@/components/Search/SearchBar';
import useInput from '@/hooks/useInput';
import { LikeSearchBarProps } from '@/interfaces/searchBar';

export function LikeSearchBar({
  children,
  isOpen,
  openModal,
  closeModal,
}: LikeSearchBarProps) {
  const { value, setValue, reset } = useInput();

  const handleClear = () => {
    setValue('');
  };

  return (
    <SearchBar
      isOpen={isOpen} 
      openModal={openModal} 
      closeModal={closeModal} 
      placeholder={'위치를 검색하세요.'}
      top={100}
      onChange={(e) => setValue(e.target.value)}
      value={value}
      reset={reset}
    >
      {value && <CloseButton onClick={handleClear} />}
      {isOpen && children}
    </SearchBar>
  );
}
