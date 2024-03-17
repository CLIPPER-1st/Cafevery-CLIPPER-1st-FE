import * as Styled from './style';
import NameCard from '../NameCard';
import calculateDistance from '@/utils/calculateDistance';
import { convertTime } from '@/utils/convertTime';
import useGeolocation from '@/hooks/useGeolocation';
import useModal from '@/hooks/useModal';
import CafeInfoModal from '@/components/common/Modal/CafeInfoModal';
import EmptyMessage from '../EmptyMessage';
import {useRecoilState, useRecoilValue} from 'recoil';
import {likesListState, selectedCafeState} from '@/atoms/likesState';
import { timeFilterState } from '@/atoms/timeFilter';
import { useFilteredCafes } from '@/hooks/useFilteredCafes';
import { useLocation } from 'react-router-dom';
import { distanceState } from '@/atoms/distanceFilter';
import { toggleState } from '@/atoms/toggle';
import { searchTermState } from '@/atoms/input';
import { useEffect, useState } from 'react';
import { Likes } from '@/interfaces/likes';

export default function LikeList() {
  const {loaded, coordinates} = useGeolocation();
  const {isOpen, openModal, closeModal} = useModal();
  const [cafeId, setCafeId] = useRecoilState(selectedCafeState);
  const nowUrl = useLocation();
  const distance = useRecoilValue(distanceState(nowUrl.pathname));
  const timeFilter = useRecoilValue(timeFilterState(nowUrl.pathname));
  const showMap = useRecoilValue(toggleState((nowUrl.pathname)));
  const fullLikesList = useRecoilValue(likesListState({distance: 3, startTime: 0, endTime: 24, searchTerm: ''}));
  const searchTerm = useRecoilValue(searchTermState);
  const initiallyFilteredCafes = useFilteredCafes(fullLikesList, timeFilter.minValue, timeFilter.maxValue, distance, showMap);
  const [finalFilteredCafes, setFinalFilteredCafes] = useState(initiallyFilteredCafes); // 상태로 필터링된 카페 목록 관리

  const handleCafeInfoModalOpen = (id: number) => {
    setCafeId(id);
    openModal();
  };
  
  useEffect(() => { // searchTerm 변경 시 또는 initiallyFilteredCafes 변경 시 텍스트 기반 필터링 적용
    const updatedFiltered = initiallyFilteredCafes?.cafes.filter((like: Likes) => 
      like.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFinalFilteredCafes({ cafes: updatedFiltered || [] });
  }, [searchTerm, initiallyFilteredCafes]);
  
  if (!loaded || !coordinates) {
    return;
  }

  return (
    <>
      {coordinates.lat !== 0 && coordinates.lng !== 0 && loaded &&(
        <Styled.Container>
          {finalFilteredCafes.cafes.length === 0 ? (
            <EmptyMessage message={'좋아요를 누른 카페가 없습니다.'} />
          ) : (
            finalFilteredCafes.cafes.map((like: Likes) => {
              return (
                <Styled.Wrapper
                  key={like.id}
                  onClick={() => handleCafeInfoModalOpen(like.id)}
                >
                  <NameCard
                    id={like.id}
                    name={like.name}
                    address={like.address}
                    business={`${convertTime(like.start_time).formattedTime} ~ ${convertTime(like.end_time).formattedTime}`}
                    likes={like.likes}
                    distance={calculateDistance({
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