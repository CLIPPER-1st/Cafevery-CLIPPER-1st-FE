// Splash.tsx
import React, { useEffect, useState } from 'react';
import * as Styled from './style';
import { SplashProps } from '@/interfaces/splash';

export default function Splash({ showSplash }: SplashProps) {
    const [animateOut, setAnimateOut] = useState(false);

    useEffect(() => {
        if(!showSplash) return;
        setAnimateOut(true);
    }, [showSplash]);

    return (
        <Styled.Layout>
            <Styled.Wrapper animateOut={animateOut}>
                <Styled.SplashIcon />
            </Styled.Wrapper>
        </Styled.Layout>
    );
}
