import {filteredLikesState, likesState} from '@/atoms/likesState';
import FilterButton from '@/components/Button/FilterButton';
import * as Styled from './style';
import {LikeList} from '@/components/Like/LikeList';
import {LikeSearchBar} from '@/components/Like/LikeSearchBar';
import PageLayout from '@/components/PageLayout/PageLayout';
import {Toggle} from '@/components/Toggle/Toggle';
import useModal from '@/hooks/useModal';
import {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import FilterModal from '@/components/Modal/FilterModal';
import useInput from '@/hooks/useInput';

export default function Like() {
  const [likes, setLikes] = useRecoilState(likesState);
  const {isOpen, openModal, closeModal} = useModal();
  const [filteredLikes, setFilteredLikes] = useRecoilState(filteredLikesState);
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

  useEffect(() => {
    if (!searchTerm) {
      setFilteredLikes(likes);
    } else {
      const filtered = likes.filter((like) =>
        like.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredLikes(filtered);
    }
  }, [searchTerm, likes]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <>
      <PageLayout>
        <Styled.ButtonsWrapper>
          <FilterButton onClick={() => handleFilterModalOpen()} />
          <Toggle />
        </Styled.ButtonsWrapper>
        <LikeSearchBar onSearch={handleSearch} />
        <LikeList likes={filteredLikes} searchTerm={searchTerm} />
      </PageLayout>

      {isOpen && <FilterModal isOpen={isOpen} onClose={closeModal} />}
    </>
  );
}
