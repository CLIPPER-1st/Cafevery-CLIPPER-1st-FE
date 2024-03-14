export interface ModalProps {
    isOpen: boolean;
    onClose: (event?: React.MouseEvent) => void;
    children: React.ReactNode;
    modalTitle: string;
    modalType?: 'SmallModal' | 'Modal' | 'SummaryModal' | 'MediumModal'; 
    modalColor?: string;
    color?: string;
    fontSize?: number;
  }

  export interface ModalContentProps extends Partial<ModalProps> {
  }

  
  // show 프로퍼티를 갖는 ModalWrapperProps 인터페이스를 정의
  export interface ModalWrapperProps {
    show: boolean;
    modalType?: 'SmallModal' | 'Modal' | 'SummaryModal' | 'MediumModal';
  }

  export interface ModalButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }

  export interface FilterModalProps extends Partial<ModalProps> {
  }

  export interface CafeInfoModalProps extends Partial<ModalProps> {
    id: number;
  }

  export interface AlertModalProps extends Partial<ModalProps> {}

  export interface ReconfirmAlertModalProps extends Partial<ModalProps> {
    name: string;
    id: number;
  }

  export interface SignoutModalProps extends Partial<ModalProps> {}

  export interface SummaryCafeInfoModalProps extends Partial<ModalProps> {}
