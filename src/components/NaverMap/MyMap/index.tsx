import React, { useEffect, useState } from 'react';
import { NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import useGeolocation from '@/hooks/useGeolocation';
import MyMarkerImg from '@/assets/Markers/MyMarker.png'
export function MyMap() {
    const navermaps = useNavermaps();
    const { loaded, coordinates } = useGeolocation();
    const markerSize = 40; 
    return (
        <>
            {loaded && coordinates && (
            <NaverMap
                defaultZoom={18}
                center={new navermaps.LatLng(coordinates.lat, coordinates.lng)}
            >
                <Marker
                    position={new navermaps.LatLng(coordinates.lat, coordinates.lng)}
                    icon={{
                        content: `
                            <div style="width: ${markerSize}px; height: ${markerSize}px;">
                                <img src="${MyMarkerImg}" style="width: ${markerSize}px; height: ${markerSize}px;" />
                            </div>
                        `,
                        anchor: new navermaps.Point(25, 25)
                    }}
                />
            </NaverMap>
            )}
        </>
    );
};