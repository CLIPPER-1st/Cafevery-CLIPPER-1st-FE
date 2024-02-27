import { NavermapsProvider } from 'react-naver-maps';
import { useEffect, useRef, useState } from 'react';
import { NaverMap, useNavermaps } from 'react-naver-maps';
import { useRecoilState, useRecoilValue } from 'recoil';
import useGeolocation from '@/hooks/useGeolocation';
import CafeMarker from '@/components/Marker/CafeMarker';
import MyMarker from '@/components/Marker/MyMarker';
import useMapCenter from '@/hooks/useMapCenter';
import { mapCenterState } from '@/atoms/location';
import { ICafeList } from '@/interfaces/cafeInfo';
import Splash from '@/components/Splash';
import { Container as MapDiv } from 'react-naver-maps'
import { useFilteredCafes } from '@/hooks/useFilteredCafes';
import { timeFilterState } from '@/atoms/timeFilter';
import { distanceState } from '@/atoms/distanceFilter';
import { useLocation } from 'react-router-dom';
import { toggleState } from '@/atoms/toggle';

export function NaverMaps( cafes: ICafeList ) {
    const { loaded, coordinates } = useGeolocation();
    const mapRef = useRef(null);
    const mapCenter = useMapCenter(mapRef.current);
    const [mapCenterLocation, setMapCenterLocation ] = useRecoilState(mapCenterState)
    //const [cafeInfoList, setCafeInfoList] = useRecoilState(cafeInfoListState({distance: distance, startTime: timeFilter.minValue, endTime: timeFilter.maxValue})); //TODO: 임시 
    const navermaps = useNavermaps();
    const [showSplash, setShowSplash] = useState(false);
    const nowUrl = useLocation();
    const distance = useRecoilValue(distanceState(nowUrl.pathname));
    const showMap = useRecoilValue(toggleState((nowUrl.pathname)));
    const timeFilter = useRecoilValue(timeFilterState(nowUrl.pathname));
    const filteredCafes = useFilteredCafes(cafes, timeFilter.minValue, timeFilter.maxValue, distance, showMap);

    console.log('NaverMaps cafe filtered data', cafes)
    useEffect(() => {
        if (mapCenterLocation.latitude !== 0 && mapCenterLocation.longitude !== 0) {
            setShowSplash(true);
        }
        console.log('mapCenterLocation', mapCenterLocation)

    }, [mapCenterLocation]);

    console.log("mymap render")
    useEffect(() => {
        if (loaded && coordinates && mapCenterLocation.latitude === 0 &&  mapCenterLocation.longitude === 0) {
            setMapCenterLocation({ latitude: coordinates.lat, longitude: coordinates.lng });
        }

        if(mapCenter && coordinates && mapCenterLocation.latitude !== mapCenter.latitude && mapCenterLocation.longitude !== mapCenter.longitude) {
            setMapCenterLocation({ latitude: mapCenter.latitude, longitude: mapCenter.longitude });
        }
        console.log('mapCenterLocation', mapCenterLocation)

    }, [coordinates]);

    return (
        <>
            <NavermapsProvider ncpClientId={import.meta.env.VITE_APP_NAVER_CLIENT_ID} >
                <MapDiv style={{ width: '430px', height: '932px'}}>
                    <Splash showSplash={showSplash} />
                    {mapCenterLocation.latitude !== 0 && mapCenterLocation.longitude !== 0 && (
                        <NaverMap
                            defaultZoom={18}
                            minZoom={12}
                            maxZoom={19}
                            ref={mapRef}
                            center={new navermaps.LatLng(mapCenterLocation.latitude, 
                                mapCenterLocation.longitude)
                            }
                        >
                            <MyMarker />
                            {filteredCafes?.cafes.map((cafe) => (
                                <CafeMarker key={cafe.id} data={cafe} />
                            ))}
                        </NaverMap>
                    )}
                </MapDiv>            
            </NavermapsProvider>
        </>
    )
}
