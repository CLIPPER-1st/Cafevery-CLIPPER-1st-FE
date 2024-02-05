import { useRecoilState } from 'recoil';
import { distanceState } from '@/atoms/distanceFilter';
import * as Styled from './style';

export default function DistanceFilter() {
    const [distance] = useRecoilState(distanceState);

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
