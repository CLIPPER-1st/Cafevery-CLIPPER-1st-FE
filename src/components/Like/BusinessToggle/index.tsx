import {filteredLikesState, likesState} from '@/atoms/likesState';
import {toggleState} from '@/atoms/toggle';
import {Toggle} from '@/components/Toggle/Toggle';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useRecoilState} from 'recoil';

export default function BusinessToggle() {
  const nowUrl = useLocation();
  const [isOn, setIsOn] = useRecoilState(toggleState(nowUrl.pathname));
  const [likes] = useRecoilState(likesState);
  const [filteredLikes, setFilteredLikes] = useRecoilState(filteredLikesState);

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    if (isOn) {
      const tempLikes = likes.filter((like) => {
        const startParts = like.start_time.split(':');
        const endParts = like.end_time.split(':');

        const startHour = parseInt(startParts[0]);
        const startMinute = parseInt(startParts[1]);
        const endHour = parseInt(endParts[0]);
        const endMinute = parseInt(endParts[1]);

        if (
          (currentHour > startHour ||
            (currentHour === startHour && currentMinute >= startMinute)) &&
          (currentHour < endHour ||
            (currentHour === endHour && currentMinute <= endMinute))
        ) {
          return true;
        }
        return false;
      });
      setFilteredLikes(tempLikes);
    } else {
      setFilteredLikes(likes);
    }
  }, [isOn, setFilteredLikes, likes]);

  const toggle = () => setIsOn(!isOn);

  return <Toggle isOn={isOn} toggle={toggle} />;
}
