import { userInfoState } from '@/atoms/userInfoState';
import NameCard from '@/components/MyPage/FavoritePlace/NameCard';
import { useRecoilState } from 'recoil';
import * as Styled from './style';

export function FavoritePlaceList() {
  const [userInfo, ] = useRecoilState(userInfoState);
  
  return (
      <Styled.Container>
          {userInfo.data.infos.locations.map((location) => (
              <NameCard 
                key={location.id} 
                name={location.name}
                id={location.id}
                latitude={location.latitude}
                longitude={location.longitude}
              />
          ))}
      </Styled.Container>
  );
}
