import {FilterButtonProps} from '@/interfaces/button';
import Button from '../Button';
import FilterButtonImg from '@/assets/Buttons/FilterButton.png'
import * as Styled from './style'

export default function FilterButton(props: FilterButtonProps) {

  return (
    <Styled.FilterButtonContainer>
      <Button width={126} height={38} background={FilterButtonImg} {...props}>
        {props.children}
      </Button>
    </Styled.FilterButtonContainer>
  );
}