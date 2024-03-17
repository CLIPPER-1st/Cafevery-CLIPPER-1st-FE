import * as Styled from './style';

interface ToastProps {
    message: string;
}

function Toast({ message }: ToastProps) {
    return <Styled.ToastContainer>{message}</Styled.ToastContainer>
}

export default Toast;
