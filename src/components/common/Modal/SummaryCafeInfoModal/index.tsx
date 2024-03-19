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
import { useSetRecoilState } from 'recoil';
import { cafeInfoState } from '@/atoms/cafeInfoState';
import { useEffect } from 'react';

export default function SummaryCafeInfoModal({ onClose, isOpen, id }: SummaryCafeInfoModalProps) {
    const {data: cafeInfo, isLoading} = useFetchCafeInfo(1); //TODO: 1이 아니라 id로 변경해야 함.
    const setCafeInfo = useSetRecoilState(cafeInfoState);
    const {todayHours} = useTodayBusinessHours(cafeInfo.cafe.business);
    const businessStatus = useBusinessStatus(todayHours.start_time, todayHours.end_time);
    const cafeAddress = useNaverMapsReverseGeocoding(cafeInfo.cafe.latitude, cafeInfo.cafe.longitude);
    const { isOpen: isCafeInfoModalOpen, openModal: openCafeInfoModal, closeModal: closeCafeInfoModal } = useModal();

    const handleOpenCafeInfoModal = () => {
        openCafeInfoModal();
    }

    useEffect(() => {
        if(cafeInfo && !isLoading) {
            setCafeInfo(cafeInfo.cafe);
        }
    },[isLoading])

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
                            <Styled.SectionTitle>{cafeInfo.cafe.name}</Styled.SectionTitle>
                            <Styled.CafeInBusiness>{businessStatus}</Styled.CafeInBusiness>
                        </Styled.Column>
                    </Styled.Row>
                    <Styled.CafeAddress>{cafeAddress}</Styled.CafeAddress>
                    <Styled.CafeInfo>{`${todayHours.start_time} - ${todayHours.end_time}`}</Styled.CafeInfo>
                    <Styled.CafeInfo>{`🤍 ${cafeInfo.cafe.likes}`}</Styled.CafeInfo>
                    <Styled.LikeButtonWrapper>
                        <Likebutton id={cafeInfo.cafe.id} liked={cafeInfo.cafe.liked} />
                    </Styled.LikeButtonWrapper>
                </Styled.ModalWrapper>
            </Modal>

            {isOpen && (
                <CafeInfoModal 
                    isOpen={isCafeInfoModalOpen}
                    onClose={closeCafeInfoModal}
                />
            )}
        </>
    );
}