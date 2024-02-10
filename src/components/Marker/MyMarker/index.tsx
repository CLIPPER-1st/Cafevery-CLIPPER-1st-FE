import {useEffect} from 'react';
import { useRecoilState } from 'recoil';
import { Marker } from 'react-naver-maps'; // 이 부분은 실제 사용하시는 라이브러리에 맞게 조정해주세요.
import MyMarkerImg from '@/assets/Markers/MyMarker.png';
import useGeolocation from '@/hooks/useGeolocation';
import { myLocationState } from '@/atoms/location';

export default function MyMarker() {
    const { loaded, coordinates } = useGeolocation();
    const [myLocation, setMyLocation] = useRecoilState(myLocationState);

    // 좌표가 로드되었을 때만 myLocation 상태 업데이트
    useEffect(() => {
        if (loaded) {
            setMyLocation({ latitude: coordinates.lat, longitude: coordinates.lng });
        }
    }, [loaded, coordinates, setMyLocation]);

    // 좌표가 로드되었고, 유효한 경우에만 Marker 렌더링
    if (!loaded || !coordinates.lat || !coordinates.lng) {
        return null; // 좌표가 없거나 로드되지 않았다면 렌더링하지 않음
    }

    return (
        <>
        <Marker
            position={{
                lat: coordinates.lat,
                lng: coordinates.lng,
            }}
                icon={{
                content: `
                    <div style="width: 30px; height: 30px;">
                    <img src="${MyMarkerImg}" style="width: 30px; height: 30px;" />
                    </div>
                `,
                anchor: { x: 15, y: 30 },
                }}
            />
        </>
    )
}
