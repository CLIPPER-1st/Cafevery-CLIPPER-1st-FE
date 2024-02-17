import SignoutModal from '@/components/Modal/SignoutModal';
import { useLoginStatus } from '@/hooks/useLoginStatus';
import useModal from '@/hooks/useModal';
import SettingInfo from '../SettingInfo';
import * as Styled from './style';

export default function SettingInfoList() {
  const {isLoggedIn} = useLoginStatus();
  const {isOpen, openModal, closeModal} = useModal();

  const handleClickedFirst = () => {
    window.open(
      'https://docs.google.com/forms/d/16f9z5rdiC7ryqt4cXsmBioecuE6OnsKs2fUuxgdaJnM/edit',
      '_blank',
    );
  };

  const handleClickedSecond = () => {
    window.open(
      'https://cherry-stingray-54b.notion.site/Cafevery-66896ce1df2e4bf3b18be51c49f79263?pvs=74',
      '_blank',
    );
  };

  const handleClickedThird = () => {
    window.open(
      'https://cherry-stingray-54b.notion.site/Cafevery-e67338f1b0354d05837fcdc7cef3e64b',
      '_blank',
    );
  };

  return (
    <>
      <Styled.Container>
        <SettingInfo
          title="문의사항"
          handleClicked={() => handleClickedFirst()}
        />
        <SettingInfo
          title="이용약관"
          handleClicked={() => handleClickedSecond()}
        />
        <SettingInfo
          title="개인정보처리방침"
          handleClicked={() => handleClickedThird()}
        />
        {isLoggedIn && (
          <SettingInfo
            title="회원탈퇴"
            handleClicked={() => openModal()}
          />
        )}
      </Styled.Container>
      {isOpen && (
        <SignoutModal 
          onClose={closeModal}
          isOpen={isOpen}        
        />
      )}
    </>
  );
}