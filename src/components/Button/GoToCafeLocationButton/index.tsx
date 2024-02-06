import {GoToCafeLocationButtonProps} from '@/interfaces/button';
import Button from '../Button';
import theme from '@/theme';
import { useLocation } from 'react-router-dom';

export default function GoToCafeLocationButton(props: GoToCafeLocationButtonProps) {
  const location = useLocation();
  
  if (location.pathname !== '/likes') {
    return null;
  }

  return (
    <Button 
      width={132} 
      height={42} 
      backgroundColor={theme.colors.textMain} 
      margin={"0 0 0 140px"}
      borderRadius={'12px'}
      color={theme.colors.brown}
      fontSize={16}
      {...props}
    >
      {props.children}
      ↖ 지도에서 보기
    </Button>
  );
}