import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { Marker } from 'react-naver-maps'; // react-naver-maps 라이브러리 사용 예시
import MyMarkerImg from '@/assets/Markers/MyMarker.png';
import useGeolocation from '@/hooks/useGeolocation';
import { myLocationState } from '@/atoms/location';

export default function MyMarker() {
    const { loaded, coordinates } = useGeolocation();
    const [myLocation, setMyLocation] = useRecoilState(myLocationState);

    // 위치 정보가 로드되었는지 확인하고 myLocation 상태를 업데이트합니다.
    useEffect(() => {
        if (loaded && coordinates.lat && coordinates.lng) {
            setMyLocation({longitude: coordinates.lng, latitude: coordinates.lat});
        }
    }, [loaded, coordinates, setMyLocation]);

    // 위치 정보가 유효한 경우에만 Marker 컴포넌트를 렌더링합니다.
    if (!loaded || coordinates.lat == null || coordinates.lng == null) {
        return null; // 위치 정보가 로드되지 않았거나 유효하지 않은 경우 렌더링하지 않음
    }

    return (
        <Marker
            position={{ lat: myLocation.latitude, lng: myLocation.longitude }}
            icon={{
                content: `<div style="width: 30px; height: 30px;"><img src="${MyMarkerImg}" alt="My Location" style="width: 100%; height: 100%;" /></div>`,
                // anchor 설정이 필요한 경우 여기에 추가
            }}
        />
    );
}
