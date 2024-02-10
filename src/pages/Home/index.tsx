import {NaverMap} from '@/components/NaverMap';
import PageLayout from '@/components/PageLayout/PageLayout';
import GoToMyLocationButton from '@/components/Button/GoToMyLocationButton';
import GetCafeLocationButton from '@/components/Button/GetCafeLocationButton';
import * as Styled from './style';
import {useRecoilState} from 'recoil';
import {mapCenterState, myLocationState} from '@/atoms/location';
import useGeolocation from '@/hooks/useGeolocation';
import {Toggle} from '@/components/Toggle/Toggle';
import FilterButton from '@/components/Button/FilterButton';
import useModal from '@/hooks/useModal';
import FilterModal from '@/components/Modal/FilterModal';
import useInput from '@/hooks/useInput';
import LocationSearchBar from '@/components/Search/LocationSearchBar';
import HomeToggle from '@/components/Toggle/homeToggle';

export default function Home() {
  const {coordinates} = useGeolocation();
  const {isOpen, openModal, closeModal} = useModal();
  const {setValue: setSearchTerm} = useInput();
  const [myLocation] = useRecoilState(myLocationState);
  const [, setCenterLocation] = useRecoilState(mapCenterState);

  const handleMyLocationButtonClicked = () => {
    if (coordinates.lat && coordinates.lng) {
      setCenterLocation({
        latitude: myLocation.latitude,
        longitude: myLocation.longitude,
      });
      setSearchTerm('');
    }
  };

  const handleFilterModalOpen = () => {
    openModal();
  };

  return (
    <>
      <PageLayout>
        <Styled.ButtonsWrapper>
          <FilterButton onClick={() => handleFilterModalOpen()} />
          <HomeToggle />
        </Styled.ButtonsWrapper>
        <LocationSearchBar />
        <Styled.ButtonContainer>
          <GoToMyLocationButton
            onClick={() => handleMyLocationButtonClicked()}
          />
          <Styled.CenteredButton>
            <GetCafeLocationButton />
          </Styled.CenteredButton>
        </Styled.ButtonContainer>
        <NaverMap />
      </PageLayout>

      {isOpen && <FilterModal isOpen={isOpen} onClose={closeModal} />}
    </>
  );
}
