import SettingCloseButton from '@/components/Button/SettingCloseButton';
import PageLayout from '@/components/PageLayout/PageLayout';
import * as Styled from './style';
import SettingInfoList from '@/components/Setting/SettingInfoList';
import UserInfo from '@/components/Setting/UserInfo';

export default function Setting() {
  const isLogin = true;

  return (
    <PageLayout>
      <SettingCloseButton />
      <Styled.Wrapper>
        <UserInfo
          isLogin={isLogin}
          nickname={'Cafevery'}
          provider={'소셜 로그인 회원'}
        />
      </Styled.Wrapper>
      <Styled.Line />
      <SettingInfoList />
    </PageLayout>
  );
}
