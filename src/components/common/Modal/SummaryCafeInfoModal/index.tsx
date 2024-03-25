import Likebutton from '@/components/Like/LikeButton';
import { useBusinessStatus } from '@/hooks/useBusinessStatus';
import useModal from '@/hooks/useModal';
import { useNaverMapsReverseGeocoding } from '@/hooks/useNaverMapsReverseGeocoding';
import { useTodayBusinessHours } from '@/hooks/useTodayBusinessHours';
import theme from '@/theme';
import CafeInfoModal from '../CafeInfoModal';
import Modal from '@/components/common/Modal'
import * as Styled from './style';
import { SummaryCafeInfoModalProps } from '@/interfaces/modal';
import { useFetchCafeInfo } from '@/hooks/useFetchCafe';

export default function SummaryCafeInfoModal({ onClose, isOpen, id }: SummaryCafeInfoModalProps) {
    const { cafeInfo } = useFetchCafeInfo(id);
    const {todayHours} = useTodayBusinessHours(cafeInfo?.business);
    const businessStatus = useBusinessStatus(todayHours.start_time, todayHours.end_time);
    const cafeAddress = useNaverMapsReverseGeocoding(cafeInfo?.latitude, cafeInfo?.longitude);
    const { isOpen: isCafeInfoModalOpen, openModal: openCafeInfoModal, closeModal: closeCafeInfoModal } = useModal();

    const handleOpenCafeInfoModal = () => {
        openCafeInfoModal();
    }

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
                            <Styled.SectionTitle>{cafeInfo?.name}</Styled.SectionTitle>
                            <Styled.CafeInBusiness>{businessStatus}</Styled.CafeInBusiness>
                        </Styled.Column>
                    </Styled.Row>
                    <Styled.CafeAddress>{cafeAddress}</Styled.CafeAddress>
                    <Styled.CafeInfo>{`${todayHours.start_time} - ${todayHours.end_time}`}</Styled.CafeInfo>
                    <Styled.CafeInfo>{`🤍 ${cafeInfo?.likes}`}</Styled.CafeInfo>
                    <Styled.LikeButtonWrapper>
                        <Likebutton id={cafeInfo?.id} liked={cafeInfo?.liked} />
                    </Styled.LikeButtonWrapper>
                </Styled.ModalWrapper>
            </Modal>

            {isCafeInfoModalOpen && (
                <CafeInfoModal 
                    isOpen={isCafeInfoModalOpen}
                    onClose={closeCafeInfoModal}
                    id={id}
                />
            )}
        </>
    );
}