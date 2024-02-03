import {useRecoilState} from 'recoil';
import * as Styled from './style';

interface Props {
  name: string;
  address: string;
  business: string;
  likes: number;
  distance: number;
}

export default function NameCard({
  name,
  address,
  business,
  likes,
  distance,
}: Props) {
  return (
    <Styled.Container>
      <text>{name}</text>
      <text>{address}</text>
      <text>{business}</text>
      <text>{likes}</text>
      <text>{distance}m</text>
    </Styled.Container>
  );
}
