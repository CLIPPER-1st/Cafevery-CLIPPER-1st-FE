import { useEffect } from 'react';
import { NaverMap } from 'react-naver-maps';
import { useRecoilState } from 'recoil';
import { searchedLocationState } from '@/atoms/location';
import useGeolocation from '@/hooks/useGeolocation';
import CafeMarker from '@/components/Marker/CafeMarker';
import MyMarker from '@/components/Marker/MyMarker';


export function MyMap() {
    const { loaded, coordinates } = useGeolocation();
    const [searchedLocation, setSearchedLocation] = useRecoilState(searchedLocationState);

    useEffect(() => {
        if (loaded && coordinates) {
            setSearchedLocation({ latitude: coordinates.lat, longitude: coordinates.lng });
        }
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
            >
            <MyMarker />
            <CafeMarker />
            </NaverMap>
        )}
        </>
    );
}
