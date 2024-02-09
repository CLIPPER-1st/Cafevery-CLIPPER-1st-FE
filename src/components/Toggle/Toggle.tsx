import * as Styled from './style';

interface Props {
  isOn: boolean;
  toggle: () => void;
}

export function Toggle(props: Props) {
  return (
    <Styled.ToggleButtonContainer isOn={props.isOn} onClick={props.toggle}>
      <Styled.ToggleButtonText isOn={props.isOn}>
        {props.isOn ? '운영 중' : '모두 보기'}
      </Styled.ToggleButtonText>
      <Styled.ToggleButtonCircle isOn={props.isOn} />
    </Styled.ToggleButtonContainer>
  );
}
