import {GoToMyLocationButtonProps} from '@/interfaces/button';
import Button from '../../common/Button/Button';
import GoToMyLocationButtonImg from '@/assets/Buttons/GoToMyLocationButton.png'

export default function GoToMyLocationButton(props: GoToMyLocationButtonProps) {

  return (
    <Button width={56} height={56} background={GoToMyLocationButtonImg} {...props}>
      {props.children}
    </Button>
  );
}