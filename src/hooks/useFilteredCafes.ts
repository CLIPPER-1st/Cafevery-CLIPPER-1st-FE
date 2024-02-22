import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { myLocationState } from '@/atoms/location';
import { CafeList } from '@/interfaces/cafeInfo';
import useGeolocation from '@/hooks/useGeolocation';
import { ILikesList } from '@/interfaces/likes';
import { useConvertTime } from '@/hooks/useConvertTime';
import { useCalculateDistance } from './useCalculateDistance';

/**시간과 거리에 따른 카페 필터링 커스텀 훅 */ 
export function useFilteredCafes(cafeInfoList: CafeList | ILikesList | null, minValue: number, maxValue: number, filteredDistance: number, toggleState: boolean) {
    const { loaded, coordinates } = useGeolocation();
    const myLocation = useRecoilValue(myLocationState);
    const [filteredCafes, setFilteredCafes] = useState<CafeList | ILikesList | null>();

    console.log("cafeInfoList", cafeInfoList)
    useEffect(() => {
        if(myLocation.latitude !== 0 && myLocation.longitude!== 0 && loaded && coordinates) {
            const cafes = cafeInfoList.cafes;
    
            //if (!cafes || cafes.length === 0) return;
        
            const filtered = cafes?.filter((cafe) => {
                const cafeStartTime = useConvertTime(cafe.start_time);
                const cafeEndTime = useConvertTime(cafe.end_time);

                const currentTime = new Date(); // 현재 시간
                const currentHour = currentTime.getHours(); // 현재 시
                console.log('currentHour', currentHour)
                const currentMinute = currentTime.getMinutes(); // 현재 분
                const convertedCurrentTime = useConvertTime(`${currentHour}:${currentMinute}`) // HH:MM 형태로 컨버팅 후 useConvertTime

                //운영 중 필터링 로직
                const isInBusinness = convertedCurrentTime <= cafeEndTime && convertedCurrentTime >= cafeStartTime;

                // 시간 필터링 로직
                const isInTimeRange = cafeStartTime >= minValue && cafeEndTime <= maxValue;
        
                // 거리 필터링 로직
                const distanceToCafe = useCalculateDistance(coordinates.lat, coordinates.lng, cafe.latitude, cafe.longitude);

                const distance = filteredDistance === 3 ? 10000 : filteredDistance; // 3km일 땐 불러온 데이터 전체로 보여주게 하기 위해 10000으로 포멧팅.
                const isInDistanceRange = distanceToCafe <= distance;

                if (toggleState === false) {
                    // 전체 카페 리스트 반환
                    return isInTimeRange && isInDistanceRange;
                } else {
                    // 운영중인 카페만 필터링 
                    return isInTimeRange && isInDistanceRange && isInBusinness;
                }
            })
            setFilteredCafes({ cafes: filtered });
            console.log("filtered", filtered)

        }
        console.log("filtered")
    }, [minValue, maxValue, filteredDistance, cafeInfoList, coordinates, loaded, toggleState]);

    return filteredCafes;
}
