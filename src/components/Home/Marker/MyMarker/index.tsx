import { Marker } from 'react-naver-maps'; // react-naver-maps 라이브러리 사용 예시
import MyMarkerImg from '@/assets/Markers/MyMarker.png';
import { ILocation } from '@/interfaces/location';

export default function MyMarker({ latitude, longitude }: ILocation) {
    return (
        <Marker
            position={{ lat: latitude, lng: longitude }}
            icon={{
                content: `<div style="width: 30px; height: 30px;"><img src="${MyMarkerImg}" alt="My Location" style="width: 100%; height: 100%;" /></div>`,
            }}
        />
    );
}
