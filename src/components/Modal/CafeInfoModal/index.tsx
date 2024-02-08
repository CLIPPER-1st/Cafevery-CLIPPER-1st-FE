import { cafeInfoState } from '@/atoms/cafeInfoState';
import { locationState } from '@/atoms/location';
import GoToCafeLocationButton from '@/components/Button/GoToCafeLocationButton';
import Likebutton from '@/components/Like/LikeButton';
import { useBusinessStatus } from '@/hooks/useBusinessStatus';
import { useNaverMapsReverseGeocoding } from '@/hooks/useNaverMapsReverseGeocoding';
import { useTodayBusinessHours } from '@/hooks/useTodayBusinessHours';
import theme from '@/theme';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Modal from '../Modal'
import * as Styled from './style';

export default function CafeInfoModal({ onClose, isOpen, id }) {
    const [cafeInfo,] = useRecoilState(cafeInfoState);
    const businessStatus = useBusinessStatus(cafeInfo.in_business);
    const todayHours = useTodayBusinessHours(cafeInfo.business);
    const cafeAddress = useNaverMapsReverseGeocoding(cafeInfo.latitude, cafeInfo.longitude);
    const navigate = useNavigate();
    const [, setLocation] = useRecoilState(locationState);
    const handleGoToCafeLocation = (latitude: number, longitude: number) => {
        navigate('/');
        setLocation({ latitude: latitude, longitude: longitude });
        onClose();
    }

    return (
        <Modal modalTitle={''} isOpen={isOpen} onClose={onClose} modalType={'Modal'} modalColor={theme.colors.brown} color={theme.colors.textMain} fontSize={20}>
            <Styled.CafeThumb />
            <Styled.CafeAddress>{cafeAddress}</Styled.CafeAddress>
            <Styled.SectionTitle>{cafeInfo.name}</Styled.SectionTitle>
            <Styled.CafeInBusiness>{businessStatus}</Styled.CafeInBusiness>
            <Styled.CafeInfo>{`${todayHours.start_time} - ${todayHours.end_time}`}</Styled.CafeInfo>
            <Styled.CafeInfo>{`☎️ ${cafeInfo.phone_number}`}</Styled.CafeInfo>
            <Styled.CafeInfo>{`🤍 ${cafeInfo.likes}`}</Styled.CafeInfo>
            <Styled.LikeButtonWrapper>
                <Likebutton id={cafeInfo.id} liked={cafeInfo.liked} />
            </Styled.LikeButtonWrapper>
            <Styled.Line />
            <Styled.SectionTitle>{"운영 시간"}</Styled.SectionTitle>
            <Styled.CafeBusinessHoursWrapper>
            {cafeInfo.business.map(({ days, start_time, end_time }, index) => (
                <Styled.CafeInfo key={index}>{`${days}: ${start_time} - ${end_time}`}</Styled.CafeInfo>
            ))}
            </Styled.CafeBusinessHoursWrapper>
            <GoToCafeLocationButton onClick={() => handleGoToCafeLocation(cafeInfo.latitude, cafeInfo.longitude)}/>
        </Modal>
    );
}