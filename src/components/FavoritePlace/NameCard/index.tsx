import { alertModalState } from '@/atoms/modalState';
import DeleteFavoritePlaceButton from '@/components/Button/DeleteFavoritePlaceButton';
import AlertModal from '@/components/Modal/AlertModal';
import ReconfirmAlertModal from '@/components/Modal/ReconfirmAlertModal';
import useModal from '@/hooks/useModal';
import { ILocation } from '@/interfaces/userInfo';
import { useRecoilState } from 'recoil';
import * as Styled from './style';

export default function NameCard({ id, name, latitude, longitude }: ILocation) {
  const [alertModal, setAlertModal] = useRecoilState(alertModalState);
  const {isOpen, openModal, closeModal} = useModal();
  const {isOpen: ishandleReconfirmAlertModalOpen, 
    openModal: openhandleReconfirmAlertModalOpen, 
    closeModal: closehandleReconfirmAlertModalOpen
  } = useModal();

  const handleDeleteFavoritePlace = () => {
    //TODO: 삭제 로직 구현
    openModal();
    setAlertModal({
      message: '삭제되었습니다.',
    });
  }

  const handleReconfirmAlertModalOpen = () => {
    //TODO: 삭제 로직 구현
    openhandleReconfirmAlertModalOpen();
    setAlertModal({
      message: `자주 가는 장소 "${name}"\n삭제 하시겠습니까?`,
    });
  }

  return (
    <>
      <Styled.Container>
        <Styled.Wrapper>
          <Styled.Name>{name}</Styled.Name>
          <DeleteFavoritePlaceButton onClick={() => handleReconfirmAlertModalOpen()}/>
        </Styled.Wrapper>
      </Styled.Container>

      {isOpen && (
        <AlertModal 
          isOpen={isOpen}
          onClose={closeModal}
        >
          {alertModal.message}
        </AlertModal>
      )}

      {ishandleReconfirmAlertModalOpen && (
        <ReconfirmAlertModal
          isOpen={ishandleReconfirmAlertModalOpen}
          onClose={closehandleReconfirmAlertModalOpen}
        >
          {alertModal.message}
        </ReconfirmAlertModal>
      )}

      </>
  );
}
