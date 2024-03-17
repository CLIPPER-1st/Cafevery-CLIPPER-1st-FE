import PageLayout from '@/components/PageLayout';
import * as Styled from './style';
import TextButton from '@/components/Button/TextButton';
import { FavoritePlaceList } from '@/components/FavoritePlace/FavoritePlaceList';
import { showSearchBarState, toggleState } from '@/atoms/toggle';
import { useRecoilState } from 'recoil';
import AddFavoritePlaceMap from '@/components/FavoritePlace/AddFavoritePlaceMap';
import SettingButton from '@/components/Button/SettingButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { userInfoState } from '@/atoms/userInfoState';
import ProfileNameButton from '@/components/Button/ProfileNameButton';
import { useLoginStatus } from '@/hooks/useLoginStatus';
import UnloginMypage from '@/components/MyPage/UnloginMypage';
import useToast from '@/hooks/useToast';

export default function MyPage() {
  const { displayToast } = useToast();
  const nowUrl = useLocation();
  const [showMap, setShowMap] = useRecoilState(toggleState((nowUrl.pathname)));
  const navigate = useNavigate();
  const [userInfo, ] = useRecoilState(userInfoState); //TODO: 임시
  const [showSearchBar, setShowSearchBar] = useRecoilState(showSearchBarState);
  //const userInfo = useFetchUserInfo(); //TODO: 이걸로 바꿔야함.
  const { isLoggedIn } = useLoginStatus();

  const handleChangeProfileName = () => {
    setShowSearchBar(!showSearchBar);
  }

  const handleNavigateToSetting = () => {
    navigate('/setting')
  }

  const handleToggleMapVisibility = () => {
    if (userInfo.data.infos.locations.length >= 5) {
      displayToast('5개까지 등록 가능해요.');
    } else {
      setShowMap(!showMap);
    }
  }

  return (
    <PageLayout>
      {!isLoggedIn ? ( //TODO: isLoggedIn
        <>
          {!showMap ? (
            <>
              <SettingButton onClick={() => handleNavigateToSetting()} />
              <Styled.ProfileImage src={userInfo.data.infos.profile_image} />
              <ProfileNameButton onClick={() => handleChangeProfileName()}>
                {`${userInfo.data.infos.nickname} 🖊️`}
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
