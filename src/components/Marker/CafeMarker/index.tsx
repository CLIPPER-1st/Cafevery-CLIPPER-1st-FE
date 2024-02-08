import { myLocationState } from '@/atoms/location';
import React from 'react'
import { useRecoilState } from 'recoil';
import { Marker, useNavermaps } from 'react-naver-maps';
import CafeMarkerImg from '@/assets/Markers/CafeMarker.png'
import LikedCafeMarkerImg from '@/assets/Markers/LikedCafeMarker.png'
import useModal from '@/hooks/useModal';
import CafeInfoModal from '@/components/Modal/CafeInfoModal';

export default function CafeMarker({ cafe }) {
    const {isOpen, openModal, closeModal} = useModal();
    const navermaps = useNavermaps();
    const handleCafeInfoModalOpen = () => {
        openModal();
    }

    const markerImage = cafe.liked ? LikedCafeMarkerImg : CafeMarkerImg;

    return (
        <>            
            <Marker
                key={cafe.id}
                onClick={handleCafeInfoModalOpen}
                position={{
                    lat: cafe.latitude,
                    lng: cafe.longitude,
                }}
                icon={{
                    content: `
                        <div style="width: 40px; height: 40px;">
                        <img src="${markerImage}" style="width: 40px; height: 40px;" />
                        </div>
                    `,
                    anchor: new navermaps.Point(20, 40),
                }}
            />

            {isOpen && (
                <CafeInfoModal 
                    isOpen={isOpen}
                    onClose={closeModal}
                    id={cafe.id}
                />
            )}
        </>
    )
}
