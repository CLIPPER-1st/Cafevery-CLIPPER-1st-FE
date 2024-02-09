import { useEffect, useRef } from 'react';
import { NaverMap } from 'react-naver-maps';
import { useRecoilState } from 'recoil';
import { myLocationState, searchedLocationState } from '@/atoms/location';
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
    const [searchedLocation, setSearchedLocation] = useRecoilState(searchedLocationState);
    const [cafeInfoList] = useRecoilState(cafeInfoListState); //TODO: 임시 
    //const cafeList = useFetchCafeList(myLocation.latitude, myLocation.longitude); //TODO: 
    const nowUrl = useLocation();
    const [{ minValue, maxValue }, ] = useRecoilState(timeFilterState(nowUrl.pathname));
    const [distance, ] = useRecoilState(distanceState(nowUrl.pathname));
    const mapRef = useRef(null);
    const mapCenter = useMapCenter(mapRef.current);

    useEffect(() => {
        console.log("mapCenter: ",mapCenter); // 지도 중심 위치 출력
    }, [loaded,coordinates, mapCenter]);

    useEffect(() => {
        if (loaded && coordinates) {
            setSearchedLocation({ latitude: coordinates.lat, longitude: coordinates.lng });
        }
        console.log(searchedLocation)
    }, [loaded, coordinates, setSearchedLocation]);
    
    return (
        <>
        {searchedLocation.latitude !== 0 && searchedLocation.longitude !== 0 && (
            <NaverMap
                center={{
                    lat: searchedLocation.latitude,
                    lng: searchedLocation.longitude,
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
