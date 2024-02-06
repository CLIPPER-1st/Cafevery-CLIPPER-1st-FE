import PageLayout from '@/components/PageLayout/PageLayout';
import Default from '@/assets/Images/default.png';
import * as Styled from './style';
import TextButton from '@/components/Button/TextButton';
import { FavoritePlaceList } from '@/components/FavoritePlace/FavoritePlaceList';
import { toggleShowMapState } from '@/atoms/toggle';
import { useRecoilState } from 'recoil';
import AddFavoritePlaceMap from '@/components/FavoritePlace/AddFavoritePlaceMap';

export default function MyPage() {
  const [showMap, setShowMap] = useRecoilState(toggleShowMapState);

  const handleChangeProfileName = () => {

  }

  return (
    <PageLayout>
      {!showMap ? (
        <>
          <Styled.ProfileImage src={Default} />
          <TextButton onClick={() => handleChangeProfileName()}>
            {"룰루랄라룰루랄라룰루 🖊️"}
          </TextButton>
          <Styled.Line />
          <TextButton onClick={() => setShowMap(!showMap)}>
            {"자주 가는 장소 ➕"}
          </TextButton>
          <FavoritePlaceList />
        </>
      ) : (
        <AddFavoritePlaceMap />
      )}
    </PageLayout>
  );
}
