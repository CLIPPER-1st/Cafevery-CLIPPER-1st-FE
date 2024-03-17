import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Marker } from 'react-naver-maps'; // react-naver-maps 라이브러리 사용 예시
import MyMarkerImg from '@/assets/Markers/MyMarker.png';
import useGeolocation from '@/hooks/useGeolocation';
import { myLocationState } from '@/atoms/location';

export default function MyMarker() {
    const { loaded, coordinates } = useGeolocation();
    const [myLocation, setMyLocation] = useRecoilState(myLocationState);

    useEffect(() => {
        //if (loaded && coordinates?.lat !== undefined && coordinates?.lng !== undefined) {
        if (loaded && coordinates?.lat !== undefined && coordinates?.lng !== undefined) {
            setMyLocation({ latitude: coordinates.lat, longitude: coordinates.lng });
        }
    }, [loaded, coordinates, setMyLocation]);

    // 위치 정보가 유효한 경우에만 Marker 컴포넌트를 렌더링
    if (!loaded || coordinates?.lat === undefined || coordinates?.lng === undefined) {
        return null;
    }

    return (
        <Marker
            position={{ lat: myLocation.latitude, lng: myLocation.longitude }}
            icon={{
                content: `<div style="width: 30px; height: 30px;"><img src="${MyMarkerImg}" alt="My Location" style="width: 100%; height: 100%;" /></div>`,
            }}
        />
    );
}
