import PageLayout from '@/components/PageLayout/PageLayout';
import Default from '@/assets/Images/default.png';
import * as Styled from './style';
import TextButton from '@/components/Button/TextButton';
import { FavoritePlaceList } from '@/components/FavoritePlace/FavoritePlaceList';
import { toggleState } from '@/atoms/toggle';
import { useRecoilState } from 'recoil';
import AddFavoritePlaceMap from '@/components/FavoritePlace/AddFavoritePlaceMap';
import SettingButton from '@/components/Button/SettingButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { userInfoState } from '@/atoms/userInfoState';
import AlertModal from '@/components/Modal/AlertModal';
import useModal from '@/hooks/useModal';

export default function MyPage() {
  const nowUrl = useLocation();
  const [showMap, setShowMap] = useRecoilState(toggleState((nowUrl.pathname)));
  const navigate = useNavigate();
  const [userInfo, ] = useRecoilState(userInfoState);
  const {isOpen, openModal, closeModal} = useModal();

  const handleChangeProfileName = () => {
    openModal();
  }

  const handleNavigateToSetting = () => {
    navigate('/setting')
  }

  const handleToggleMapVisibility = () => {
    if (userInfo?.data?.infos?.locations?.length >= 5) {
      alert("최대 5개까지만 등록 가능합니다.");
    } else {
      setShowMap(!showMap);
    }
  }

  return (
    <>
      <PageLayout>
        {!showMap ? (
          <>
            <SettingButton onClick={() => handleNavigateToSetting()} />
            <Styled.ProfileImage src={Default} />
            <TextButton onClick={() => handleChangeProfileName()}>
              {"룰루랄라룰루랄라룰루 🖊️"}
            </TextButton>
            <Styled.Line />
            <TextButton onClick={() => handleToggleMapVisibility()}>
              {"자주 가는 장소 ➕"}
            </TextButton>
            <FavoritePlaceList />
            <Styled.DiscriptionText>
              최대 5개까지 등록 가능
            </Styled.DiscriptionText>
          </>
        ) : (
          <AddFavoritePlaceMap />
        )}
      </PageLayout>

    {isOpen && (
      <AlertModal 
        isOpen={isOpen}
        onClose={closeModal}
      >
        dddddddfzxbzcxbv
      </AlertModal>
    )}
    </>
  );
}
