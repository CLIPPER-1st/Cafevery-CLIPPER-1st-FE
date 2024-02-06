import { toggleShowMapState } from '@/atoms/toggle';
import CloseMapButton from '@/components/Button/CloseMapButton'
import { NaverMap } from '@/components/NaverMap';
import LocationSearchBar from '@/components/Search/LocationSearchBar'
import useModal from '@/hooks/useModal';
import { useRecoilState } from 'recoil';
import { FavoritePlaceBar } from '../FavoritePlaceBar';

export default function AddFavoritePlaceMap() {
    const [showMap, setShowMap] = useRecoilState(toggleShowMapState);

    return (
        <>
            <CloseMapButton onClick={() => setShowMap(!showMap)} />
            <LocationSearchBar />
            <NaverMap />
            <FavoritePlaceBar />
        </>
    )
}
