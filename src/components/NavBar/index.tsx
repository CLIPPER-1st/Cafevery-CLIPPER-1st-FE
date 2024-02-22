import React from 'react'
import * as Styled from './style'
import HomePageButton from '@/components/Button/HomePageButton'
import LikePageButton from '@/components/Button/LikePageButton'
import MyPageButton from '@/components/Button/MyPageButton'

export default function NavBar() {
    return (
        <Styled.Container>
            <HomePageButton />
            <LikePageButton />
            <MyPageButton />
        </Styled.Container>
    )
}
// 폴더 분리 방식
// 기능에 의한 분리 / 지역성의 원칙 / 도메인에 의한 분리

// liktpage > pages, hooks, constants, 
// src/hooks
// src/componn