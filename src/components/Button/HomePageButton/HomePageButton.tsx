import {HomePageButtonProps} from '@/interfaces/button';
import Button from '../Button';
import HomeImg from '@/assets/Icons/Home.png'
import HomeClickedImg from '@/assets/Icons/HomeClicked.png'
import useCheckUrl from '@/hooks/useCheckUrl';
import { useNavigate } from 'react-router-dom';

export default function HomePageButton(props: HomePageButtonProps) {
  const isMatched = useCheckUrl(['/']);
  const navigate = useNavigate();

  const getImage = () => {
    return isMatched ? HomeClickedImg : HomeImg;
  };

  const handleClicked = () => {
    navigate('/')
  }

  return (
    <Button width={30} height={30.28} background={getImage()} onClick={() => handleClicked()}{...props}>
      {props.children}
    </Button>
  );
}