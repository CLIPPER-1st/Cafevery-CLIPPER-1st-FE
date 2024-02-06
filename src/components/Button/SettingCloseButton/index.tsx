import {SettingCloseButtonProps} from '@/interfaces/button';
import Button from '../Button';
import CloseImg from '@/assets/Icons/SettingClose.png';

export default function SettingCloseButton(props: SettingCloseButtonProps) {
  return (
    <Button
      width={30}
      height={30}
      background={CloseImg}
      top={27}
      right={27}
      position={'fixed'}
      {...props}
    >
      {props.children}
    </Button>
  );
}
