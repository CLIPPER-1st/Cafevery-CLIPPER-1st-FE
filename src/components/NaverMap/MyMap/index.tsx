import { useEffect, useRef } from 'react';
import { NaverMap } from 'react-naver-maps';
import { useRecoilState } from 'recoil';
import useGeolocation from '@/hooks/useGeolocation';
import CafeMarker from '@/components/Marker/CafeMarker';
import MyMarker from '@/components/Marker/MyMarker';
import { cafeInfoListState } from '@/atoms/cafeInfoListState';
import { useFetchCafeList } from '@/hooks/useFetchCafeList';
import { timeFilterState } from '@/atoms/timeFilter';
import { distanceState } from '@/atoms/distanceFilter';
import { useLocation } from 'react-router-dom';
import useMapCenter from '@/hooks/useMapCenter';
import { mapCenterState } from '@/atoms/location';

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

    useEffect(() => {
        console.log("useEffect");
        console.log("if문 밖 mapCenter: ",mapCenter); // 지도 중심 위치 출력
        console.log("if문 밖 mapCenterLocation: ", mapCenterLocation)
        if(mapCenter.latitude !== mapCenterLocation.latitude && mapCenter.longitude !== mapCenterLocation.longitude) {
            console.log("mapCenter: ",mapCenter); // 지도 중심 위치 출력
            console.log("mapCenterLocation: ", mapCenterLocation)
            setMapCenterLocation({ latitude: mapCenter.latitude, longitude: mapCenter.longitude });

        }
    }, [mapCenter]);

    useEffect(() => {
        if (loaded && coordinates && mapCenterLocation.latitude === 0 ) {
            setMapCenterLocation({ latitude: coordinates.lat, longitude: coordinates.lng });
        }
        // console.log("loaded", loaded)
        // console.log("coordinates", coordinates)

        // console.log("로딩 전 mapCenter :",mapCenter)
        // console.log("로딩 전 mapCenterLocation :",mapCenterLocation)
    }, [loaded]);

    return (
        <>
        {mapCenterLocation.latitude !== 0 && mapCenterLocation.longitude !== 0 && (
            <NaverMap
                center={{
                    lat: mapCenterLocation.latitude,
                    lng: mapCenterLocation.longitude,
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
