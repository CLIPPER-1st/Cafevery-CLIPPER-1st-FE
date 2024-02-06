import * as Styled from './style';
interface Props {
  id: number;
  name: string;
  address: string;
  business: string;
  likes: number;
  distance: number;
  liked: boolean;
}

export default function NameCard({
  id,
  name,
  address,
  business,
  likes,
  distance,
  liked,
}: Props) {

  return (
    <>
      <Styled.Container>
        <Styled.Wrapper>
          <Styled.Address>{address}</Styled.Address>
          <Styled.Name length={name.length}>{name}</Styled.Name>
        </Styled.Wrapper>
        <Styled.Info>
          <Styled.State>

          </Styled.State>
        </Styled.Info>
      </Styled.Container>
    </>
  );
}
