import DeleteFavoritePlaceButton from '@/components/MyPage/DeleteFavoritePlaceButton';
import ReconfirmAlertModal from '@/components/MyPage/ReconfirmAlertModal';
import useModal from '@/hooks/useModal';
import { ILocation } from '@/interfaces/userInfo';
import * as Styled from './style';

export default function NameCard({ id, name, latitude, longitude }: ILocation) {
  const {isOpen, 
    openModal, 
    closeModal
  } = useModal();
  //TODO: 이 namecard를 클릭하면 해당 위치로 이동하게끔 구현해야함
  return (
    <>
      <Styled.Container>
        <Styled.Wrapper>
          <Styled.Name>{name}</Styled.Name>
          <DeleteFavoritePlaceButton onClick={() =>openModal()}/>
        </Styled.Wrapper>
      </Styled.Container>

      {isOpen && (
        <ReconfirmAlertModal
          isOpen={isOpen}
          onClose={closeModal}
          name={name}
          id={id}
        />
      )}
    </>
  );
}
