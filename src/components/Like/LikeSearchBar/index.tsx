import CloseButton from '@/components/common/Button/CloseButton';
import SearchBar from '@/components/common/Search/SearchBar';
import useInput from '@/hooks/useInput';
import useModal from '@/hooks/useModal';
import { useSetRecoilState } from 'recoil';
import { searchTermState } from '@/atoms/input';

export function LikeSearchBar() {
  const {value: searchTerm, setValue: setSearchTerm} = useInput();
  const {isOpen, openModal, closeModal} = useModal();
  const setLikesSearchTerm = useSetRecoilState(searchTermState)
  
  const handleClear = () => {
    setSearchTerm('');
    setLikesSearchTerm('');
  };

  const handleChange = (e: {target: {value: string}}) => {
    const value = e.target.value;
    setSearchTerm(value);
    setLikesSearchTerm(value);
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
