import {SettingCloseButtonProps} from '@/interfaces/button';
import Button from '../Button';
import CloseImg from '@/assets/Icons/SettingClose.png';
import {useNavigate} from 'react-router-dom';

export default function SettingCloseButton(props: SettingCloseButtonProps) {
  const navigate = useNavigate();
  const handleClicked = () => {
    navigate('/mypage');
  };

  return (
    <Button
      width={30}
      height={30}
      background={CloseImg}
      top={20}
      right={20}
      position={'absolute'}
      onClick={() => handleClicked()}
      zIndex={100}
      {...props}
    >
      {props.children}
    </Button>
  );
}
