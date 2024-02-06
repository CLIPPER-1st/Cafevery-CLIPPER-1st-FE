import CloseButton from '@/components/Button/CloseButton';
import SearchBar from '@/components/Search/SearchBar';
import useInput from '@/hooks/useInput';
import useModal from '@/hooks/useModal';
import { FavoritePlaceBarProps } from '@/interfaces/searchBar';

export function FavoritePlaceBar({
  children,
}: FavoritePlaceBarProps) {
  const { isOpen, openModal, closeModal } = useModal(false);
  const { value, setValue, reset } = useInput();

  const handleClear = () => {
    setValue('');
  };
  
  const handleInputChange = (e: { target: { value: any; }; }) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 8) {
      setValue(inputValue);
    }
  };

  return (
    <SearchBar
      isOpen={isOpen}
      openModal={openModal}
      closeModal={closeModal}
      placeholder={"이름"}
      width={250}
      onChange={handleInputChange}
      value={value}
      reset={reset}
      left={0}
    >
      {value && <CloseButton onClick={handleClear} />}
      {isOpen && children}
    </SearchBar>
  );
}
