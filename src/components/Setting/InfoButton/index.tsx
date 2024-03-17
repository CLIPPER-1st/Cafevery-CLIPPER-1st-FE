import {SettingInfoButtonProps} from '@/interfaces/button';
import Into from '@/assets/Icons/Into.png';
import Button from '../../common/Button/Button';

export default function SettingInfoButton(props: SettingInfoButtonProps) {
  return (
    <Button
      width={7.01}
      height={12}
      background={Into}
      position={'absolute'}
      right={42}
      {...props}
    ></Button>
  );
}
