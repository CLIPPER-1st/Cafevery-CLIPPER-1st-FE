import { toggleState } from '@/atoms/toggle';
import CloseMapButton from '@/components/Button/CloseMapButton'
import RegisterButton from '@/components/Button/RegisterButton';
import { NaverMap } from '@/components/NaverMap';
import LocationSearchBar from '@/components/Search/LocationSearchBar'
import { useRecoilState } from 'recoil';
import { FavoritePlaceBar } from '../FavoritePlaceBar';
import * as Styled from './style'
import FavoritePlaceSelectButton from '@/components/Button/FavoritePlaceSelectButton';
import { selectedPlaceNameState } from '@/atoms/input';
import { useLocation } from 'react-router-dom';

const placeTypes = [
    { key: 'home', name: '🏠 집' },
    { key: 'company', name: '🏢 회사' },
    { key: 'school', name: '🏫 학교' },
];

export default function AddFavoritePlaceMap() {
    const nowUrl = useLocation();
    const [showMap, setShowMap] = useRecoilState(toggleState((nowUrl.pathname)));
    const [, setSelectedPlaceName] = useRecoilState(selectedPlaceNameState);

    const handleSelectFavoritePlace = (name: string) => {
        setSelectedPlaceName(name);
    }

    const handleRegisterFavoritePlace = () => {

    }

    return (
        <>
            <CloseMapButton onClick={() => setShowMap(!showMap)} />
            <LocationSearchBar />
            <NaverMap />
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
