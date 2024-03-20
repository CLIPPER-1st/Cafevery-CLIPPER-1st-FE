import { selectedPlaceNameState } from '@/atoms/input';
import CloseButton from '@/components/common/Button/CloseButton';
import SearchBar from '@/components/common/Search/SearchBar';
import useModal from '@/hooks/useModal';
import { FavoritePlaceBarProps } from '@/interfaces/searchBar';
import { useRecoilState } from 'recoil';

export function FavoritePlaceBar({
  children,
}: FavoritePlaceBarProps) {
  const { isOpen, openModal, closeModal } = useModal(false);
  const [selectedPlaceName, setSelectedPlaceName] = useRecoilState(selectedPlaceNameState);

  const handleClear = () => {
    setSelectedPlaceName('');
  };
  
  const handleInputChange = (e: { target: { value: string; }; }) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 8) {
      setSelectedPlaceName(inputValue);
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
      value={selectedPlaceName}
      reset={handleClear}
      left={0}
    >
      {selectedPlaceName && <CloseButton />}
      {isOpen && children}
    </SearchBar>
  );
}
