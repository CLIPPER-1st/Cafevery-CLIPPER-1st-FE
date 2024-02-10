import { useEffect, useRef } from 'react';
import { NaverMap } from 'react-naver-maps';
import { useRecoilState } from 'recoil';
import { mapCenterState, myLocationState } from '@/atoms/location';
import useGeolocation from '@/hooks/useGeolocation';
import CafeMarker from '@/components/Marker/CafeMarker';
import MyMarker from '@/components/Marker/MyMarker';
import { cafeInfoListState } from '@/atoms/cafeInfoListState';
import { useFetchCafeList } from '@/hooks/useFetchCafeList';
import { timeFilterState } from '@/atoms/timeFilter';
import { distanceState } from '@/atoms/distanceFilter';
import { useLocation } from 'react-router-dom';
import useMapCenter from '@/hooks/useMapCenter';

export function MyMap() {
    const { loaded, coordinates } = useGeolocation();
    const [cafeInfoList] = useRecoilState(cafeInfoListState); //TODO: 임시 
    //const cafeList = useFetchCafeList(myLocation.latitude, myLocation.longitude); //TODO: 
    const nowUrl = useLocation();
    const [{ minValue, maxValue }, ] = useRecoilState(timeFilterState(nowUrl.pathname));
    const [distance, ] = useRecoilState(distanceState(nowUrl.pathname));
    const mapRef = useRef(null);
    const mapCenter = useMapCenter(mapRef.current);
    const [mapCenterLocation, setMapCenterLocation ] = useRecoilState(mapCenterState)
    const [myLocation, setMyLocation ] = useRecoilState(myLocationState)

    useEffect(() => {
        console.log("mapCenter: ",mapCenter); // 지도 중심 위치 출력
        console.log("mapCenterLocation: ", mapCenterLocation)
    }, [loaded, coordinates, mapCenter]);

    useEffect(() => {
        if (loaded && coordinates) {
            console.log("mapCenter: ",mapCenter); // 지도 중심 위치 출력
            console.log("mapCenterLocation: ", mapCenterLocation)
            setMapCenterLocation({ latitude: coordinates.lat, longitude: coordinates.lng });
        }
        console.log("로딩 전 mapCenter :",mapCenter)
        console.log("로딩 전 mapCenterLocation :",mapCenterLocation)
    }, [loaded, coordinates, setMapCenterLocation, mapCenter]);

    return (
        <>
        {mapCenter.latitude !== 0 && mapCenter.longitude !== 0 && (
            <NaverMap
                center={{
                    lat: mapCenter.latitude,
                    lng: mapCenter.longitude,
                }}
                defaultZoom={18}
                minZoom={12}
                maxZoom={19}
                ref={mapRef}
            >
                <MyMarker />
                {cafeInfoList?.cafes.map((cafe) => (
                    <CafeMarker key={cafe.id} cafe={cafe} />
                ))}
            </NaverMap>
        )}
        </>
    );
}
