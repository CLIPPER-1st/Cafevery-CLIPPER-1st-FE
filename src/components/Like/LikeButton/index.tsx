import Liked from '@/assets/Icons/Liked.png';
import NonLiked from '@/assets/Icons/NonLiked.png';
import Button from '@/components/common/Button/Button';
import { usePutLikeCafe } from '@/hooks/usePutLikeCafe';
import {LikeButtonProps} from '@/interfaces/button';

export default function Likebutton(props: LikeButtonProps) {
  const { mutate }  = usePutLikeCafe(props);

  const getImage = () => {
    return props.liked ? Liked : NonLiked;
  };

  const handleLike = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
    getImage()
    console.log('handleLike',props);
    mutate(props.id);
  };

  return (
    <Button
      width={33.06}
      height={30}
      onClick={handleLike}
      background={getImage()}
      zIndex={3}
    />
  );
}
