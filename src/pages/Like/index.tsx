import {likesState} from '@/atoms/likesState';
import FilterButton from '@/components/Button/FilterButton';
import * as Styled from './style';
import {LikeList} from '@/components/Like/LikeList';
import {LikeSearchBar} from '@/components/Like/LikeSearchBar';
import PageLayout from '@/components/PageLayout/PageLayout';
import {Toggle} from '@/components/Toggle/Toggle';
import useModal from '@/hooks/useModal';
import {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import SearchBar from '@/components/Search/SearchBar';
import FilterModal from '@/components/Modal/FilterModal';
import useInput from '@/hooks/useInput';
import TempModal from '@/components/Modal/TempModal';

export default function Like() {
  const [likes, setLikes] = useRecoilState(likesState);
  const {isOpen, openModal, closeModal} = useModal();
  const {value: searchTerm, setValue: setSearchTerm, reset} = useInput();

  useEffect(() => {
    fetch('/test/cafes/likes')
      .then((res) => res.json())
      .then((data) => {
        setLikes(data.cafes);
      });
  }, []);

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
        <SearchBar
          placeholder={'이름으로 검색하기.'}
          isOpen={false}
          openModal={function (): void {}}
          closeModal={function (): void {}}
          top={100}
          reset={reset}
        />
        <LikeList likes={likes} searchTerm={searchTerm} />
      </PageLayout>

      {isOpen && <TempModal isOpen={isOpen} onClose={closeModal} />}
    </>
  );
}
