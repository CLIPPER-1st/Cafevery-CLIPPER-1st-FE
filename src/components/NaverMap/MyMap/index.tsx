// MyMap.tsx
import React, { useEffect } from 'react';
import { NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import { useRecoilState } from 'recoil';
import { locationState, myLocationState } from '@/atoms/location';
import useGeolocation from '@/hooks/useGeolocation'; // useGeolocation Hook import 필요
import MyMarkerImg from '@/assets/Markers/MyMarker.png'

export function MyMap() {
    const navermaps = useNavermaps();
    const { loaded, coordinates } = useGeolocation();
    const [location, setLocation] = useRecoilState(locationState);
    const [myLocation, setMyLocation] = useRecoilState(myLocationState);

    useEffect(() => {
        if (loaded && coordinates) {
        setMyLocation({ latitude: coordinates.lat, longitude: coordinates.lng });
        setLocation({ latitude: coordinates.lat, longitude: coordinates.lng });
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
            <Marker
                position={{
                lat: myLocation.latitude,
                lng: myLocation.longitude,
                }}
                icon={{
                content: `
                    <div style="width: 40px; height: 40px;">
                    <img src="${MyMarkerImg}" style="width: 40px; height: 40px;" />
                    </div>
                `,
                anchor: new navermaps.Point(20, 40),
                }}
            />
            </NaverMap>
        )}
        </>
    );
}
