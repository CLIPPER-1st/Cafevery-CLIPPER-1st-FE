import {DeleteFavoritePlaceButtonProps} from '@/interfaces/button';
import Button from '../Button';
import CloseImg from '@/assets/Icons/SettingClose.png';

export default function DeleteFavoritePlaceButton(props: DeleteFavoritePlaceButtonProps) {
  return (
    <Button
      width={22}
      height={22}
      background={CloseImg}
      {...props}
    >
      {props.children}
    </Button>
  );
}
