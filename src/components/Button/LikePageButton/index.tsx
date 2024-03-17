import {LikePageButtonProps} from '@/interfaces/button';
import Button from '../Button';
import LikeImg from '@/assets/Icons/Like.png'
import LikeClickedImg from '@/assets/Icons/LikeClicked.png'
import useCheckUrl from '@/hooks/useCheckUrl';
import { useNavigate } from 'react-router-dom';
import { useLoginStatus } from '@/hooks/useLoginStatus';
import useToast from '@/hooks/useToast';

export default function LikePageButton(props: LikePageButtonProps) {
  const isMatched = useCheckUrl(['/likes']);
  const navigate = useNavigate();
  const {isLoggedIn} = useLoginStatus();
  const { displayToast } = useToast();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let timer: string | number | NodeJS.Timeout;

  const getImage = () => {
    return isMatched ? LikeClickedImg : LikeImg;
  };

  const handleClicked = () => {
    if(!isLoggedIn) { //TODO: isLoggedIn
      navigate('/likes')
    } else {
      displayToast('로그인 후 이용해주세요.');    
      timer = setTimeout(() => {
        navigate('/mypage')
      }, 1000);
    }
  }

  return (
    <Button width={33.06} height={30.28} background={getImage()} onClick={() => handleClicked()}{...props}>
      {props.children}
    </Button>
  );
}