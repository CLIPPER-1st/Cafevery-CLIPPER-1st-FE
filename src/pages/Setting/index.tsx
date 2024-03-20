import SettingCloseButton from '@/components/Setting/SettingCloseButton';
import PageLayout from '@/components/common/PageLayout';
import * as Styled from './style';
import SettingInfoList from '@/components/Setting/SettingInfoList';
import UserInfo from '@/components/Setting/UserInfo';
import {useLoginStatus} from '@/hooks/useLoginStatus';
import { useFetchSettingUserInfo } from '@/hooks/useFetchSettingUserInfo';
import { useLogout } from '@/hooks/useLogout';

export default function Setting() {
  const {isLoggedIn} = useLoginStatus();
  const {mutate} = useLogout();
  const { data } = useFetchSettingUserInfo();

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
