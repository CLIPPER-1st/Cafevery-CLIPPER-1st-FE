import {LongButtonProps} from '@/interfaces/button';
import Button from '../Button';

export default function LongButton(props: LongButtonProps) {
  return (
    <Button width={250} height={40} backgroundColor="#3181F4" {...props}>
      {props.children}
    </Button>
  );
}
