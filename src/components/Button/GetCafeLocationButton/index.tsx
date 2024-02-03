import {GetCafeLocationButtonProps} from '@/interfaces/button';
import Button from '../Button';
import GetCafeLocationButtonImg from '@/assets/Buttons/GetCafeLocationButton.png'

export default function GetCafeLocationButton(props: GetCafeLocationButtonProps) {

  return (
    <Button width={180} height={44} background={GetCafeLocationButtonImg} {...props}>
      {props.children}
    </Button>
  );
}