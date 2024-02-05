import { useEffect } from 'react';
import { NaverMap } from 'react-naver-maps';
import { useRecoilState } from 'recoil';
import { locationState, myLocationState } from '@/atoms/location';
import useGeolocation from '@/hooks/useGeolocation';
import CafeMarker from '@/components/Marker/CafeMarker';
import MyMarker from '@/components/Marker/MyMarker';


export function MyMap() {
    const { loaded, coordinates } = useGeolocation();
    const [location, setLocation] = useRecoilState(locationState);
    const [myLocation, setMyLocation] = useRecoilState(myLocationState);

    useEffect(() => {
        if (loaded && coordinates) {
            setMyLocation({ latitude: coordinates.lat, longitude: coordinates.lng });
            setLocation({ latitude: coordinates.lat, longitude: coordinates.lng });
            console.log(coordinates)
        }
    }, [loaded, coordinates, setLocation]);
    
    return (
        <>
        {location.latitude !== 0 && location.longitude !== 0 && (
            <NaverMap
                center={{
                    lat: location.latitude,
                    lng: location.longitude,
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
