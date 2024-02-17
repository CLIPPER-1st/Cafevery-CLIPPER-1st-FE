import SettingCloseButton from '@/components/Button/SettingCloseButton';
import PageLayout from '@/components/PageLayout/PageLayout';
import * as Styled from './style';
import SettingInfoList from '@/components/Setting/SettingInfoList';
import UserInfo from '@/components/Setting/UserInfo';
import {useLoginStatus} from '@/hooks/useLoginStatus';
import { useFetchSettingUserInfo } from '@/hooks/useFetchSettingUserInfo';
import { useLogout } from '@/hooks/useLogout';
import AlertModal from '@/components/Modal/AlertModal';
import { useRecoilState } from 'recoil';
import { alertModalState } from '@/atoms/modalState';
import useModal from '@/hooks/useModal';

export default function Setting() {
  const {isLoggedIn} = useLoginStatus();
  const {mutate} = useLogout();
  //const { data } = useFetchSettingUserInfo(); //TODO: 주석 해제 해야함.
  const [alertModal, setAlertModal] = useRecoilState(alertModalState);
  const { closeModal } = useModal();

  const handleLogout = () => {
    mutate();
  };

  return (
    <>
      <PageLayout>
        <SettingCloseButton />
        <Styled.Wrapper>
          <UserInfo
            isLogin={isLoggedIn} //TODO: isLoggedIn으로 바꿔야함.
            nickname={'Cafevery'} //TODO: 지워야 함.
            provider={'소셜 로그인 회원'}  //TODO: 지워야 함.
            //nickname={data.nickname}  //TODO: 주석 해제 해야함.
            //provider={data.provider}  //TODO: 주석 해제 해야함.
            logout={() => handleLogout()}
          />
        </Styled.Wrapper>
        <Styled.Line />
        <SettingInfoList />
      </PageLayout>
      {alertModal?.isOpen && (
        <AlertModal 
          isOpen={alertModal?.isOpen}
          onClose={closeModal}
        >
          {alertModal?.message}
        </AlertModal>
      )}
    </>
  );
}
