import { NaverMap } from '@/components/NaverMap';
import PageLayout from '@/components/PageLayout/PageLayout';
import SearchBar from '@/components/SearchBar';
import GoToMyLocationButton from '@/components/Button/GoToMyLocationButton/GoToMyLocationButton';
import GetCafeLocationButton from '@/components/Button/GetCafeLocationButton/GetCafeLocationButton';
import * as Styled from './style';
import { useRecoilState } from 'recoil';
import { locationState } from '@/atoms/location';
import useGeolocation from '@/hooks/useGeolocation';
import { Toggle } from '@/components/Toggle/Toggle';
import FilterButton from '@/components/Button/FilterButton/FilterButton';

export default function Home() {
  const [, setLocation] = useRecoilState(locationState);
  const { coordinates } = useGeolocation();

  const handleMyLocationButtonClicked = () => {
    setLocation({ latitude: coordinates.lat, longitude: coordinates.lng });
  };
  return (
    <PageLayout>
      <FilterButton />
      <Toggle />
      <SearchBar />
      <Styled.ButtonContainer>
        <GoToMyLocationButton onClick={() => handleMyLocationButtonClicked()} />
        <Styled.CenteredButton>
          <GetCafeLocationButton />
        </Styled.CenteredButton>
      </Styled.ButtonContainer>
      <NaverMap />
    </PageLayout>
  );
}
