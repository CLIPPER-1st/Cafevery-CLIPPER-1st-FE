import SettingCloseButton from '@/components/Setting/SettingCloseButton';
import PageLayout from '@/components/common/PageLayout';
import * as Styled from './style';
import SettingInfoList from '@/components/Setting/SettingInfoList';
import UserInfo from '@/components/Setting/UserInfo';
import {useLoginStatus} from '@/hooks/useLoginStatus';
import { useFetchSettingUserInfo } from '@/hooks/useFetchSettingUserInfo';
import { useLogout } from '@/hooks/useLogout';

const data = { //TODO: 지워야 함. dummy
  nickname: 'Cafevery',
  provider: '카카오 로그인 회원',
};

export default function Setting() {
  const {isLoggedIn} = useLoginStatus();
  const {mutate} = useLogout();
  //const { data } = useFetchSettingUserInfo(); //TODO: 주석 해제 해야함.

  const handleLogout = () => {
    mutate();
  };

  return (
    <PageLayout>
      <SettingCloseButton />
      <Styled.Wrapper>
        <UserInfo
          isLogin={!isLoggedIn} //TODO: isLoggedIn으로 바꿔야함.
          nickname={data.nickname}
          provider={data.provider}
          logout={() => handleLogout()}
        />
      </Styled.Wrapper>
      <Styled.Line />
      <SettingInfoList />
    </PageLayout>
);
}
