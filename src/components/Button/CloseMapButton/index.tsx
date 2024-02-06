import {CloseMapButtonProps} from '@/interfaces/button';
import Button from '../Button';
import CloseMapButtonImg from '@/assets/Buttons/CloseMapButton.png'

export default function CloseMapButton(props: CloseMapButtonProps) {

  return (
    <Button 
      width={55} 
      height={55} 
      background={CloseMapButtonImg} 
      margin={"0 0 0 0"}
      {...props}
      position={"absolute"}
      top={20}
      right={30}
      zIndex={100}
    >
      {props.children}
    </Button>
  );
}