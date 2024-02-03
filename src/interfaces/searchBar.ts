export interface SearchBarProps {
    children?: React.ReactNode;
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    placeholder?: string;
  }