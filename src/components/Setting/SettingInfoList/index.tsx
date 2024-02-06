import SettingInfo from '../SettingInfo';
import * as Styled from './style';

export default function SettingInfoList() {
  const handleClickedFirst = () => {
    console.log('1');
  };

  const handleClickedSecond = () => {
    console.log('2');
  };

  const handleClickedThird = () => {
    console.log('3');
  };

  return (
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
    </Styled.Container>
  );
}
