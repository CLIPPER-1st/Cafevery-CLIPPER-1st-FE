import Modal from '../Modal'
import * as Styled from './style';

// CafeInfoModal 컴포넌트 수정
export default function CafeInfoModal({ onClose, isOpen }) {
    return (
        <Modal modalTitle={''} isOpen={isOpen} onClose={onClose} modalType={'Modal'} modalColor={'#32281F'}>
            <Styled.CafeThumb />
            <Styled.CafeAddress>{"가게 주소"}</Styled.CafeAddress>
            <Styled.SectionTitle>{`${'가게 이름'}`}</Styled.SectionTitle>
            <Styled.CafeInfo>{`${'00:00-23:59'}`}</Styled.CafeInfo>
            <Styled.CafeInfo>{`☎️ ${'02-0000-0000'}`}</Styled.CafeInfo>
            <Styled.CafeInfo>{`🤍 ${0}`}</Styled.CafeInfo>
            <Styled.Line />
            <Styled.SectionTitle>{"운영 시간"}</Styled.SectionTitle>
        </Modal>
    );
}

