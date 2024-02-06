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

export default function Like() {
  const [likes, setLikes] = useRecoilState(likesState);
  const {isOpen, openModal, closeModal} = useModal();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/test/cafes/likes')
      .then((res) => res.json())
      .then((data) => {
        setLikes(data.cafes);
      });
  }, []);

  return (
    <PageLayout>
      <Styled.ButtonsWrapper>
        <FilterButton />
        <Toggle />
      </Styled.ButtonsWrapper>
      <LikeSearchBar
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        placeholder="이름으로 검색하기."
        setSearchTerm={setSearchTerm}
        children={''}
      ></LikeSearchBar>
        <LikeList likes={likes} searchTerm={searchTerm} />
    </PageLayout>
  );
}
