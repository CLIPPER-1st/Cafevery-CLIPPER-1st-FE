import { toggleState } from '@/atoms/toggle';
import CloseMapButton from '@/components/MyPage/CloseMapButton'
import RegisterButton from '@/components/MyPage/RegisterButton';
import { NaverMaps } from '@/components/common/NaverMaps';
import LocationSearchBar from '@/components/common/Search/LocationSearchBar'
import { useRecoilState, useRecoilValue } from 'recoil';
import { FavoritePlaceBar } from '../FavoritePlaceBar';
import * as Styled from './style'
import FavoritePlaceSelectButton from '@/components/MyPage/FavoritePlaceSelectButton';
import { selectedPlaceNameState } from '@/atoms/input';
import { useLocation } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useRegisterFavoritePlace } from '@/hooks/useRegisterFavoritePlace';
import { isAxiosError } from 'axios';
import { PostRegisterFavoritePlaceRequest } from '@/interfaces/postRegisterFavoritePlaceRequest';
import { mapCenterState } from '@/atoms/location';
import { placeTypes } from '@/constants/placeTypes';
import useToast from '@/hooks/useToast';

export default function AddFavoritePlaceMap() {
    const { displayToast } = useToast();
    const nowUrl = useLocation();
    const [showMap, setShowMap] = useRecoilState(toggleState((nowUrl.pathname)));
    const [selectedPlaceName, setSelectedPlaceName] = useRecoilState(selectedPlaceNameState);
    const queryClient = useQueryClient();
    const { mutate }  = useRegisterFavoritePlace();
    const mapCenter = useRecoilValue(mapCenterState);

    const handleSelectFavoritePlace = (name: string) => {
        setSelectedPlaceName(name);
    }

    const handleRegisterFavoritePlace = () => {
        if(!selectedPlaceName) {
            displayToast(`자주 가는 장소명을 입력해주세요.`);
            return;
        }
        const body: PostRegisterFavoritePlaceRequest = {
            name: selectedPlaceName,
            latitude: mapCenter.latitude,
            longitude: mapCenter.longitude,
        };
        mutate(body, {
            onSuccess: async () => {
                displayToast('자주 가는 장소가 등록되었습니다.'); 
                await queryClient.invalidateQueries({queryKey: ['userInfo']});
                setShowMap(!showMap);
            },
            onError: (error) => {
                if(isAxiosError(error)) {
                    displayToast('등록에 실패했습니다. 다시 시도해주세요.'); 
                }
            },
        });
    };

    return (
        <>
            <CloseMapButton onClick={() => setShowMap(!showMap)} />
            <LocationSearchBar />
            <NaverMaps cafes={[]} />
            <Styled.Container>
                <FavoritePlaceBar />
                {placeTypes.map((place) => (
                    <FavoritePlaceSelectButton key={place.key} onClick={() => handleSelectFavoritePlace(place.name)}>
                        {place.name}
                    </FavoritePlaceSelectButton>
                ))}
                <RegisterButton 
                    position={'absolute'}
                    onClick={() => handleRegisterFavoritePlace()}
                />
            </Styled.Container>
        </>
    )
}
