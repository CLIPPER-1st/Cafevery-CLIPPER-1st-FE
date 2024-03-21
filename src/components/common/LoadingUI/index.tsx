import { useEffect } from 'react';
import * as Styled from './style';

interface LoadingProps {
    showLoading?: boolean;
}

export default function LoadingUI({ showLoading }: LoadingProps) {

    useEffect(() => {
        if(!showLoading) return;
    }, [showLoading]);

    return (
        <Styled.Layout>
            <Styled.Wrapper>
                <Styled.LoadingIcon />
                <Styled.LoadingText>
                    불러오는 중...
                </Styled.LoadingText>
            </Styled.Wrapper>
        </Styled.Layout>
    );
}
