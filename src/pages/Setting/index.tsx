import SettingCloseButton from '@/components/Button/SettingCloseButton';
import PageLayout from '@/components/PageLayout/PageLayout';
import * as Styled from './style';
import SettingInfoList from '@/components/Setting/SettingInfoList';

export default function Setting() {
  return (
    <PageLayout>
      <SettingCloseButton />
      <Styled.Label>로그인 후 이용해주세요</Styled.Label>
      <Styled.Line />
      <SettingInfoList />
    </PageLayout>
  );
}
