import Liked from '@/assets/Icons/Liked.png';
import NonLiked from '@/assets/Icons/NonLiked.png';
import Button from '@/components/Button/Button';
import {LikeButtonProps} from '@/interfaces/button';

export default function Likebutton(props: LikeButtonProps) {
  const getImage = () => {
    return props.liked ? Liked : NonLiked;
  };

  const handleLike = () => {
    console.log(`like ${props.id}`);
  };

  return (
    <Button 
      width={33.06} 
      height={30} 
      onClick={handleLike} 
      background={getImage()} 
    />
  );
}
