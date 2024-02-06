export interface ButtonProps {
    //onClick?(): void;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    route?: string;
    children?: React.ReactNode;
    width: number;
    height: number;
    margin?: string;
    padding?: string;
    background?: string;
    disabled?: boolean;
    dark?: boolean;
    type?: string;
    socialType?: string;
    backgroundColor?: string;
    borderRadius?: string;
    color?: string;
    fontSize?: number;
    zIndex?: number;
    position?: string;
    top?: number;
    bottom?: number;
    right?: number;
    left?: number;
  }
  
  export interface LikePageButtonProps extends Partial<ButtonProps> {
  }

  export interface MyPageButtonProps extends Partial<ButtonProps> {
  }

  export interface HomePageButtonProps extends Partial<ButtonProps> {
  }

  export interface CloseButtonProps extends Partial<ButtonProps> {
  }

  export interface GoToMyLocationButtonProps extends Partial<ButtonProps> {
  }

  export interface GetCafeLocationButtonProps extends Partial<ButtonProps> {
  }

  export interface FilterButtonProps extends Partial<ButtonProps> {
  }

  export interface CheckButtonProps extends Partial<ButtonProps> {
  }

  export interface LikeButtonProps extends Partial<ButtonProps> {
    id: number;
    liked: boolean | null;
  }

  export interface GoToCafeLocationButtonProps extends Partial<ButtonProps> {
  }

  export interface TextButtonProps extends Partial<ButtonProps> {
  }

  export interface CloseMapButtonProps extends Partial<ButtonProps> {
  }


  