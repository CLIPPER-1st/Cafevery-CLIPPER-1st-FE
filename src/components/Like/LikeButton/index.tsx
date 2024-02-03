import Liked from '@/assets/Icons/Liked.png';
import NonLiked from '@/assets/Icons/NonLiked.png';
import * as Styled from './style';

interface Props {
  liked: boolean;
}

export default function Likebutton(liked: Props) {
  const getImage = () => {
    return liked ? Liked : NonLiked;
  };

  return (
    <Styled.Button>
      <Styled.Img src={getImage()} />
    </Styled.Button>
  );
}
