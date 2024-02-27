import * as Styled from './style';
import NameCard from '../NameCard';
import useDistance from '@/hooks/useDistance';
import useTimeConverter from '@/hooks/useTimeConverter';
import useGeolocation from '@/hooks/useGeolocation';
import useModal from '@/hooks/useModal';
import CafeInfoModal from '@/components/Modal/CafeInfoModal';
import EmptyMessage from '../EmptyMessage';
import {useRecoilState, useRecoilValue} from 'recoil';
import {selectedCafeState} from '@/atoms/likesState';
import { timeFilterState } from '@/atoms/timeFilter';
import { useFilteredCafes } from '@/hooks/useFilteredCafes';
import { useLocation } from 'react-router-dom';
import { distanceState } from '@/atoms/distanceFilter';
import { toggleState } from '@/atoms/toggle';
import { ILikesList } from '@/interfaces/likes';

export default function LikeList({ data }: { data: ILikesList }) {
  const {loaded, coordinates} = useGeolocation();
  const {isOpen, openModal, closeModal} = useModal();
  const [cafeId, setCafeId] = useRecoilState(selectedCafeState);
  const nowUrl = useLocation();
  const [distance, ] = useRecoilState(distanceState(nowUrl.pathname));
  const timeFilter = useRecoilValue(timeFilterState(nowUrl.pathname));
  const [showMap, ] = useRecoilState(toggleState((nowUrl.pathname)));
  const filteredCafes = useFilteredCafes(data, timeFilter.minValue, timeFilter.maxValue, distance, showMap);
  
  const handleCafeInfoModalOpen = (id: number) => {
    setCafeId(id);
    openModal();
  };
  
  console.log('data', data)

  if (!loaded || !coordinates) {
    return;
  }

  return (
    <>
      {coordinates.lat !== 0 && coordinates.lng !== 0 && loaded &&(
        <Styled.Container>
          {filteredCafes?.cafes.length === 0 ? (
            <EmptyMessage message={'좋아요를 누른 카페가 없습니다.'} />
          ) : (
            filteredCafes?.cafes.map((like) => {
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
                    distance={useDistance({ //TODO: 고쳐야함
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
      )}
      {isOpen && (
        <CafeInfoModal isOpen={isOpen} onClose={closeModal} id={cafeId} />
      )}
    </>
  );
}
