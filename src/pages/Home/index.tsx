import NaverMaps from '@/components/common/NaverMaps';
import PageLayout from '@/components/common/PageLayout';
import GoToMyLocationButton from '@/components/Home/GoToMyLocationButton';
import GetCafeLocationButton from '@/components/Home/GetCafeLocationButton';
import * as Styled from './style';
import {useRecoilState} from 'recoil';
import {mapCenterState} from '@/atoms/location';
import useGeolocation from '@/hooks/useGeolocation';
import {Toggle} from '@/components/common/Toggle';
import FilterButton from '@/components/common/Button/FilterButton';
import useModal from '@/hooks/useModal';
import FilterModal from '@/components/common/Modal/FilterModal';
import useInput from '@/hooks/useInput';
import LocationSearchBar from '@/components/common/Search/LocationSearchBar';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useFetchCafeList } from '@/hooks/useFetchCafeList';
import { currentModalState } from '@/atoms/modalState';
import SummaryCafeInfoModal from '@/components/common/Modal/SummaryCafeInfoModal';

export default function Home() {
  const {loaded, coordinates} = useGeolocation();
  const {isOpen, openModal, closeModal} = useModal();
  const {setValue: setSearchTerm} = useInput();
  const [mapCenterLocation, setMapCenterLocation] = useRecoilState(mapCenterState);
  const queryClient = useQueryClient();
  const { data } = useFetchCafeList(mapCenterLocation.latitude, mapCenterLocation.longitude);
  const [currentModal, setCurrentModal] = useRecoilState(currentModalState);

  const handleFetchCafeList = () => {
    queryClient.invalidateQueries({ queryKey: ['cafeInfoList'] });
  }

  useEffect(() => {
    if (mapCenterLocation.latitude !== 0 && mapCenterLocation.longitude !== 0) {
      queryClient.fetchQuery({ queryKey: ['cafeInfoList'] });
    }
  }, [loaded]);

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
      {currentModal && (
        <SummaryCafeInfoModal
          isOpen={true}
          onClose={() => setCurrentModal(null)}
          id={currentModal}
        />
      )}
    </>
  );
}
