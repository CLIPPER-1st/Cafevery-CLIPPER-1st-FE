import DeleteFavoritePlaceButton from '@/components/Button/DeleteFavoritePlaceButton';
import { ILocation } from '@/interfaces/userInfo';
import * as Styled from './style';

export default function NameCard({ id, name, latitude, longitude }: ILocation) {

  const handleDeleteFavoritePlace = () => {

  }

  return (
      <Styled.Container>
        <Styled.Wrapper>
          <Styled.Name>{name}</Styled.Name>
          <DeleteFavoritePlaceButton onClick={() => handleDeleteFavoritePlace()}/>
        </Styled.Wrapper>
      </Styled.Container>
  );
}
