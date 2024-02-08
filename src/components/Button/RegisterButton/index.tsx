import {RegisterButtonProps} from '@/interfaces/button';
import Button from '../Button';
import CheckImg from '@/assets/Buttons/CheckButtonBrown.png'

export default function RegisterButton(props: RegisterButtonProps) {

  return (
    <Button 
      width={85} 
      height={85} 
      background={CheckImg} 
      position={props.position}
      right={0}
      {...props}
    >
      {props.children}
    </Button>
  );
}