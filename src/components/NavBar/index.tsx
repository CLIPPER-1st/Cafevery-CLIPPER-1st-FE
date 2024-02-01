import React from 'react'
import * as Styled from './style'
import HomePageButton from '@/components/Button/HomePageButton/HomePageButton'
import LikePageButton from '@/components/Button/LikePageButton/LikePageButton'
import MyPageButton from '@/components/Button/MyPageButton/MyPageButton'

export default function NavBar() {
    return (
        <Styled.Container>
            <HomePageButton />
            <LikePageButton />
            <MyPageButton />
        </Styled.Container>
    )
}
