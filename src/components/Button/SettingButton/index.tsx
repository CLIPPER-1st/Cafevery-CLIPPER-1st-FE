import {SettingButtonProps} from '@/interfaces/button';
import Button from '../Button';
import SettingButtonImg from '@/assets/Buttons/SettingButton.png'

export default function SettingButton(props: SettingButtonProps) {

  return (
    <Button 
      width={40} 
      height={40} 
      background={SettingButtonImg} 
      margin={"0 0 0 0"}
      {...props}
      position={"fixed"}
      top={20}
      right={20}
      zIndex={100}
    >
      {props.children}
    </Button>
  );
}