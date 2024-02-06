import { toggleShowMapState } from '@/atoms/toggle';
import CloseMapButton from '@/components/Button/CloseMapButton'
import { NaverMap } from '@/components/NaverMap';
import LocationSearchBar from '@/components/Search/LocationSearchBar'
import { useRecoilState } from 'recoil';

export default function AddFavoritePlaceMap() {
    const [showMap, setShowMap] = useRecoilState(toggleShowMapState);

    return (
        <>
            <CloseMapButton onClick={() => setShowMap(!showMap)} />
            <LocationSearchBar />
            <NaverMap />
        </>
    )
}
