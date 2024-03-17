import FilterButton from '@/components/Button/FilterButton';
import * as Styled from './style';
import {LikeSearchBar} from '@/components/Like/LikeSearchBar';
import PageLayout from '@/components/PageLayout';
import useModal from '@/hooks/useModal';
import FilterModal from '@/components/Modal/FilterModal';
import { Toggle } from '@/components/Toggle';
import LikeList from '@/components/Like/LikeList';
import { useFetchCafeLikes } from '@/hooks/useFetchCafeLikes';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { likesListState } from '@/atoms/likesState';


export default function Like() {
  const {isOpen, openModal, closeModal} = useModal();
  const {data, isSuccess} = useFetchCafeLikes();
  const setLikeListState = useSetRecoilState(likesListState({distance: 3, startTime: 0, endTime: 24, searchTerm: ''}));
  
  useEffect(() => {
    if (isSuccess && data) {
      setLikeListState({cafes: data});
    }
  }, [data, isSuccess]);

  const handleFilterModalOpen = () => {
    openModal();
  };

  return (
    <>
      <PageLayout>
        <Styled.ButtonsWrapper>
          <FilterButton onClick={() => handleFilterModalOpen()} />
          <Toggle />
        </Styled.ButtonsWrapper>
        <LikeSearchBar />
        <LikeList />
      </PageLayout>

      {isOpen && <FilterModal isOpen={isOpen} onClose={closeModal} />}
    </>
  );
}
