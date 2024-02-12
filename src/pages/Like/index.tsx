import FilterButton from '@/components/Button/FilterButton';
import * as Styled from './style';
import {LikeSearchBar} from '@/components/Like/LikeSearchBar';
import PageLayout from '@/components/PageLayout/PageLayout';
import useModal from '@/hooks/useModal';
import FilterModal from '@/components/Modal/FilterModal';
import { Toggle } from '@/components/Toggle';
import { LikeList } from '@/components/Like/LikeList';

export default function Like() {
  const {isOpen, openModal, closeModal} = useModal();

  //const cafeInfoList = useFetchCafeList(myLocation.latitude, myLocation.longitude); //TODO: 이런식으로 커스텀 훅 만들어서 api 호출

  // useEffect(() => {
  //   fetch('/test/cafes/likes')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLikesList(data.cafes);
  //     });
  // }, []);

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
