import { myLocationState } from '@/atoms/location';
import React from 'react'
import { useRecoilState } from 'recoil';
import { Marker, useNavermaps } from 'react-naver-maps';
import MyMarkerImg from '@/assets/Markers/MyMarker.png'

export default function MyMarker() {
    const [myLocation] = useRecoilState(myLocationState);
    const navermaps = useNavermaps();

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
