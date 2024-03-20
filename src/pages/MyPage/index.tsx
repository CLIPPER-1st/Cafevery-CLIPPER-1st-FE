import PageLayout from '@/components/common/PageLayout';
import * as Styled from './style';
import TextButton from '@/components/common/Button/TextButton';
import { FavoritePlaceList } from '@/components/MyPage/FavoritePlace/FavoritePlaceList';
import { showSearchBarState, toggleState } from '@/atoms/toggle';
import { useRecoilState, useSetRecoilState } from 'recoil';
import AddFavoritePlaceMap from '@/components/MyPage/FavoritePlace/AddFavoritePlaceMap';
import SettingButton from '@/components/common/Button/SettingButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { userInfoState } from '@/atoms/userInfoState';
import ProfileNameButton from '@/components/MyPage/ProfileNameButton';
import { useLoginStatus } from '@/hooks/useLoginStatus';
import UnloginMypage from '@/components/MyPage/UnloginMypage';
import useToast from '@/hooks/useToast';
import { useFetchUserInfo } from '@/hooks/useFetchUserInfo';
import { useEffect } from 'react';
import { showSplashState } from '@/atoms/showSplashState';
import Splash from '@/components/common/Splash';

export default function MyPage() {
  const { displayToast } = useToast();
  const nowUrl = useLocation();
  const [showMap, setShowMap] = useRecoilState(toggleState((nowUrl.pathname)));
  const navigate = useNavigate();
  const [showSearchBar, setShowSearchBar] = useRecoilState(showSearchBarState);
  const { data, isLoading } = useFetchUserInfo();
  const { isLoggedIn } = useLoginStatus();
  const setUserInfo = useSetRecoilState(userInfoState);
  const [showSplash ,setShowSplash] = useRecoilState(showSplashState);

  const handleChangeProfileName = () => {
    setShowSearchBar(!showSearchBar);
  }

  const handleNavigateToSetting = () => {
    navigate('/setting')
  }

  const handleToggleMapVisibility = () => {
    if (data.infos.locations.length >= 5) {
      displayToast('5개까지 등록 가능해요.');
    } else {
      setShowMap(!showMap);
    }
  }

  useEffect(() => {
    if(!isLoading) {
      setShowSplash(true);
      setUserInfo(data);
    }
  }, [isLoading, data, setUserInfo, setShowSplash]);

  return (
    <PageLayout>
      {showSplash && (
        <Splash
          showSplash={showSplash}
          onAnimationEnd={() => setShowSplash(false)} // 애니메이션 종료 시 상태 업데이트
        />
      )}
      {(!isLoggedIn && !isLoading) ? ( //TODO: isLoggedIn
        <>
          {!showMap ? (
            <>
              <SettingButton onClick={() => handleNavigateToSetting()} />
              <Styled.ProfileImage src={data?.infos?.profile_image} />
              <ProfileNameButton onClick={() => handleChangeProfileName()}>
                {`${data.infos.nickname} 🖊️`}
              </ProfileNameButton>
              <Styled.Line />
              <TextButton onClick={() => handleToggleMapVisibility()}>
                자주 가는 장소 ➕
              </TextButton>
              <FavoritePlaceList />
              <Styled.DiscriptionText>
                최대 5개까지 등록 가능
              </Styled.DiscriptionText>
            </>
          ) : (
            <AddFavoritePlaceMap />
          )}
        </>
      ) : (
        <UnloginMypage />
      )}
    </PageLayout>
  );
}
