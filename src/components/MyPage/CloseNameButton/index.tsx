import {CloseNameButtonProps} from '@/interfaces/button';
import Button from '../../common/Button/Button';
import BoxCloseButtonImg from '@/assets/Buttons/BoxCloseButton.png'

export default function CloseNameButton(props: CloseNameButtonProps) {

  return (
    <Button 
      width={55} 
      height={55} 
      background={BoxCloseButtonImg} 
      position={props.position}
      right={0}
      {...props}
    >
      {props.children}
    </Button>
  );
}