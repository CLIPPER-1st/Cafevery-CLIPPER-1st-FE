import { alertModalState } from '@/atoms/modalState';
import DeleteFavoritePlaceButton from '@/components/Button/DeleteFavoritePlaceButton';
import AlertModal from '@/components/Modal/AlertModal';
import ReconfirmAlertModal from '@/components/Modal/ReconfirmAlertModal';
import useModal from '@/hooks/useModal';
import { ILocation } from '@/interfaces/userInfo';
import { useRecoilState } from 'recoil';
import * as Styled from './style';

export default function NameCard({ id, name, latitude, longitude }: ILocation) {
  const {isOpen, 
    openModal, 
    closeModal
  } = useModal();

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
