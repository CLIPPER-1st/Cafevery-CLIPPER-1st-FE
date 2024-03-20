import DeleteFavoritePlaceButton from '@/components/MyPage/DeleteFavoritePlaceButton';
import ReconfirmAlertModal from '@/components/MyPage/ReconfirmAlertModal';
import useModal from '@/hooks/useModal';
import { ILocation } from '@/interfaces/userInfo';
import * as Styled from './style';
import { mapCenterState } from '@/atoms/location';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

export default function NameCard({ id, name, latitude, longitude }: ILocation) {
  const {isOpen, 
    openModal, 
    closeModal
  } = useModal();
  const navigate = useNavigate();
  const setMapCenterLocation = useSetRecoilState(mapCenterState);
  
  const handleGoToCafeLocation = () => {
    navigate('/');
    setMapCenterLocation({ latitude: latitude, longitude: longitude });
}
  return (
    <>
      <Styled.Container onClick={() => handleGoToCafeLocation()}>
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
