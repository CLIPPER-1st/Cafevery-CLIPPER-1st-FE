import {Likes} from '@/interfaces/likes';
import * as Styled from './style';
import NameCard from '../NameCard';
import {useRecoilState} from 'recoil';
import {locationState} from '@/atoms/location';
import useDistance from '@/hooks/useDistance';

interface Props {
  likes: Likes[];
}

export function LikeList({likes}: Props) {
  const [location] = useRecoilState(locationState);
  return (
    <Styled.Container>
      {likes.map((like) => {
        return (
          <Styled.Wrapper key={like.id}>
            <NameCard
              name={like.name}
              address={like.address}
              business={`${like.start_time} ~ ${like.end_time}`}
              likes={like.likes}
              distance={useDistance({
                currentLat: location.latitude,
                currentLng: location.longitude,
                targetLat: like.latitude,
                targetLng: like.longitude,
              })}
            />
          </Styled.Wrapper>
        );
      })}
    </Styled.Container>
  );
}
