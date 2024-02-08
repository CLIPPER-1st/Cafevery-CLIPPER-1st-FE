import Modal from '@/components/Modal/Modal';
import theme from '@/theme';

export default function AlertModal({onClose, isOpen, ...props}) {

  return (
    <Modal modalTitle={''} isOpen={isOpen} onClose={onClose} modalType={'SmallModal'} modalColor={theme.colors.white} color={theme.colors.darkBrown} fontSize={20} {...props}>
      {props.children}
    </Modal>
  );
}
