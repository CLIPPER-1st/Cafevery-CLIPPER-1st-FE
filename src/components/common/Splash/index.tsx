import React, { useEffect, useState } from 'react';
import * as Styled from './style';

interface SplashProps {
    showSplash?: boolean;
    onAnimationEnd?: () => void; // 애니메이션 종료 콜백
}

export default function Splash({ showSplash, onAnimationEnd }: SplashProps) {
    const [animateOut, setAnimateOut] = useState(false);

    useEffect(() => {
        if(!showSplash) return;
        const timer = setTimeout(() => {
            setAnimateOut(true);
        }, 0); // 애니메이션 시작

        return () => clearTimeout(timer);
    }, [showSplash]);

    return (
        <Styled.Layout>
            <Styled.Wrapper
                animateOut={animateOut}
                onAnimationEnd={() => {
                    if(animateOut) {
                    onAnimationEnd?.(); // 애니메이션 종료 시 콜백 호출
                    }
                }}
            >
                <Styled.SplashIcon />
            </Styled.Wrapper>
        </Styled.Layout>
    );
}
