import { Marker, useNavermaps } from 'react-naver-maps';
import CafeMarkerImg from '@/assets/Markers/CafeMarker.png';
import LikedCafeMarkerImg from '@/assets/Markers/LikedCafeMarker.png';
import { Cafe } from '@/interfaces/cafeInfo';
import { useRecoilCallback, useSetRecoilState } from 'recoil';
import { currentModalState } from '@/atoms/modalState';
import { mapCenterState } from '@/atoms/location';

export default function CafeMarker({ data }: { data: Cafe }) {
    const navermaps = useNavermaps();
    const setMapCenterLocation = useSetRecoilState(mapCenterState)

    const markerImage = data.liked ? LikedCafeMarkerImg : CafeMarkerImg;

    const handleMarkerClick = useRecoilCallback(({ set }) => () => {
        set(currentModalState, data.id);
        setMapCenterLocation({ latitude: data.latitude, longitude: data.longitude });
    }, []);
    
    return (
        <>          
            {navermaps && (  
                <Marker
                    key={data.id}
                    onClick={() => handleMarkerClick()}
                    position={new navermaps.LatLng(data.latitude, data.longitude)}
                    icon={{
                        content: `<div style="width: 40px; height: 40px;"><img src="${markerImage}" style="width: 40px; height: 40px;" /></div>`,
                        anchor: new navermaps.Point(20, 40),
                    }}
                />
            )}
        </>
    );
}
