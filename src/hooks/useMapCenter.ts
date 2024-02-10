import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { mapCenterState } from '@/atoms/location';

const useMapCenter = (naverMap) => {
    const [mapCenter, setMapCenter] = useRecoilState(mapCenterState);

    useEffect(() => {
        if (!naverMap) return;

        // 지도의 중심 위치가 변경될 때마다 해당 위치를 mapCenter 상태에 업데이트
        const boundsChangedListener = naver.maps.Event.addListener(naverMap, 'bounds_changed', () => {
            const center = naverMap.getCenter();
            setMapCenter({
                latitude: center.lat(),
                longitude: center.lng(),
            });
        });

        return () => naver.maps.Event.removeListener(boundsChangedListener);
    }, [naverMap, setMapCenter]);

    return mapCenter; // 현재 지도의 중심 위치 반환
};

export default useMapCenter;
