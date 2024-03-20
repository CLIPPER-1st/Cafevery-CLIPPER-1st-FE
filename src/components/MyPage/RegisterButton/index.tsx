import {RegisterButtonProps} from '@/interfaces/button';
import Button from '../../common/Button/Button';
import CheckImg from '@/assets/Buttons/CheckButtonBrown.png'

export default function RegisterButton(props: RegisterButtonProps) {

  return (
    <Button 
      width={55} 
      height={55} 
      background={CheckImg} 
      position={props.position}
      right={0}
      {...props}
    >
      {props.children}
    </Button>
  );
}