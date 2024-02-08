import { useEffect } from 'react';
import { NaverMap } from 'react-naver-maps';
import { useRecoilState } from 'recoil';
import { myLocationState, searchedLocationState } from '@/atoms/location';
import useGeolocation from '@/hooks/useGeolocation';
import CafeMarker from '@/components/Marker/CafeMarker';
import MyMarker from '@/components/Marker/MyMarker';
import { cafeInfoState } from '@/atoms/CafeInfoState';
import { useFetchCafeList } from '@/hooks/useFetchCafeList';


export function MyMap() {
    const { loaded, coordinates } = useGeolocation();
    const [searchedLocation, setSearchedLocation] = useRecoilState(searchedLocationState);
    const [cafeInfoList] = useRecoilState(cafeInfoState); //TODO: 임시 
    //const cafeList = useFetchCafeList(myLocation.latitude, myLocation.longitude); //TODO: 
    
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
                {cafeInfoList?.cafes.map((cafe) => (
                    <CafeMarker key={cafe.id} cafe={cafe} />
                ))}
            </NaverMap>
        )}
        </>
    );
}
