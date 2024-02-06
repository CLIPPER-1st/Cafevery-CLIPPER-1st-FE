import {TextButtonProps} from '@/interfaces/button';
import Button from '../Button';
import theme from '@/theme';

export default function TextButton(props: TextButtonProps) {

  return (
    <Button 
      width={250} 
      height={24} 
      color={`${theme.colors.darkBrown}`} 
      margin={"20px 0 20px 16px"}
      fontSize={18}
      backgroundColor={"transparent"}
      {...props}
    >
      {props.children}
    </Button>
  );
}