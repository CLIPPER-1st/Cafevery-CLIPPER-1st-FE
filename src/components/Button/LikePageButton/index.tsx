import {LikePageButtonProps} from '@/interfaces/button';
import Button from '../Button';
import LikeImg from '@/assets/Icons/Like.png'
import LikeClickedImg from '@/assets/Icons/LikeClicked.png'
import useCheckUrl from '@/hooks/useCheckUrl';
import { useNavigate } from 'react-router-dom';

export default function LikePageButton(props: LikePageButtonProps) {
  const isMatched = useCheckUrl(['/likes']);
  const navigate = useNavigate();

  const getImage = () => {
    return isMatched ? LikeClickedImg : LikeImg;
  };

  const handleClicked = () => {
    navigate('/likes')
  }

  return (
    <Button width={33.06} height={30.28} background={getImage()} onClick={() => handleClicked()}{...props}>
      {props.children}
    </Button>
  );
}