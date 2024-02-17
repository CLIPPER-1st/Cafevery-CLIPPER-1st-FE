import SettingCloseButton from '@/components/Button/SettingCloseButton';
import PageLayout from '@/components/PageLayout/PageLayout';
import * as Styled from './style';
import SettingInfoList from '@/components/Setting/SettingInfoList';
import UserInfo from '@/components/Setting/UserInfo';
import {useLoginStatus} from '@/hooks/useLoginStatus';
import { useFetchSettingUserInfo } from '@/hooks/useFetchSettingUserInfo';

export default function Setting() {
  const {isLoggedIn, logout} = useLoginStatus();
  //const { mutate } = useFetchSettingUserInfo(); //TODO: 주석 해제 해야함.
  
  return (
    <PageLayout>
      <SettingCloseButton />
      <Styled.Wrapper>
        <UserInfo
          isLogin={isLoggedIn} //TODO: isLoggedIn으로 바꿔야함.
          nickname={'Cafevery'} //TODO: 지워야 함.
          provider={'소셜 로그인 회원'}  //TODO: 지워야 함.
          //nickname={mutate.nickname}  //TODO: 주석 해제 해야함.
          //provider={mutate.provider}  //TODO: 주석 해제 해야함.
          logout={logout}
        />
      </Styled.Wrapper>
      <Styled.Line />
      <SettingInfoList />
    </PageLayout>
  );
}
