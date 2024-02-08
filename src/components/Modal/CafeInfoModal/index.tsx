import { cafeInfoState } from '@/atoms/cafeInfostate';
import { locationState } from '@/atoms/location';
import GoToCafeLocationButton from '@/components/Button/GoToCafeLocationButton';
import Likebutton from '@/components/Like/LikeButton';
import { useBusinessStatus } from '@/hooks/useBusinessStatus';
import { useFetchCafeInfo } from '@/hooks/useFetchCafe';
import { useNaverMapsReverseGeocoding } from '@/hooks/useNaverMapsReverseGeocoding';
import { useTodayBusinessHours } from '@/hooks/useTodayBusinessHours';
import theme from '@/theme';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Modal from '../Modal'
import * as Styled from './style';

//TODO: 서버로부터 받을 데이터 형식을 가정한 목데이터
const mockData = {

        cafe: {
            id: 1,
            name: "모카 카페",
            latitude: 37.5665,
            longitude: 126.9780,
            business: [
            {
                days: "월",
                start_time: "09:00",
                end_time: "18:00"
            },
            {
                days: "화",
                start_time: "08:00",
                end_time: "18:00"
            },
            {
                days: "수",
                start_time: "09:00",
                end_time: "18:00"
            },
            {
                days: "목",
                start_time: "09:00",
                end_time: "18:00"
            },
            {
                days: "금",
                start_time: "09:00",
                end_time: "18:00"
            },
            {
                days: "토",
                start_time: "10:00",
                end_time: "17:00"
            },
            {
                days: "일",
                start_time: "휴무",
                end_time: ""
            }
            ],
            in_business: true,
            phone_number: "02-123-4567",
            likes: 42,
            liked: true
        }
};

//TODO: mockData에서 useFetchCafeInfo에서 반환하는 cafeInfo로 변경해야 함.
export default function CafeInfoModal({ onClose, isOpen, id }) {
    const [cafeInfo,] = useRecoilState(cafeInfoState);
    const businessStatus = useBusinessStatus(cafeInfo.in_business);
    const todayHours = useTodayBusinessHours(cafeInfo.business);
    const cafeAddress = useNaverMapsReverseGeocoding(cafeInfo.latitude, cafeInfo.longitude);
    const navigate = useNavigate();
    const [, setLocation] = useRecoilState(locationState);
    //const cafeInfo = useFetchCafeInfo(id); //TODO: 이걸로 적용해야함
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