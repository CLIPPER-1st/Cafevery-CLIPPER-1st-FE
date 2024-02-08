import { myLocationState } from '@/atoms/location';
import React from 'react'
import { useRecoilState } from 'recoil';
import { Marker, useNavermaps } from 'react-naver-maps';
import CafeMarkerImg from '@/assets/Markers/CafeMarker.png'
import LikedCafeMarkerImg from '@/assets/Markers/LikedCafeMarker.png'
import useModal from '@/hooks/useModal';
import CafeInfoModal from '@/components/Modal/CafeInfoModal';
import { useFetchCafeList } from '@/hooks/useFetchCafeList';

export default function CafeMarker() {
    const [myLocation] = useRecoilState(myLocationState);
    const {isOpen, openModal, closeModal} = useModal();
    const navermaps = useNavermaps();
    const handleCafeInfoModalOpen = () => {
        openModal();
    }
    //const cafeList = useFetchCafeList(myLocation.latitude, myLocation.longitude);
    
    return (
        <>            
            <Marker
                onClick={handleCafeInfoModalOpen}
                position={{
                lat: myLocation.latitude + 0.0001,
                lng: myLocation.longitude + 0.0001,
                }}
                icon={{
                content: `
                    <div style="width: 40px; height: 40px;">
                    <img src="${CafeMarkerImg}" style="width: 40px; height: 40px;" />
                    </div>
                `,
                anchor: new navermaps.Point(20, 40),
                }}
            />

            {isOpen && (
                <CafeInfoModal 
                    isOpen={isOpen}
                    onClose={closeModal}
                />
            )}
        </>
    )
}
