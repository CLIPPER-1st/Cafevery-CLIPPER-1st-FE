import React from 'react'
import { MyMap } from '../MyMap'
import { Container as MapDiv } from 'react-naver-maps'

export function NaverMapContainer () {
    return (
        <MapDiv style={{ width: '430px', height: '932px'}}>
            <MyMap />
        </MapDiv>
    )
}