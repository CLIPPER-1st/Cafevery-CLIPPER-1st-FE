import {useRecoilState} from 'recoil';
import {Toggle} from '../Toggle';
import {toggleState} from '@/atoms/toggle';
import {useLocation} from 'react-router-dom';

export default function HomeToggle() {
  const nowUrl = useLocation();
  const [isOn, setIsOn] = useRecoilState(toggleState(nowUrl.pathname));
  const toggle = () => setIsOn(!isOn);
  return <Toggle isOn={isOn} toggle={toggle} />;
}
