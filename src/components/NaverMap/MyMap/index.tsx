import React, { useEffect, useState } from 'react';
import { NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import useGeolocation from '@/hooks/useGeolocation';
import MyMarkerImg from '@/assets/Markers/MyMarker.png'
export function MyMap() {
    const navermaps = useNavermaps();
    const { loaded, coordinates, heading } = useGeolocation();
    const markerWidth = 40;
    const markerHeight = 45;

    console.log(heading)
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
                            <div style="transform: rotate(${heading}deg) width: ${markerWidth}px; height: ${markerHeight}px;">
                                <img src="${MyMarkerImg}" style="width: ${markerWidth}px; height: ${markerHeight}px;" />
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