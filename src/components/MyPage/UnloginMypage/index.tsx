import { useNavigate } from 'react-router-dom';
import SettingButton from '@/components/Button/SettingButton';
import * as Styled from './style';
import DefaultProfileImg from '@/assets/Images/default.png'
import SocialButton from '@/components/Button/SocialButton';

export default function UnloginMypage() {
  const navigate = useNavigate();

  const handleNavigateToSetting = () => {
    navigate('/setting')
  }

  return (
    <>
      <SettingButton onClick={() => handleNavigateToSetting()} />
      <Styled.ProfileImage src={DefaultProfileImg} />
      <Styled.UnloginText>
        로그인 후 이용해주세요. ☕️
      </Styled.UnloginText>
      <Styled.Line />
      <Styled.SocialButtonWrapper>
        <SocialButton socialType={'kakao'}/>
        <SocialButton socialType={'naver'}/>
        <SocialButton socialType={'google'}/>
      </Styled.SocialButtonWrapper>
    </>
  )
}
