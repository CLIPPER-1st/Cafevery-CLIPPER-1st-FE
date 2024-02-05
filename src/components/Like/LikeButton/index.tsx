import Liked from '@/assets/Icons/Liked.png';
import NonLiked from '@/assets/Icons/NonLiked.png';
import * as Styled from './style';

interface Props {
  id: number;
  liked: boolean;
}

export default function Likebutton(props: Props) {
  const getImage = () => {
    return props.liked ? Liked : NonLiked;
  };

  const handleLike = () => {
    console.log(`like ${props.id}`);
  };

  return (
    <Styled.Button onClick={handleLike}>
      <Styled.Img src={getImage()} />
    </Styled.Button>
  );
}
