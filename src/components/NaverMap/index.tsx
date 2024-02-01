import React from 'react'
import { NaverMapContainer } from './NaverMapContainer'
import { NavermapsProvider } from 'react-naver-maps';

export function NaverMap() {
    return (
        <>
            <NavermapsProvider ncpClientId={import.meta.env.VITE_APP_NAVER_CLIENT_ID} >
                <NaverMapContainer />
            </NavermapsProvider>
        </>

    )
}
