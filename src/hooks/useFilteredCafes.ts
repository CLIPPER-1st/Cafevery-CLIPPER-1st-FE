import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { myLocationState } from '@/atoms/location';
import { CafeList } from '@/interfaces/cafeInfo';
import useGeolocation from '@/hooks/useGeolocation';
import { Likes, LikesList } from '@/interfaces/likes';
import { useConvertTime } from '@/hooks/useConvertTime';
import { useCalculateDistance } from './useCalculateDistance';

/**시간과 거리에 따른 카페 필터링 커스텀 훅 */ 
export function useFilteredCafes(cafeInfoList: CafeList | LikesList | null, minValue: number, maxValue: number, filteredDistance: number) {
    const { loaded, coordinates } = useGeolocation();
    const myLocation = useRecoilValue(myLocationState);
    const [filteredCafes, setFilteredCafes] = useState<CafeList | LikesList | null>();
    //const [filteredLikes, setFilteredLikes] = useState<LikesList>(likes);

    console.log("cafeInfoList", cafeInfoList)
    useEffect(() => {
        if(myLocation.latitude !== 0 && myLocation.longitude!== 0 && loaded && coordinates) {
            const cafes = cafeInfoList?.cafes;
    
            if (!cafes || cafes.length === 0) return;
        
            const filtered = cafes.filter((cafe) => {
                const cafeStartTime = useConvertTime(cafe.start_time);
                const cafeEndTime = useConvertTime(cafe.end_time);
        
                // 시간 필터링 로직
                const isInTimeRange = cafeStartTime >= minValue && cafeEndTime <= maxValue;
        
                // 거리 필터링 로직
                const distanceToCafe = useCalculateDistance(coordinates.lat, coordinates.lng, cafe.latitude, cafe.longitude);

                const distance = filteredDistance === 3 ? 10000 : filteredDistance; // 3km일 땐 불러온 데이터 전체로 보여주게 하기 위해 10000으로 포멧팅.
                const isInDistanceRange = distanceToCafe <= distance;
        
                return isInTimeRange && isInDistanceRange;
            })
            setFilteredCafes({ cafes: filtered });
            console.log("filtered", filtered)

        }
        console.log("filtered")
    }, [minValue, maxValue, filteredDistance, cafeInfoList, coordinates, loaded]);

    return filteredCafes;
}
