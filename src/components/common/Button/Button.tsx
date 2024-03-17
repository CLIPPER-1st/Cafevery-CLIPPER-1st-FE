import {ButtonProps} from '@/interfaces/button';
import * as S from './style';
import {useNavigate} from 'react-router-dom';

export default function Button(props: ButtonProps) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(props.route!);
  };
  return (
    <S.Button
      width={props.width}
      height={props.height}
      margin={props.margin}
      padding={props.padding}
      onClick={props.route ? handleNavigate : props.onClick}
      background={props.background}
      backgroundColor={props.backgroundColor}
      borderRadius={props.borderRadius}
      disabled={props.disabled}
      dark={props.dark ? props.dark : false}
      color={props.color}
      fontSize={props.fontSize}
      zIndex={props.zIndex}
      position={props.position}
      top={props.top}
      bottom={props.bottom}
      right={props.right}
      left={props.left}
      boxShadow={props.boxShadow}
    >
      {props.children}
    </S.Button>
  );
}
