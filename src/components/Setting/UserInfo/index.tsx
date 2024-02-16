import * as Styled from './style';

interface Props {
  isLogin: boolean;
  nickname?: string;
  provider?: string;
  logout?: () => void;
}

export default function UserInfo(props: Props) {
  return (
    <>
      {props.isLogin ? (
        <Styled.Container>
          <Styled.Label>{props.nickname}</Styled.Label>
          <Styled.Provider>{props.provider}</Styled.Provider>
          <Styled.Logout onClick={props.logout}>로그아웃</Styled.Logout>
        </Styled.Container>
      ) : (
        <Styled.Label>로그인 후 이용해주세요</Styled.Label>
      )}
    </>
  );
}
