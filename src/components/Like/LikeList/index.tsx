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
import { useEffect } from 'react';
import { Likes } from '@/interfaces/likes';
import { finalFilteredCafeListState } from '@/atoms/cafeInfoListState';
import LoadingUI from '@/components/common/LoadingUI';

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
  const [finalFilteredCafes, setFinalFilteredCafes] = useRecoilState(finalFilteredCafeListState); // 상태로 필터링된 카페 목록 관리

  const handleCafeInfoModalOpen = (id: number) => {
    setCafeId(id);
    openModal();
  };
  
  useEffect(() => {
    // searchTerm이 문자열인지 확인하고, 아닐 경우 빈 문자열을 사용
    const searchTermStr = typeof searchTerm === 'string' ? searchTerm : '';
    const updatedFiltered = initiallyFilteredCafes?.cafes.filter((like: Likes) => 
      like.name.toLowerCase().includes(searchTermStr.toLowerCase())
    );
    setFinalFilteredCafes({ cafes: updatedFiltered || [] });
  }, [searchTerm, initiallyFilteredCafes]);

  return (
    <>
      {coordinates.lat !== 0 && coordinates.lng !== 0 && loaded ? (
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
      ):
        <LoadingUI />
      }
      {isOpen && (
        <CafeInfoModal isOpen={isOpen} onClose={closeModal} id={cafeId} />
      )}
    </>
  );
}