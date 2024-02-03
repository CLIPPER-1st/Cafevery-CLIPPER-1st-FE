import FilterButton from '@/components/Button/FilterButton';
import {LikeList} from '@/components/Like/LikeList';
import PageLayout from '@/components/PageLayout/PageLayout';
import SearchBar from '@/components/Search/SearchBar';
import {Toggle} from '@/components/Toggle/Toggle';
import useModal from '@/hooks/useModal';
import {Likes} from '@/interfaces/likes';
import {useEffect, useState} from 'react';

export default function Like() {
  const [likes, setLikes] = useState<Likes[]>([]);
  const {isOpen, openModal, closeModal} = useModal();

  useEffect(() => {
    fetch('/test/cafes/likes')
      .then((res) => res.json())
      .then((data) => {
        setLikes(data.cafes);
      });
  }, []);

  return (
    <PageLayout>
      <FilterButton />
      <Toggle />
      <SearchBar
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        placeholder="이름으로 검색하기."
      />
      <LikeList likes={likes} />
    </PageLayout>
  );
}
