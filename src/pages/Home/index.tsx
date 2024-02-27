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
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { fetchCafes } from '@/apis/cafeList';
import { useEffect } from 'react';

export default function Home() {
  const {loaded, coordinates} = useGeolocation();
  const {isOpen, openModal, closeModal} = useModal();
  const {setValue: setSearchTerm} = useInput();
  const [mapCenterLocation, setMapCenterLocation] = useRecoilState(mapCenterState);
  const queryClient = useQueryClient();

  const { data } = useSuspenseQuery({
      queryKey: ['cafeInfoList'],
      queryFn: async () => {
        if (mapCenterLocation.latitude !== 0 && mapCenterLocation.longitude !== 0) {
          return await fetchCafes(mapCenterLocation.latitude, mapCenterLocation.longitude);
        } 
      },
      staleTime: 1000,
      gcTime: 10000,
  });

    console.log("======useSuspenseQuery", data?.data?.cafes)

  const handleFetchCafeList = () => {
    queryClient.fetchQuery({ queryKey: ['cafeInfoList'] });
    //setFetchCafesEnabled(true); // 버튼 클릭 시 쿼리 활성화
  }
  useEffect(() => {
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
          <NaverMaps cafes={data?.data.cafes} />
        </PageLayout>
      {isOpen && <FilterModal isOpen={isOpen} onClose={closeModal} />}
    </>
  );
}
