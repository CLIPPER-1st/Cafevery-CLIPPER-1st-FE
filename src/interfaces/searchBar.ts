export interface SearchBarProps {
  children?: React.ReactNode;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  placeholder?: string;
  // New style props
  width?: number;
  position?: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
  value?: string;
  margin?: string;
  maxLength?: number;
  defaultValue?: string;
}

export interface LikeSearchBarProps extends Partial<SearchBarProps> {
  setSearchTerm: (value: string) => void;
}

export interface FavoritePlaceBarProps extends Partial<SearchBarProps> {
}
