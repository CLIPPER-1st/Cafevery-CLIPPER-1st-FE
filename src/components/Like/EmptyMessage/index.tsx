import * as Styled from './style';

interface Props {
  message: string;
}

export default function EmptyMessage(props: Props) {
  return <Styled.Container>{props.message}</Styled.Container>;
}
