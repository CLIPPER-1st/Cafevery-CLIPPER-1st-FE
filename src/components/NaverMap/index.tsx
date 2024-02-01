import React from 'react'
import { NaverMapContainer } from './NaverMapContainer'
import { NavermapsProvider } from 'react-naver-maps';

export function NaverMap() {
    return (
        <>
            <NavermapsProvider ncpClientId={"cb04ozhs17"} >
                <NaverMapContainer />
            </NavermapsProvider>
        </>

    )
}
