import {CloseButtonProps} from '@/interfaces/button';
import Button from '../Button';
import CloseImg from '@/assets/Icons/Close.png'

export default function CloseButton(props: CloseButtonProps) {

  return (
    <Button width={24} height={24} background={CloseImg} margin={"0 5px 0 0"}{...props}>
      {props.children}
    </Button>
  );
}