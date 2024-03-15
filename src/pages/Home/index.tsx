import {NaverMaps} from '@/components/NaverMaps';
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
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useFetchCafeList } from '@/hooks/useFetchCafeList';

export default function Home() {
  const {loaded, coordinates} = useGeolocation();
  const {isOpen, openModal, closeModal} = useModal();
  const {setValue: setSearchTerm} = useInput();
  const [mapCenterLocation, setMapCenterLocation] = useRecoilState(mapCenterState);
  const queryClient = useQueryClient();
  const { data } = useFetchCafeList(mapCenterLocation.latitude, mapCenterLocation.longitude);

  const handleFetchCafeList = () => {
    queryClient.fetchQuery({ queryKey: ['cafeInfoList'] });
  }

  useEffect(() => { // TODO: 의존성 배열 안에 mapCenterLocation을 넣으니 지도를 옮길 때마다 요청되는 것.
    if (mapCenterLocation.latitude !== 0 && mapCenterLocation.longitude !== 0) {
      queryClient.fetchQuery({ queryKey: ['cafeInfoList'] });
    }
    console.log('mapCenterLocation', mapCenterLocation)

  }, [mapCenterLocation]);

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
              <GetCafeLocationButton onClick={() => handleFetchCafeList()}/>
            </Styled.CenteredButton>
          </Styled.ButtonContainer>
          <NaverMaps cafes={data.data.cafes} />
        </PageLayout>
      {isOpen && <FilterModal isOpen={isOpen} onClose={closeModal} />}
    </>
  );
}
