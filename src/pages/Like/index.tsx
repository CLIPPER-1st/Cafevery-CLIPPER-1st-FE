import FilterButton from '@/components/common/Button/FilterButton';
import * as Styled from './style';
import {LikeSearchBar} from '@/components/Like/LikeSearchBar';
import PageLayout from '@/components/common/PageLayout';
import useModal from '@/hooks/useModal';
import FilterModal from '@/components/common/Modal/FilterModal';
import { Toggle } from '@/components/common/Toggle';
import LikeList from '@/components/Like/LikeList';
import { useFetchCafeLikes } from '@/hooks/useFetchCafeLikes';
import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { likesListState } from '@/atoms/likesState';
import { showSplashState } from '@/atoms/showSplashState';
import Splash from '@/components/common/Splash';

export default function Like() {
  const {isOpen, openModal, closeModal} = useModal();
  const {data, isLoading} = useFetchCafeLikes();
  const setLikeListState = useSetRecoilState(likesListState({distance: 3, startTime: 0, endTime: 24, searchTerm: ''}));
  const [showSplash ,setShowSplash] = useRecoilState(showSplashState);

  useEffect(() => {
    if (!isLoading && data) {
      setShowSplash(true);
      setLikeListState({cafes: data});
    }
  }, [data, isLoading]);

  const handleFilterModalOpen = () => {
    openModal();
  };

  return (
    <>
      {showSplash && (
        <Splash
          showSplash={showSplash}
          onAnimationEnd={() => setShowSplash(false)} // 애니메이션 종료 시 상태 업데이트
        />
      )}
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
