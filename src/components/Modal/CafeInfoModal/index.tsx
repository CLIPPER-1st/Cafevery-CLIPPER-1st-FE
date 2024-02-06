import Likebutton from '@/components/Like/LikeButton';
import { useBusinessStatus } from '@/hooks/useBusinessStatus';
import { useNaverMapsReverseGeocoding } from '@/hooks/useNaverMapsReverseGeocoding';
import { useTodayBusinessHours } from '@/hooks/useTodayBusinessHours';
import Modal from '../Modal'
import * as Styled from './style';

//TODO: 서버로부터 받을 데이터 형식을 가정한 목데이터
const mockData = {
    success: true,
    data: {
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
    },
    error: null
};

//TODO: mockData에서 api 커스텀 훅이 반환하는 data로 변경해야 함.
export default function CafeInfoModal({ onClose, isOpen }) {
    const businessStatus = useBusinessStatus(mockData.data.cafe.in_business);
    const todayHours = useTodayBusinessHours(mockData.data.cafe.business);
    const cafeAddress = useNaverMapsReverseGeocoding(mockData.data.cafe.latitude, mockData.data.cafe.longitude);

    return (
        <Modal modalTitle={''} isOpen={isOpen} onClose={onClose} modalType={'Modal'} modalColor={'#32281F'}>
            <Styled.ModalInnerWrapper>
                <Styled.CafeThumb />
                <Styled.CafeAddress>{cafeAddress}</Styled.CafeAddress>
                <Styled.SectionTitle>{mockData.data.cafe.name}</Styled.SectionTitle>
                <Styled.CafeInBusiness>{businessStatus}</Styled.CafeInBusiness>
                <Styled.CafeInfo>{`${todayHours.start_time} - ${todayHours.end_time}`}</Styled.CafeInfo>
                <Styled.CafeInfo>{`☎️ ${mockData.data.cafe.phone_number}`}</Styled.CafeInfo>
                <Styled.CafeInfo>{`🤍 ${mockData.data.cafe.likes}`}</Styled.CafeInfo>
                <Styled.LikeButtonWrapper>
                    <Likebutton id={mockData.data.cafe.id} liked={mockData.data.cafe.liked} />
                </Styled.LikeButtonWrapper>
                <Styled.Line />
                <Styled.SectionTitle>{"운영 시간"}</Styled.SectionTitle>
                <Styled.CafeBusinessHoursWrapper>
                {mockData.data.cafe.business.map(({ days, start_time, end_time }, index) => (
                    <Styled.CafeInfo key={index}>{`${days}: ${start_time} - ${end_time}`}</Styled.CafeInfo>
                ))}
                </Styled.CafeBusinessHoursWrapper>
            </Styled.ModalInnerWrapper>
        </Modal>
    );
}
