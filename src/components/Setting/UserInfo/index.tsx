import * as Styled from './style';

interface Props {
  isLogin: boolean;
  nickname?: string;
  provider?: string;
}

export default function UserInfo(props: Props) {
  const handleLogout = () => {
    console.log('로그아웃');
  };

  return (
    <>
      {props.isLogin ? (
        <Styled.Container>
          <Styled.Label>{props.nickname}</Styled.Label>
          <Styled.Provider>{props.provider}</Styled.Provider>
          <Styled.Logout onClick={handleLogout}>로그아웃</Styled.Logout>
        </Styled.Container>
      ) : (
        <Styled.Label>로그인 후 이용해주세요</Styled.Label>
      )}
    </>
  );
}
