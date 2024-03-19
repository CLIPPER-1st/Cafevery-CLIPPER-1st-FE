import { cafeInfoState } from '@/atoms/cafeInfoState';
import { mapCenterState } from '@/atoms/location';
import GoToCafeLocationButton from '@/components/common/Button/GoToCafeLocationButton';
import Likebutton from '@/components/Like/LikeButton';
import { useBusinessStatus } from '@/hooks/useBusinessStatus';
import { useNaverMapsReverseGeocoding } from '@/hooks/useNaverMapsReverseGeocoding';
import { useTodayBusinessHours } from '@/hooks/useTodayBusinessHours';
import theme from '@/theme';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Modal from '@/components/common/Modal'
import * as Styled from './style';
import { CafeInfoModalProps } from '@/interfaces/modal';

export default function CafeInfoModal({ onClose, isOpen }: CafeInfoModalProps) {
    const [data,] = useRecoilState(cafeInfoState);
    const {todayHours} = useTodayBusinessHours(data.business);
    const businessStatus = useBusinessStatus(todayHours.start_time, todayHours.end_time);
    const cafeAddress = useNaverMapsReverseGeocoding(data.latitude, data.longitude);
    const navigate = useNavigate();
    const [, setMapCenterLocation] = useRecoilState(mapCenterState);
    const handleGoToCafeLocation = (latitude: number, longitude: number) => {
        navigate('/');
        setMapCenterLocation({ latitude: latitude, longitude: longitude });
        onClose();
    }

    return (
        <Modal modalTitle={''} isOpen={isOpen} onClose={onClose} modalType={'Modal'} modalColor={theme.colors.brown} color={theme.colors.textMain} fontSize={20}>
            <Styled.CafeThumb />
            <Styled.CafeAddress>{cafeAddress}</Styled.CafeAddress>
            <Styled.SectionTitle>{data.name}</Styled.SectionTitle>
            <Styled.CafeInBusiness>{businessStatus}</Styled.CafeInBusiness>
            <Styled.CafeInfo>{`${todayHours.start_time} - ${todayHours.end_time}`}</Styled.CafeInfo>
            <Styled.CafeInfo>{`☎️ ${data.phone_number}`}</Styled.CafeInfo>
            <Styled.CafeInfo>{`🤍 ${data.likes}`}</Styled.CafeInfo>
            <Styled.LikeButtonWrapper>
                <Likebutton id={data.id} liked={data.liked} />
            </Styled.LikeButtonWrapper>
            <Styled.Line />
            <Styled.SectionTitle>{"운영 시간"}</Styled.SectionTitle>
            <Styled.CafeBusinessHoursWrapper>
            {data.business.map(({ days, start_time, end_time }, index) => (
                <Styled.CafeInfo key={index}>{`${days}: ${start_time} - ${end_time}`}</Styled.CafeInfo>
            ))}
            </Styled.CafeBusinessHoursWrapper>
            <GoToCafeLocationButton onClick={() => handleGoToCafeLocation(data.latitude, data.longitude)}/>
        </Modal>
    );
}