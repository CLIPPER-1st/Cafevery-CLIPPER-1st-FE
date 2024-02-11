import {likesListState} from '@/atoms/likesState';
import {toggleState} from '@/atoms/toggle';
import {Toggle} from '@/components/Toggle/Toggle';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import { timeFilterState } from '@/atoms/timeFilter';
import { distanceState } from '@/atoms/distanceFilter';

export default function BusinessToggle() {
  const nowUrl = useLocation();
  const [{ minValue, maxValue }, ] = useRecoilState(timeFilterState(nowUrl.pathname));
  const [distance, ] = useRecoilState(distanceState(nowUrl.pathname));  const [isOn, setIsOn] = useRecoilState(toggleState(nowUrl.pathname));
  const [likesList, setLikesList] = useRecoilState(likesListState({distance: distance, startTime: minValue, endTime: maxValue}));

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    if (isOn) {
      const tempLikes = likesList.cafes.filter((like) => {
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
      setLikesList({ cafes: tempLikes });
    } else {
      setLikesList(likesList);
    }
  }, [isOn, setLikesList, likesList]);

  const toggle = () => setIsOn(!isOn);

  return <Toggle isOn={isOn} toggle={toggle} />;
}
