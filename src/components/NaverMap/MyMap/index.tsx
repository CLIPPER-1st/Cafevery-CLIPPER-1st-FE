import React, { useEffect } from 'react'
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps'

const MyMap = () => {
    
    const navermaps = useNavermaps()

    return (
        <NaverMap
            defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
            defaultZoom={10}
        >
            <Marker
                defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)}
            />
        </NaverMap>
    )

}

export default MyMap;