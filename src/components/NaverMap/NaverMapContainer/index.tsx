import React from 'react'
import MyMap from '../MyMap'
import { Container as MapDiv } from 'react-naver-maps'

const NaverMapContainer = () => {
    return (
        <MapDiv style={{ width: '100vw', height: '100vh', margin:'0px' }}>
            <MyMap />
        </MapDiv>

    )
}

export default NaverMapContainer
