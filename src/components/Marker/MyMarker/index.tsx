import { myLocationState } from '@/atoms/location';
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { Marker, useNavermaps } from 'react-naver-maps';
import MyMarkerImg from '@/assets/Markers/MyMarker.png'
import useGeolocation from '@/hooks/useGeolocation';

export default function MyMarker() {
    const navermaps = useNavermaps();
    const { loaded, coordinates } = useGeolocation();
    const [myLocation, setMyLocation] = useRecoilState(myLocationState);

    useEffect(() => {
        if (loaded && coordinates) {
            setMyLocation({ latitude: coordinates.lat, longitude: coordinates.lng });
        }
    }, [loaded, coordinates, setMyLocation]);

    return (
        <>            
            <Marker
                position={{
                lat: myLocation.latitude,
                lng: myLocation.longitude,
                }}
                icon={{
                content: `
                    <div style="width: 30px; height: 30px;">
                    <img src="${MyMarkerImg}" style="width: 30px; height: 30px;" />
                    </div>
                `,
                anchor: new navermaps.Point(20, 40),
                }}
            />
        </>
    )
}
