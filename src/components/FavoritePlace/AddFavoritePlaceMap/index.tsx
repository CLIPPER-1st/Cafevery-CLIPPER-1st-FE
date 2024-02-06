import { toggleShowMapState } from '@/atoms/toggle';
import CloseMapButton from '@/components/Button/CloseMapButton'
import RegisterButton from '@/components/Button/RegisterButton';
import { NaverMap } from '@/components/NaverMap';
import LocationSearchBar from '@/components/Search/LocationSearchBar'
import { useRecoilState } from 'recoil';
import { FavoritePlaceBar } from '../FavoritePlaceBar';
import * as Styled from './style'

export default function AddFavoritePlaceMap() {
    const [showMap, setShowMap] = useRecoilState(toggleShowMapState);
    const handleRegisterFavoritePlace = () => {

    }

    return (
        <>
            <CloseMapButton onClick={() => setShowMap(!showMap)} />
            <LocationSearchBar />
            <NaverMap />
            <Styled.ButtonContainer>
                <FavoritePlaceBar />
                <RegisterButton onClick={() => handleRegisterFavoritePlace()}/>
            </Styled.ButtonContainer>
        </>
    )
}
