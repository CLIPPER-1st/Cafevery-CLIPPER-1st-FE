import { cafeInfoState } from '@/atoms/cafeInfoState';
import { locationState } from '@/atoms/location';
import GoToCafeLocationButton from '@/components/Button/GoToCafeLocationButton';
import Likebutton from '@/components/Like/LikeButton';
import { useBusinessStatus } from '@/hooks/useBusinessStatus';
import { useFetchCafeInfo } from '@/hooks/useFetchCafe';
import useModal from '@/hooks/useModal';
import { useNaverMapsReverseGeocoding } from '@/hooks/useNaverMapsReverseGeocoding';
import { useTodayBusinessHours } from '@/hooks/useTodayBusinessHours';
import theme from '@/theme';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import CafeInfoModal from '../CafeInfoModal';
import Modal from '../Modal'
import * as Styled from './style';

//TODO: useRecoilState에서 useFetchCafeInfo에서 반환하는 cafeInfo로 변경해야 함.
export default function SummaryCafeInfoModal({ onClose, isOpen, id }) {
    const [cafeInfo,] = useRecoilState(cafeInfoState);
    const businessStatus = useBusinessStatus(cafeInfo.in_business);
    const todayHours = useTodayBusinessHours(cafeInfo.business);
    const cafeAddress = useNaverMapsReverseGeocoding(cafeInfo.latitude, cafeInfo.longitude);
    const navigate = useNavigate();
    const [, setLocation] = useRecoilState(locationState);
    const { isOpen: isCafeInfoModalOpen, openModal: openCafeInfoModal, closeModal: closeCafeInfoModal } = useModal();
    //const cafeInfo = useFetchCafeInfo(id); //TODO: 이걸로 적용해야함

    const handleGoToCafeLocation = (latitude: number, longitude: number) => {
        navigate('/');
        setLocation({ latitude: latitude, longitude: longitude });
        onClose();
    }

    const handleOpenCafeInfoModal = () => {
        openCafeInfoModal();
    };

    return (
        <>
            <Modal 
                modalTitle={''} 
                isOpen={isOpen} 
                onClose={onClose} 
                modalType={'SummaryModal'} 
                modalColor={theme.colors.brown} 
                color={theme.colors.textMain} 
                fontSize={20}
            >
                <Styled.ModalWrapper onClick={handleOpenCafeInfoModal}>
                    <Styled.Row>
                        <Styled.CafeThumb />
                        <Styled.Column>
                            <Styled.SectionTitle>{cafeInfo.name}</Styled.SectionTitle>
                            <Styled.CafeInBusiness>{businessStatus}</Styled.CafeInBusiness>
                        </Styled.Column>
                    </Styled.Row>
                    <Styled.CafeAddress>{cafeAddress}</Styled.CafeAddress>
                    <Styled.CafeInfo>{`${todayHours.start_time} - ${todayHours.end_time}`}</Styled.CafeInfo>
                    <Styled.CafeInfo>{`🤍 ${cafeInfo.likes}`}</Styled.CafeInfo>
                    <Styled.LikeButtonWrapper>
                        <Likebutton id={cafeInfo.id} liked={cafeInfo.liked} />
                    </Styled.LikeButtonWrapper>
                </Styled.ModalWrapper>
            </Modal>

            {isOpen && (
                <CafeInfoModal 
                    isOpen={isCafeInfoModalOpen}
                    onClose={closeCafeInfoModal}
                    id={cafeInfo.id}
                />
            )}
        </>
    );
}