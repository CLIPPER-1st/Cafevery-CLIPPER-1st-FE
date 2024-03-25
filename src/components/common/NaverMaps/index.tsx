import { NavermapsProvider } from 'react-naver-maps';
import { useEffect, useRef } from 'react';
import { NaverMap } from 'react-naver-maps';
import { useRecoilState, useRecoilValue } from 'recoil';
import useGeolocation from '@/hooks/useGeolocation';
import CafeMarker from '@/components/Home/Marker/CafeMarker';
import MyMarker from '@/components/Home/Marker/MyMarker';
import useMapCenter from '@/hooks/useMapCenter';
import { mapCenterState, myLocationState } from '@/atoms/location';
import { Cafe, ICafeList } from '@/interfaces/cafeInfo';
import Splash from '@/components/common/Splash';
import { Container as MapDiv } from 'react-naver-maps'
import { useFilteredCafes } from '@/hooks/useFilteredCafes';
import { timeFilterState } from '@/atoms/timeFilter';
import { distanceState } from '@/atoms/distanceFilter';
import { useLocation } from 'react-router-dom';
import { toggleState } from '@/atoms/toggle';
import { showSplashState } from '@/atoms/showSplashState';
import { isMapLoadedState } from '@/atoms/mapState';

export default function NaverMaps( cafes: ICafeList ) {
    const { loaded, coordinates } = useGeolocation();
    const mapRef = useRef(null);
    const mapCenter = useMapCenter(mapRef.current);
    const [mapCenterLocation, setMapCenterLocation ] = useRecoilState(mapCenterState)
    const [showSplash, setShowSplash] = useRecoilState(showSplashState);
    const nowUrl = useLocation();
    const distance = useRecoilValue(distanceState(nowUrl.pathname));
    const showMap = useRecoilValue(toggleState((nowUrl.pathname)));
    const timeFilter = useRecoilValue(timeFilterState(nowUrl.pathname));
    const filteredCafes = useFilteredCafes(cafes, timeFilter.minValue, timeFilter.maxValue, distance, showMap);
    const [isMapLoaded, setIsMapLoaded] = useRecoilState(isMapLoadedState); // 수정됨
    const [myLocation, setMyLocation] = useRecoilState(myLocationState);

    useEffect(() => {
        if (loaded && coordinates && mapCenterLocation.latitude === 0 && mapCenterLocation.longitude === 0) {
            setMapCenterLocation({ latitude: coordinates.lat, longitude: coordinates.lng });
            setIsMapLoaded(true); // 지도 로딩 완료
            setShowSplash(true);
            setMyLocation({ latitude: coordinates.lat, longitude: coordinates.lng});

        }

        if(mapCenter && coordinates && mapCenterLocation.latitude !== mapCenter.latitude && mapCenterLocation.longitude !== mapCenter.longitude) {
            setMapCenterLocation({ latitude: mapCenter.latitude, longitude: mapCenter.longitude });
            setIsMapLoaded(true); // 지도 로딩 완료
        }
    }, [coordinates, loaded, mapCenter, mapCenterLocation, setMapCenterLocation]);


    return (
        <>
            {(!isMapLoaded || showSplash) && (
                <Splash
                    showSplash={showSplash}
                    onAnimationEnd={() => setShowSplash(false)} // 애니메이션 종료 시 상태 업데이트
                />
            )}
            <NavermapsProvider ncpClientId={import.meta.env.VITE_APP_NAVER_CLIENT_ID} >
                <MapDiv style={{ width: '430px', height: '932px'}}>
                    {mapCenterLocation.latitude !== 0 && mapCenterLocation.longitude !== 0 && (
                        <NaverMap
                            defaultZoom={18}
                            minZoom={12}
                            maxZoom={19}
                            ref={mapRef}
                            center={{lat: mapCenterLocation.latitude, 
                                lng: mapCenterLocation.longitude}
                            }
                        >
                            {(coordinates.lat !== undefined && coordinates.lng !== undefined) && (
                                <MyMarker 
                                    latitude={myLocation.latitude}
                                    longitude={myLocation.longitude}
                                />
                            )}
                            {filteredCafes?.cafes.map((cafe: Cafe) => (
                                <CafeMarker 
                                    key={cafe.id} 
                                    data={cafe}
                                />
                            ))}
                        </NaverMap>
                    )}
                </MapDiv>
            </NavermapsProvider>
        </>
    )
}

