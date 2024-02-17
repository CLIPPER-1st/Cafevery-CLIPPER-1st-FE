import FilterButton from '@/components/Button/FilterButton';
import * as Styled from './style';
import {LikeSearchBar} from '@/components/Like/LikeSearchBar';
import PageLayout from '@/components/PageLayout/PageLayout';
import useModal from '@/hooks/useModal';
import FilterModal from '@/components/Modal/FilterModal';
import { Toggle } from '@/components/Toggle';
import { LikeList } from '@/components/Like/LikeList';
import { useFetchCafeLikes } from '@/hooks/useFetchCafeLikes';
import { useLoginStatus } from '@/hooks/useLoginStatus';

export default function Like() {
  const {isOpen, openModal, closeModal} = useModal();
  //useFetchCafeLikes();

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
