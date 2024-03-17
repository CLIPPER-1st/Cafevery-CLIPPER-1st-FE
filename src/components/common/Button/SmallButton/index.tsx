import {SmallButtonProps} from '@/interfaces/button';
import Button from '../Button';
import CloseImg from '@/assets/Icons/Close.png'
import theme from '@/theme';

export default function SmallButton(props: SmallButtonProps) {

  return (
    <Button 
    width={80} 
    height={28} 
    backgroundColor={theme.colors.darkBrown} 
    margin={"0 5px 0 0"}
    borderRadius={"20px"}
    color={theme.colors.white}
    fontSize={16}
    {...props}
    >
      {props.children}
    </Button>
  );
}