import { NaverMap } from '@/components/NaverMap';
import PageLayout from '@/components/PageLayout/PageLayout';
import SearchBar from '@/components/SearchBar';
import GoToMyLocationButton from '@/components/Button/GoToMyLocationButton/GoToMyLocationButton';
import GetCafeLocationButton from '@/components/Button/GetCafeLocationButton/GetCafeLocationButton';
import * as Styled from './style';
import { useRecoilState } from 'recoil';
import { myLocationState } from '@/atoms/location';
import useGeolocation from '@/hooks/useGeolocation';

export default function Home() {
  const [, setMyLocation] = useRecoilState(myLocationState);

  const { coordinates } = useGeolocation();


  const handleMyLocationButtonClicked = () => {
    setMyLocation({ latitude: coordinates.lat, longitude: coordinates.lng });
  };
  return (
    <PageLayout>
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
