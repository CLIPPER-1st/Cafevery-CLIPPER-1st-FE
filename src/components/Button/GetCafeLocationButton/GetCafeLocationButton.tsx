import {GetCafeLocationButtonProps} from '@/interfaces/button';
import Button from '../Button';
import GetCafeLocationButtonImg from '@/assets/Buttons/GetCafeLocationButton.png'

export default function GetCafeLocationButton(props: GetCafeLocationButtonProps) {

  return (
    <Button width={131} height={27} background={GetCafeLocationButtonImg} {...props}>
      {props.children}
    </Button>
  );
}