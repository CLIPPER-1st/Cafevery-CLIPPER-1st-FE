import { toggleState } from '@/atoms/toggle';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import * as Styled from './style';

export function Toggle() {
  const nowUrl = useLocation();
  const [isOn, setIsOn] = useRecoilState(toggleState(nowUrl.pathname));

  const toggle = () => {
    setIsOn(!isOn);
  }
  return (
    <Styled.ToggleButtonContainer isOn={isOn} onClick={() => toggle()}>
      <Styled.ToggleButtonText isOn={isOn}>
        {isOn ? '운영 중' : '모두 보기'}
      </Styled.ToggleButtonText>
      <Styled.ToggleButtonCircle isOn={isOn} />
    </Styled.ToggleButtonContainer>
  );
}
