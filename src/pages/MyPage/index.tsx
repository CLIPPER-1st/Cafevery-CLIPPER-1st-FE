import PageLayout from '@/components/PageLayout/PageLayout';
import Default from '@/assets/Images/default.png';
import * as Styled from './style';
import TextButton from '@/components/Button/TextButton';
import { FavoritePlaceList } from '@/components/FavoritePlace/FavoritePlaceList';

export default function MyPage() {

  const handleChangeProfileName = () => {

  }

  return (
    <PageLayout>
      <Styled.ProfileImage src={Default} />
      <TextButton onClick={() => handleChangeProfileName()}>
        {`${"룰루랄라룰루랄라룰루"} 🖊️`}
      </TextButton>
      <Styled.Line />
      <TextButton onClick={() => handleChangeProfileName()}>
        {`${"자주 가는 장소"} ➕`}
      </TextButton>
      <FavoritePlaceList />
    </PageLayout>
  );
}
