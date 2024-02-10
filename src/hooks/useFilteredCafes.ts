import { useState, useEffect, version } from 'react';
import { useRecoilValue } from 'recoil';
import { cafeInfoListState } from '@/atoms/cafeInfoListState';
import { timeFilterState } from '@/atoms/timeFilter';
import { distanceState } from '@/atoms/distanceFilter';
import { myLocationState } from '@/atoms/location';
import { useLocation } from 'react-router-dom';
import { CafeList } from '@/interfaces/cafeInfo';
import useGeolocation from './useGeolocation';

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
export function useFilteredCafes(minValue: number, maxValue: number, distance) {
    const nowUrl = useLocation();
    const { loaded, coordinates } = useGeolocation();
    const myLocation = useRecoilValue(myLocationState);
    const cafesData = useRecoilValue(cafeInfoListState({distance: 3, startTime: 0, endTime: 24}));
    const [filteredCafes, setFilteredCafes] = useState<CafeList | null>(cafesData);
    console.log("cafesData", cafesData)
    useEffect(() => {
        if(myLocation.latitude !== 0 && myLocation.longitude!== 0 && loaded && coordinates) {
            const cafes = cafesData?.cafes;
            console.log("cafes", cafes)
    
            if (!cafes || cafes.length === 0) return;
        
            const filtered = cafes.filter((cafe) => {
                const cafeStartTime = convertTime(cafe.start_time);
                const cafeEndTime = convertTime(cafe.end_time);
        
                // 시간 필터링 로직
                const isInTimeRange = cafeStartTime >= minValue && cafeEndTime <= maxValue;
        
                // 거리 필터링 로직
                const distanceToCafe = calculateDistance(coordinates.lat, coordinates.lng, cafe.latitude, cafe.longitude);
                const isInDistanceRange = distanceToCafe <= distance;
                console.log(distanceToCafe, distance)
        
                return isInTimeRange && isInDistanceRange;
            })
            setFilteredCafes({ cafes: filtered });
            console.log("filtered",filtered);
        }
        
    }, [cafesData, minValue, maxValue, distance, coordinates, loaded]);

    return filteredCafes;
}
