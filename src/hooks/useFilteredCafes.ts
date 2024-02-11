import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { myLocationState } from '@/atoms/location';
import { CafeList } from '@/interfaces/cafeInfo';
import useGeolocation from '@/hooks/useGeolocation';
import { Likes, LikesList } from '@/interfaces/likes';
import { likesListState } from '@/atoms/likesState';

/**시간을 분으로 변환하는 함수 */
function convertTime(time: string) {
    const [hours, minutes] = time.split(':').map(Number);
    if(time === "휴무") {
        return 25;
    }
    else {
    
        const convertedMinutes = minutes / 10; //0.1단위로 환산
        const convertedTime = hours + convertedMinutes
        return convertedTime;
    }
}

/**두 지점 간의 거리를 계산하는 함수 (Haversine 공식) */
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
    function toRad(x: number) {
        return (x * Math.PI) / 180;
    }

    var R = 6371; // 지구의 반지름(km)
    var dLat = toRad(lat2 - lat1);
    var dLon = toRad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

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
                const cafeStartTime = convertTime(cafe.start_time);
                const cafeEndTime = convertTime(cafe.end_time);
        
                // 시간 필터링 로직
                const isInTimeRange = cafeStartTime >= minValue && cafeEndTime <= maxValue;
        
                // 거리 필터링 로직
                const distanceToCafe = calculateDistance(coordinates.lat, coordinates.lng, cafe.latitude, cafe.longitude);

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
