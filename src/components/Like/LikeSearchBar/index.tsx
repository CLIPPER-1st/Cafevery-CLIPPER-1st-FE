import { likesListState } from '@/atoms/likesState';
import CloseButton from '@/components/Button/CloseButton';
import SearchBar from '@/components/Search/SearchBar';
import useInput from '@/hooks/useInput';
import useModal from '@/hooks/useModal';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { timeFilterState } from '@/atoms/timeFilter';
import { distanceState } from '@/atoms/distanceFilter';
import { searchTermState } from '@/atoms/input';

export function LikeSearchBar() {
  const {value: searchTerm, setValue: setSearchTerm} = useInput();
  const {isOpen, openModal, closeModal} = useModal();
  const nowUrl = useLocation();
  const [distance, ] = useRecoilState(distanceState(nowUrl.pathname));
  const timeFilter = useRecoilValue(timeFilterState(nowUrl.pathname));
  const [likesSearchTerm, setLikesSearchTerm] = useRecoilState(searchTermState)
  const [likeListState, setLikeListState] = useRecoilState(likesListState({distance: distance, startTime: timeFilter.minValue, endTime: timeFilter.maxValue, searchTerm: likesSearchTerm}));
  
  const handleClear = () => {
    setSearchTerm('');
    setLikesSearchTerm('');
  };

  const handleChange = (e: {target: {value: string}}) => {
    const value = e.target.value;
    setSearchTerm(value);
    setLikesSearchTerm(value);
  };


  useEffect(() => {
    if (searchTerm === '') {
      setLikeListState(likeListState);
    } else {
      const filtered = likeListState.cafes.filter((like) =>
        like.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setLikeListState({ cafes: filtered });
    }
  }, [searchTerm]);

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
