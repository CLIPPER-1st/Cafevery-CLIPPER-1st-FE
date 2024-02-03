import * as Styled from './style';
import Modal from '../Modal';
import useModal from '@/hooks/useModal';


export default function FilterModal({onClose, isOpen}) {

  return (
    <Modal modalTitle={''} isOpen={isOpen} onClose={onClose} modalType={'Modal'}>
      <Styled.ModalInnerWrapper>
        <Styled.AuthorName>{}</Styled.AuthorName>
        <Styled.GuestBookContent>{}</Styled.GuestBookContent>
      </Styled.ModalInnerWrapper>
    </Modal>
  );
}
