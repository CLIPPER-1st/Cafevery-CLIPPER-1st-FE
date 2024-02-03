import * as Styled from './style';
import Likebutton from '../LikeButton';

interface Props {
  name: string;
  address: string;
  business: string;
  likes: number;
  distance: number;
  liked: boolean;
}

export default function NameCard({
  name,
  address,
  business,
  likes,
  distance,
  liked,
}: Props) {
  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Address>{address}</Styled.Address>
        <Styled.Name>{name}</Styled.Name>
      </Styled.Wrapper>
      <Styled.Info>
        <Styled.Business>{business}</Styled.Business>
        <Styled.State>
          <Styled.Likes>{likes}</Styled.Likes>
          <Styled.Distance>{distance}m</Styled.Distance>
        </Styled.State>
      </Styled.Info>
      <Likebutton liked={liked} />
    </Styled.Container>
  );
}
