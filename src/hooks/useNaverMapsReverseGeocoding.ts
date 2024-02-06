import { useState, useEffect } from 'react';

export const useNaverMapsReverseGeocoding = (latitude: number, longitude: number) => {
    const [address, setAddress] = useState<string>('');

    useEffect(() => {
        if (!latitude || !longitude) return;

        const navermaps = window.naver.maps;

        navermaps.Service.reverseGeocode({
            coords: new navermaps.LatLng(latitude, longitude),
            orders: [navermaps.Service.OrderType.ROAD_ADDR],
        }, (status: number, response: { v2: { address: { roadAddress: string; }; }; }) => {
            const result = response.v2.address.roadAddress;
            console.log(response.v2.address.roadAddress)
            setAddress(result);
        });
    }, [latitude, longitude]);

    return address;
};
