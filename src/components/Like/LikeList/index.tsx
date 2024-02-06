import {Likes} from '@/interfaces/likes';
import * as Styled from './style';
import NameCard from '../NameCard';
import useDistance from '@/hooks/useDistance';
import useTimeConverter from '@/hooks/useTimeConverter';
import useGeolocation from '@/hooks/useGeolocation';

interface Props {
  likes: Likes[];
  searchTerm: string;
}

export function LikeList({likes, searchTerm}: Props) {
  const {coordinates} = useGeolocation();

  return (
    <Styled.Container>
      {likes
        .filter((like) =>
          like.name.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        .map((like) => {
          return (
            <Styled.Wrapper key={like.id}>
              <NameCard
                id={like.id}
                name={like.name}
                address={like.address}
                business={`${useTimeConverter(like.start_time)} ~ ${useTimeConverter(like.end_time)}`}
                likes={like.likes}
                distance={useDistance({
                  currentLatitude: coordinates.lat,
                  currentLongitude: coordinates.lng,
                  targetLatitude: like.latitude,
                  targetLongitude: like.longitude,
                })}
                liked={like.liked}
              />
            </Styled.Wrapper>
          );
        })}
    </Styled.Container>
  );
}
