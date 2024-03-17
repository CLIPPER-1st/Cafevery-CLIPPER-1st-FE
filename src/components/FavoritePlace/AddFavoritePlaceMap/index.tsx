import { toggleState } from '@/atoms/toggle';
import CloseMapButton from '@/components/Button/CloseMapButton'
import RegisterButton from '@/components/Button/RegisterButton';
import { NaverMaps } from '@/components/NaverMaps';
import LocationSearchBar from '@/components/Search/LocationSearchBar'
import { useRecoilState, useRecoilValue } from 'recoil';
import { FavoritePlaceBar } from '../FavoritePlaceBar';
import * as Styled from './style'
import FavoritePlaceSelectButton from '@/components/Button/FavoritePlaceSelectButton';
import { selectedPlaceNameState } from '@/atoms/input';
import { useLocation } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useRegisterFavoritePlace } from '@/hooks/useRegisterFavoritePlace';
import { isAxiosError } from 'axios';
import { alertModalState } from '@/atoms/modalState';
import { PostRegisterFavoritePlaceRequest } from '@/interfaces/postRegisterFavoritePlaceRequest';
import { mapCenterState } from '@/atoms/location';
import AlertModal from '@/components/Modal/AlertModal';
import useModal from '@/hooks/useModal';
import { placeTypes } from '@/constants/placeTypes';

export default function AddFavoritePlaceMap() {
    const [alertModal, setAlertModal] = useRecoilState(alertModalState);
    const { closeModal } = useModal();
    const nowUrl = useLocation();
    const [showMap, setShowMap] = useRecoilState(toggleState((nowUrl.pathname)));
    const [selectedPlaceName, setSelectedPlaceName] = useRecoilState(selectedPlaceNameState);
    const queryClient = useQueryClient();
    const { mutate }  = useRegisterFavoritePlace();
    const mapCenter = useRecoilValue(mapCenterState);
    let timer: string | number | NodeJS.Timeout;

    const handleSelectFavoritePlace = (name: string) => {
        setSelectedPlaceName(name);
    }

    const handleRegisterFavoritePlace = () => {
        const body: PostRegisterFavoritePlaceRequest = {
            name: selectedPlaceName,
            latitude: mapCenter.latitude,
            longitude: mapCenter.longitude,
        };
        mutate(body, {
            onSuccess: async () => {
                setAlertModal({
                isOpen: true,
                message: '자주 가는 장소가\n등록되었습니다.',
                });        
                await queryClient.invalidateQueries({queryKey: ['userInfo']});
                timer = setTimeout(() => {
                    setShowMap(!showMap);
                }, 800);   
            },
            onError: (error) => {
                if(isAxiosError(error)) {
                    setAlertModal({
                        isOpen: true,
                        message: '등록에 실패했습니다.\n다시 시도해주세요.',
                    });  
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
            {alertModal?.isOpen && (
                <AlertModal 
                    isOpen={alertModal?.isOpen}
                    onClose={closeModal}
                    >
                    {alertModal?.message}
                </AlertModal>
            )}
        </>
    )
}
