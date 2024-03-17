import { useRecoilState } from 'recoil';
import { distanceState } from '@/atoms/distanceFilter';
import * as Styled from './style';
import { useLocation } from 'react-router-dom';

export default function DistanceFilter() {
    const nowUrl = useLocation();
    const [distance] = useRecoilState(distanceState(nowUrl.pathname));
    return (
        <Styled.DistanceFilter>
            <Styled.MyMarker />
            {Array.from({ length: Math.round((distance) / 0.5) }, (_, index) => (
                <Styled.Circle
                    key={index}
                    size={70 + index * 50}
                />
            ))}
        </Styled.DistanceFilter>
    );
}
