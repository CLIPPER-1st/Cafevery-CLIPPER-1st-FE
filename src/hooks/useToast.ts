import { useRecoilState } from 'recoil';
import { useCallback } from 'react';
import { toastState, ToasterToast } from '@/atoms/toastState';

let toastCount = 0;

function generateToastId() {
    return `toast-${++toastCount}`;
}

export default function useToast() {
    const [toasts, setToasts] = useRecoilState(toastState);

    const displayToast = useCallback((message: string, duration = 3000) => {
        const newToast: ToasterToast = { id: generateToastId(), message, duration };
        setToasts((currentToasts) => [...currentToasts, newToast]);

        setTimeout(() => {
        setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== newToast.id));
        }, duration);
    }, [setToasts]);

    const dismissToast = useCallback((toastId: string) => {
        setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== toastId));
    }, [setToasts]);

    return { toasts, displayToast, dismissToast };
}
