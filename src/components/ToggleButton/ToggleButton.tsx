import { toggleState } from '@/atoms/toggle';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import * as Styled from './style'

export function ToggleButton() {
    const [isOn, setIsOn] = useRecoilState(toggleState);

    const toggle = () => setIsOn(!isOn);

    return (
        <Styled.ToggleButtonContainer isOn={isOn} onClick={toggle}>
            <Styled.ToggleButtonText isOn={isOn}>{isOn ? '운영 중' : '모두 보기'}</Styled.ToggleButtonText>
            <Styled.ToggleButtonCircle isOn={isOn} />
        </Styled.ToggleButtonContainer>
    );
};