import SettingInfoButton from '@/components/Button/InfoButton';
import * as Styled from './style';
import Info from '@/assets/Icons/Info.png';

interface Props {
  title: string;
  handleClicked?: () => void;
}

export default function SettingInfo(props: Props) {
  return (
    <Styled.Container onClick={() => props.handleClicked()}>
      <Styled.Icon src={Info} />
      <Styled.Label>{props.title}</Styled.Label>
      <SettingInfoButton />
    </Styled.Container>
  );
}
