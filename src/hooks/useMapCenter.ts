import { mapCenterState } from '@/atoms/location';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const useMapCenter = (naverMap) => {
    const [mapCenter, setMapCenter] = useRecoilState(mapCenterState)

    useEffect(() => {
        if (!naverMap) return;

        // 지도의 'bounds_changed' 이벤트에 대한 리스너 추가
        const boundsChangedListener = naver.maps.Event.addListener(naverMap, 'bounds_changed', () => {
            const center = naverMap.getCenter();
            setMapCenter({
                latitude: center.lat(),
                longitude: center.lng(),
            });
        });

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => naver.maps.Event.removeListener(boundsChangedListener);
    }, [naverMap]);

    return mapCenter;
};

export default useMapCenter;