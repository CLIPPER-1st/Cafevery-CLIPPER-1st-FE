import {Likes} from '@/interfaces/likes';
import * as Styled from './style';
import NameCard from '../NameCard';
import useDistance from '@/hooks/useDistance';
import useTimeConverter from '@/hooks/useTimeConverter';
import useGeolocation from '@/hooks/useGeolocation';
import useModal from '@/hooks/useModal';
import CafeInfoModal from '@/components/Modal/CafeInfoModal';
import EmptyMessage from '../EmptyMessage';
import {useRecoilState} from 'recoil';
import {selectedCafeState} from '@/atoms/likesState';

interface Props {
  likes: Likes[];
}

export function LikeList(props: Props) {
  const {coordinates} = useGeolocation();
  const {isOpen, openModal, closeModal} = useModal();
  const [cafeId, setCafeId] = useRecoilState(selectedCafeState);

  const handleCafeInfoModalOpen = (id: number) => {
    setCafeId(id);
    openModal();
  };
  return (
    <>
      <Styled.Container>
        {props.likes.length === 0 ? (
          <EmptyMessage message={'좋아요를 누른 카페가 없습니다.'} />
        ) : (
          props.likes.map((like) => {
            return (
              <Styled.Wrapper
                key={like.id}
                onClick={() => handleCafeInfoModalOpen(like.id)}
              >
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
          })
        )}
      </Styled.Container>

      {isOpen && (
        <CafeInfoModal isOpen={isOpen} onClose={closeModal} id={cafeId} />
      )}
    </>
  );
}
