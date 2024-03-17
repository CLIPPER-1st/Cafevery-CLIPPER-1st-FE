import {MyPageButtonProps} from '@/interfaces/button';
import Button from '../Button';
import MyPageImg from '@/assets/Icons/MyPage.png'
import MyPageClickedImg from '@/assets/Icons/MyPageClicked.png'
import useCheckUrl from '@/hooks/useCheckUrl';
import { useNavigate } from 'react-router-dom';

export default function MyPageButton(props: MyPageButtonProps) {
  const isMatched = useCheckUrl(['/mypage', '/setting']);
  const navigate = useNavigate();

  const getImage = () => {
    return isMatched ? MyPageClickedImg : MyPageImg;
  };

  const handleClicked = () => {
    navigate('/mypage')
  }

  return (
    <Button width={30} height={30.28} background={getImage()} onClick={() => handleClicked()}{...props}>
      {props.children}
    </Button>
  );
}