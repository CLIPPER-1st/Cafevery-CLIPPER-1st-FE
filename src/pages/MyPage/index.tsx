import PageLayout from '@/components/PageLayout/PageLayout';
import Default from '@/assets/Images/default.png';
import * as Styled from './style';
import TextButton from '@/components/Button/TextButton';
import { FavoritePlaceList } from '@/components/FavoritePlace/FavoritePlaceList';
import { toggleShowMapState } from '@/atoms/toggle';
import { useRecoilState } from 'recoil';
import AddFavoritePlaceMap from '@/components/FavoritePlace/AddFavoritePlaceMap';
import SettingButton from '@/components/Button/SettingButton';
import { useNavigate } from 'react-router-dom';

export default function MyPage() {
  const [showMap, setShowMap] = useRecoilState(toggleShowMapState);
  const navigate = useNavigate();

  const handleChangeProfileName = () => {

  }

  const handleNavigateToSetting = () => {
    navigate('/setting')
  }

  return (
    <PageLayout>
      {!showMap ? (
        <>
          <SettingButton onClick={() => handleNavigateToSetting()} />
          <Styled.ProfileImage src={Default} />
          <TextButton onClick={() => handleChangeProfileName()}>
            {"룰루랄라룰루랄라룰루 🖊️"}
          </TextButton>
          <Styled.Line />
          <TextButton onClick={() => setShowMap(!showMap)}>
            {"자주 가는 장소 ➕"}
          </TextButton>
          <FavoritePlaceList />
          <Styled.DiscriptionText>
            최대 5개까지 등록 가능
          </Styled.DiscriptionText>
        </>
      ) : (
        <AddFavoritePlaceMap />
      )}
    </PageLayout>
  );
}
