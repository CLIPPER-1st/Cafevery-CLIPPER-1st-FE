import { useState } from 'react';
import { Marker, useNavermaps } from 'react-naver-maps';
import CafeMarkerImg from '@/assets/Markers/CafeMarker.png';
import LikedCafeMarkerImg from '@/assets/Markers/LikedCafeMarker.png';
import SummaryCafeInfoModal from '@/components/Modal/SummaryCafeInfoModal';

export default function CafeMarker({ cafe }) {
    const [currentModal, setCurrentModal] = useState<number | null>(null);
    const navermaps = useNavermaps();

    const handleMarkerClick = () => {
        if (currentModal === cafe.id) {
            setCurrentModal(null);
        } else {
            setCurrentModal(cafe.id);
        }
    };

    const markerImage = cafe.liked ? LikedCafeMarkerImg : CafeMarkerImg;

    return (
        <>            
            <Marker
                key={cafe.id}
                onClick={handleMarkerClick}
                position={{lat: cafe.latitude, lng: cafe.longitude}}
                icon={{
                    content: `<div style="width: 40px; height: 40px;"><img src="${markerImage}" style="width: 40px; height: 40px;" /></div>`,
                    anchor: new navermaps.Point(20, 40),
                }}
            />
            {currentModal === cafe.id && (
                <SummaryCafeInfoModal 
                    isOpen={currentModal === cafe.id}
                    onClose={() => setCurrentModal(null)}
                    id={cafe.id}
                />
            )}
        </>
    );
}
