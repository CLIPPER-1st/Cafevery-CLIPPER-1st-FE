import {FavoritePlaceSelectButtonProps} from '@/interfaces/button';
import Button from '../../common/Button/Button';
import theme from '@/theme';

export default function FavoritePlaceSelectButton(props: FavoritePlaceSelectButtonProps) {

  return (
    <Button 
      width={57.1}
      height={24}
      backgroundColor={theme.colors.white}
      boxShadow={"0px 3px 6px rgba(0, 0, 0, 0.2)"}
      position={'relative'}
      bottom={50}
      margin={"0 5px 0 0"}
      color={theme.colors.black}
      borderRadius={"10px"}
      {...props}
    >
      {props.children}
    </Button>
  );
}