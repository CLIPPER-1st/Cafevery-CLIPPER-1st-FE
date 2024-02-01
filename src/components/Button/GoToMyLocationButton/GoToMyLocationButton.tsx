import {GoToMyLocationButtonProps} from '@/interfaces/button';
import Button from '../Button';
import GoToMyLocationButtonImg from '@/assets/Buttons/GoToMyLocationButton.png'

export default function GoToMyLocationButton(props: GoToMyLocationButtonProps) {

  return (
    <Button width={34} height={34} background={GoToMyLocationButtonImg} {...props}>
      {props.children}
    </Button>
  );
}