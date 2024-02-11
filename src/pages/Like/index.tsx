import {likesListState} from '@/atoms/likesState';
import FilterButton from '@/components/Button/FilterButton';
import * as Styled from './style';
import {LikeSearchBar} from '@/components/Like/LikeSearchBar';
import PageLayout from '@/components/PageLayout/PageLayout';
import useModal from '@/hooks/useModal';
import {useEffect} from 'react';
import {useRecoilState, useRecoilValue} from 'recoil';
import FilterModal from '@/components/Modal/FilterModal';
import useInput from '@/hooks/useInput';
import BusinessToggle from '@/components/Like/BusinessToggle';
import { useLocation } from 'react-router-dom';
import { timeFilterState } from '@/atoms/timeFilter';
import { distanceState } from '@/atoms/distanceFilter';
import { LikeList } from '@/components/Like/LikeList';

export default function Like() {
  const {isOpen, openModal, closeModal} = useModal();
  const {value: searchTerm, setValue: setSearchTerm} = useInput();
  const nowUrl = useLocation();
  const [distance, ] = useRecoilState(distanceState(nowUrl.pathname));
  const timeFilter = useRecoilValue(timeFilterState(nowUrl.pathname));
  const [likesList, setLikesList] = useRecoilState(likesListState({distance: distance, startTime: timeFilter.minValue, endTime: timeFilter.maxValue})); //TODO: 임시
  //const cafeInfoList = useFetchCafeList(myLocation.latitude, myLocation.longitude); //TODO: 이런식으로 커스텀 훅 만들어서 api 호출

  useEffect(() => {
    fetch('/test/cafes/likes')
      .then((res) => res.json())
      .then((data) => {
        setLikesList(data.cafes);
      });
  }, []);

  const handleFilterModalOpen = () => {
    openModal();
  };

  useEffect(() => {
    if (searchTerm === '') {
      setLikesList(likesList);
    } else {
      const filtered = likesList.cafes.filter((like) =>
        like.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setLikesList({ cafes: filtered });
    }
  }, [searchTerm, likesList]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <PageLayout>
        <Styled.ButtonsWrapper>
          <FilterButton onClick={() => handleFilterModalOpen()} />
          <BusinessToggle />
        </Styled.ButtonsWrapper>
        <LikeSearchBar onSearch={handleSearch} />
        <LikeList />
      </PageLayout>

      {isOpen && <FilterModal isOpen={isOpen} onClose={closeModal} />}
    </>
  );
}
