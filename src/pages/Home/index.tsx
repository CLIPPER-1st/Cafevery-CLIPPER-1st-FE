import {NaverMaps} from '@/components/NaverMaps';
import PageLayout from '@/components/PageLayout';
import GoToMyLocationButton from '@/components/Button/GoToMyLocationButton';
import GetCafeLocationButton from '@/components/Button/GetCafeLocationButton';
import * as Styled from './style';
import {useRecoilState, useRecoilValue} from 'recoil';
import {mapCenterState} from '@/atoms/location';
import useGeolocation from '@/hooks/useGeolocation';
import {Toggle} from '@/components/Toggle';
import FilterButton from '@/components/Button/FilterButton';
import useModal from '@/hooks/useModal';
import FilterModal from '@/components/Modal/FilterModal';
import useInput from '@/hooks/useInput';
import LocationSearchBar from '@/components/Search/LocationSearchBar';
import { useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { fetchCafes } from '@/apis/cafeList';
import { useFilteredCafes } from '@/hooks/useFilteredCafes';
import { timeFilterState } from '@/atoms/timeFilter';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { distanceState } from '@/atoms/distanceFilter';
import { toggleState } from '@/atoms/toggle';
import { ICafeList } from '@/interfaces/cafeInfo';

export default function Home() {
  const {loaded, coordinates} = useGeolocation();
  const {isOpen, openModal, closeModal} = useModal();
  const {setValue: setSearchTerm} = useInput();
  const [mapCenterLocation, setMapCenterLocation] = useRecoilState(mapCenterState);
  //const navermaps = useNavermaps();
  const nowUrl = useLocation();
  const distance = useRecoilValue(distanceState(nowUrl.pathname));
  const showMap = useRecoilValue(toggleState((nowUrl.pathname)));
  const timeFilter = useRecoilValue(timeFilterState(nowUrl.pathname));
  const queryClient = useQueryClient();
  //const [fetchCafesEnabled, setFetchCafesEnabled] = useState(false);
  //const [cafes, setCafes] = useState([]);
  //const filteredCafes = useFilteredCafes({ cafes: cafes }, timeFilter.minValue, timeFilter.maxValue, distance, showMap);
  const { data } = useSuspenseQuery({
      queryKey: ['cafeInfoList'],
      queryFn: async () => (await fetchCafes(mapCenterLocation.latitude, mapCenterLocation.longitude)),
      staleTime: 1000,
      gcTime: 10000,
  });

    console.log("======useSuspenseQuery", data?.data?.cafes)
  const filteredCafes = useFilteredCafes({ cafes: data?.data?.cafes }, timeFilter.minValue, timeFilter.maxValue, distance, showMap);

  const handleFetchCafeList = () => {
    queryClient.fetchQuery({ queryKey: ['cafeInfoList'] });
    //setFetchCafesEnabled(true); // 버튼 클릭 시 쿼리 활성화
    //fetchCafeData();
  }
  console.log(' Home filteredCafes', filteredCafes)
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
          <NaverMaps data={filteredCafes} />
        </PageLayout>
      {isOpen && <FilterModal isOpen={isOpen} onClose={closeModal} />}
    </>
  );
}
