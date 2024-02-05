import {likesState} from '@/atoms/likesState';
import FilterButton from '@/components/Button/FilterButton';
import {LikeList} from '@/components/Like/LikeList';
import PageLayout from '@/components/PageLayout/PageLayout';
import SearchBar from '@/components/Search/SearchBar';
import {Toggle} from '@/components/Toggle/Toggle';
import useModal from '@/hooks/useModal';
import {useEffect} from 'react';
import {useRecoilState} from 'recoil';

export default function Like() {
  const [likes, setLikes] = useRecoilState(likesState);
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
