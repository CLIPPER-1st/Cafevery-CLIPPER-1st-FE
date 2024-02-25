import {NaverMap} from '@/components/NaverMap';
import PageLayout from '@/components/PageLayout';
import GoToMyLocationButton from '@/components/Button/GoToMyLocationButton';
import GetCafeLocationButton from '@/components/Button/GetCafeLocationButton';
import * as Styled from './style';
import {useRecoilState} from 'recoil';
import {mapCenterState} from '@/atoms/location';
import useGeolocation from '@/hooks/useGeolocation';
import {Toggle} from '@/components/Toggle';
import FilterButton from '@/components/Button/FilterButton';
import useModal from '@/hooks/useModal';
import FilterModal from '@/components/Modal/FilterModal';
import useInput from '@/hooks/useInput';
import LocationSearchBar from '@/components/Search/LocationSearchBar';
import { useFetchCafeList } from '@/hooks/useFetchCafeList';

export default function Home() {
  const {loaded, coordinates} = useGeolocation();
  const {isOpen, openModal, closeModal} = useModal();
  const {setValue: setSearchTerm} = useInput();
  const [mapCenterLocation, setMapCenterLocation] = useRecoilState(mapCenterState);

  const handleMyLocationButtonClicked = () => {
    if (loaded) {
      setMapCenterLocation({
        latitude: coordinates.lat,
        longitude: coordinates.lng,
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
          <Toggle />
        </Styled.ButtonsWrapper>
        <LocationSearchBar />
        <Styled.ButtonContainer>
          <GoToMyLocationButton
            onClick={() => handleMyLocationButtonClicked()}
          />
          <Styled.CenteredButton>
            <GetCafeLocationButton onClick={handleFilterModalOpen}/> {/* TODO: 이 부분 고쳐야 함*/}
          </Styled.CenteredButton>
        </Styled.ButtonContainer>
        <NaverMap />
      </PageLayout>

      {isOpen && <FilterModal isOpen={isOpen} onClose={closeModal} />}
    </>
  );
}
