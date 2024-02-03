import * as Styled from './style';
import Modal from '../Modal';
import useModal from '@/hooks/useModal';


export default function FilterModal({onClose, isOpen}) {

  return (
    <Modal modalTitle={''} isOpen={isOpen} onClose={onClose} modalType={'Modal'} modalColor={'#32281F'}>
      <Styled.ModalInnerWrapper>
        <Styled.AuthorName>{"운영 시간"}</Styled.AuthorName>
        <Styled.GuestBookContent>{}</Styled.GuestBookContent>
        <Styled.AuthorName>{"거리"}</Styled.AuthorName>

      </Styled.ModalInnerWrapper>
    </Modal>
  );
}
