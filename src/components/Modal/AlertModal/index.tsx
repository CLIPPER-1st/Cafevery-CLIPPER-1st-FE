import Modal from '@/components/Modal/Modal';
import theme from '@/theme';

export default function AlertModal({onClose, isOpen, content}) {

  
  return (
    <Modal modalTitle={''} isOpen={isOpen} onClose={onClose} modalType={'Modal'} modalColor={theme.colors.white}>
      {content}
    </Modal>
  );
}
