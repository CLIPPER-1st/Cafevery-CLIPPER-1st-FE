import React from 'react';
import { useRecoilState } from 'recoil';
import { Marker, useNavermaps } from 'react-naver-maps';
import CafeMarkerImg from '@/assets/Markers/CafeMarker.png';
import LikedCafeMarkerImg from '@/assets/Markers/LikedCafeMarker.png';
import SummaryCafeInfoModal from '@/components/common/Modal/SummaryCafeInfoModal';
import { currentModalState } from '@/atoms/modalState';
import { Cafe } from '@/interfaces/cafeInfo';

export default function CafeMarker({ data }: { data: Cafe }) {
    const [currentModal, setCurrentModal] = useRecoilState(currentModalState);
    const navermaps = useNavermaps();

    const handleMarkerClick = () => {
        if (currentModal === data.id) {
            setCurrentModal(null);
        } else {
            setCurrentModal(data.id);
        }
    };

    const markerImage = data.liked ? LikedCafeMarkerImg : CafeMarkerImg;

    return (
        <>          
        {navermaps && (  
            <Marker
                key={data.id}
                onClick={handleMarkerClick}
                position={new navermaps.LatLng(data.latitude, 
                    data.longitude)
                }
                icon={{
                    content: `<div style="width: 40px; height: 40px;"><img src="${markerImage}" style="width: 40px; height: 40px;" /></div>`,
                    anchor: new navermaps.Point(20, 40),
                }}
            />
            )}
            {currentModal === data.id && (
                <SummaryCafeInfoModal 
                    isOpen={currentModal === data.id}
                    onClose={() => setCurrentModal(null)}
                    id={data.id}
                />
            )}
        </>
    );
}
