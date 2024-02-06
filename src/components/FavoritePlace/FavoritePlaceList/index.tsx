import * as Styled from './style';
import useGeolocation from '@/hooks/useGeolocation';
import useModal from '@/hooks/useModal';

export function FavoritePlaceList() {
  const {coordinates} = useGeolocation();
  const {isOpen, openModal, closeModal} = useModal();
  const handleCafeInfoModalOpen = () => {
    openModal();
  };
  
  return (
    <>
      <Styled.Container>
        <Styled.Wrapper>
  
        </Styled.Wrapper>
      </Styled.Container>

    </>
  );
}
