import {SettingButtonProps} from '@/interfaces/button';
import Button from '../Button';
import SettingButtonImg from '@/assets/Buttons/SettingButton.png'

export default function SettingButton(props: SettingButtonProps) {

  return (
    <Button 
      width={40} 
      height={40} 
      background={SettingButtonImg} 
      backgroundSize='40px 40px'
      {...props}
      position={"absolute"}
      top={20}
      right={20}
      zIndex={100}
    >
      {props.children}
    </Button>
  );
}