import SettingCloseButton from '@/components/Button/SettingCloseButton';
import PageLayout from '@/components/PageLayout/PageLayout';
import * as Styled from './style';
import SettingInfoList from '@/components/Setting/SettingInfoList';
import UserInfo from '@/components/Setting/UserInfo';
import {useLoginStatus} from '@/hooks/useLoginStatus';

export default function Setting() {
  const {isLoggedIn, logout} = useLoginStatus();

  return (
    <PageLayout>
      <SettingCloseButton />
      <Styled.Wrapper>
        <UserInfo
          isLogin={isLoggedIn}
          nickname={'Cafevery'}
          provider={'소셜 로그인 회원'}
          logout={logout}
        />
      </Styled.Wrapper>
      <Styled.Line />
      <SettingInfoList />
    </PageLayout>
  );
}
