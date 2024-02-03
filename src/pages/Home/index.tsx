import { NaverMap } from '@/components/NaverMap';
import PageLayout from '@/components/PageLayout/PageLayout';
import GoToMyLocationButton from '@/components/Button/GoToMyLocationButton';
import GetCafeLocationButton from '@/components/Button/GetCafeLocationButton';
import * as Styled from './style';
import { useRecoilState } from 'recoil';
import { locationState } from '@/atoms/location';
import useGeolocation from '@/hooks/useGeolocation';
import { Toggle } from '@/components/Toggle/Toggle';
import FilterButton from '@/components/Button/FilterButton';
import useModal from '@/hooks/useModal';
import FilterModal from '@/components/Modal/FilterModal';
import useInput from '@/hooks/useInput';
import LocationSearchBar from '@/components/Search/LocationSearchBar';

export default function Home() {
  const [, setLocation] = useRecoilState(locationState);
  const { coordinates } = useGeolocation();
  const {isOpen, openModal, closeModal} = useModal();
  const { setValue: setSearchTerm } = useInput();

  const handleMyLocationButtonClicked = () => {
    setLocation({ latitude: coordinates.lat, longitude: coordinates.lng });
    setSearchTerm('')
  };

  const handleFilterModalOpen= () => {
    openModal();
  };

  return (
    <>
    <PageLayout>
      <FilterButton onClick={() => handleFilterModalOpen()} />
      <Toggle />
      <LocationSearchBar />
      <Styled.ButtonContainer>
        <GoToMyLocationButton onClick={() => handleMyLocationButtonClicked()} />
        <Styled.CenteredButton>
          <GetCafeLocationButton />
        </Styled.CenteredButton>
      </Styled.ButtonContainer>
      <NaverMap />
    </PageLayout>

    {isOpen && (
          <FilterModal 
            isOpen={isOpen}
            onClose={closeModal}
          />
      )}
    </>
  );
}
