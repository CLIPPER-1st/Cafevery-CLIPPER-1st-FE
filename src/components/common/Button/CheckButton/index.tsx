import {CheckButtonProps} from '@/interfaces/button';
import Button from '../Button';
import CheckImg from '@/assets/Buttons/CheckButton.png'

export default function CheckButton(props: CheckButtonProps) {

  return (
    <Button 
      width={63} 
      height={60} 
      background={CheckImg} 
      margin={"0 0 0 0"}
      {...props}
    >
      {props.children}
    </Button>
  );
}