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
import { useFilteredCafes } from '@/hooks/useFilteredCafes';

export function MyMap() {
    const { loaded, coordinates } = useGeolocation();
    const nowUrl = useLocation();
    const [{ minValue, maxValue }, ] = useRecoilState(timeFilterState(nowUrl.pathname));
    const [distance, ] = useRecoilState(distanceState(nowUrl.pathname));
    const mapRef = useRef(null);
    const mapCenter = useMapCenter(mapRef.current);
    const [mapCenterLocation, setMapCenterLocation ] = useRecoilState(mapCenterState)
    const [cafeInfoList] = useRecoilState(cafeInfoListState({distance: distance, startTime: minValue, endTime: maxValue})); //TODO: 임시 
    //const cafeList = useFetchCafeList(myLocation.latitude, myLocation.longitude); //TODO: 
    const filteredCafes = useFilteredCafes(minValue, maxValue, distance);
    console.log("cafeInfoList", cafeInfoList)

    console.log("filteredCafes", filteredCafes)

    useEffect(() => {
        if (loaded && coordinates && mapCenterLocation.latitude === 0 &&  mapCenterLocation.longitude === 0) {
            setMapCenterLocation({ latitude: coordinates.lat, longitude: coordinates.lng });
        }

        if(mapCenter && coordinates && mapCenterLocation.latitude !== mapCenter.latitude && mapCenterLocation.longitude !== mapCenter.longitude) {
            setMapCenterLocation({ latitude: mapCenter.latitude, longitude: mapCenter.longitude });
            console.log("mapCenter :",mapCenter)
            console.log("mapCenterLocation: ", mapCenterLocation)

        }
    }, [loaded, coordinates ]);

    return (
        <>
        {mapCenterLocation.latitude !== 0 && mapCenterLocation.longitude !== 0 && (
            <NaverMap
                defaultZoom={18}
                minZoom={12}
                maxZoom={19}
                ref={mapRef}
                center={{
                    lat: mapCenterLocation.latitude,
                    lng: mapCenterLocation.longitude,
                }}
            >
                <MyMarker />
                {filteredCafes?.cafes.map((cafe) => (
                    <CafeMarker key={cafe.id} cafe={cafe} />
                ))}
            </NaverMap>
        )}
        </>
    );
}
