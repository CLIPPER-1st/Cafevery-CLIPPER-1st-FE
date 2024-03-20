import {CloseMapButtonProps} from '@/interfaces/button';
import Button from '../../common/Button/Button';
import CloseMapButtonImg from '@/assets/Buttons/CloseMapButton.png'

export default function CloseMapButton(props: CloseMapButtonProps) {

  return (
    <Button 
      width={50} 
      height={50} 
      background={CloseMapButtonImg}
      {...props}
      position={"absolute"}
      top={20}
      right={20}
      zIndex={10}
    >
      {props.children}
    </Button>
  );
}