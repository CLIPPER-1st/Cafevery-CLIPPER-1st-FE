import {LikePageButtonProps} from '@/interfaces/button';
import Button from '../Button';
import LikeImg from '@/assets/Icons/Like.png'
import LikeClickedImg from '@/assets/Icons/LikeClicked.png'
import useCheckUrl from '@/hooks/useCheckUrl';
import { useNavigate } from 'react-router-dom';
import { useLoginStatus } from '@/hooks/useLoginStatus';
import { useRecoilState } from 'recoil';
import { alertModalState } from '@/atoms/modalState';
import useModal from '@/hooks/useModal';
import AlertModal from '@/components/Modal/AlertModal';

export default function LikePageButton(props: LikePageButtonProps) {
  const isMatched = useCheckUrl(['/likes']);
  const navigate = useNavigate();
  const {isLoggedIn} = useLoginStatus();
  const [alertModal, setAlertModal] = useRecoilState(alertModalState);
  const { closeModal } = useModal();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let timer: string | number | NodeJS.Timeout;

  const getImage = () => {
    return isMatched ? LikeClickedImg : LikeImg;
  };

  const handleClicked = () => {
    if(!isLoggedIn) { //TODO: isLoggedIn
      navigate('/likes')
    } else {
      setAlertModal({
        isOpen: true,
        message: '로그인 후\n이용해주세요.',
        });        
        timer = setTimeout(() => {
          navigate('/mypage')
        }, 800);
    }
  }

  return (
    <>
      <Button width={33.06} height={30.28} background={getImage()} onClick={() => handleClicked()}{...props}>
        {props.children}
      </Button>
      {alertModal?.isOpen && (
        <AlertModal 
          isOpen={alertModal?.isOpen}
          onClose={closeModal}
        >
          {alertModal?.message}
        </AlertModal>
      )}
    </>
  );
}