import React from 'react';
import { useRecoilValue } from 'recoil';
import { toastState } from '@/atoms/toastState';
import Toast from '@/components/common/Toast';
import ReactDOM from 'react-dom';

export default function ToastContainer() {
    const toasts = useRecoilValue(toastState);

    return ReactDOM.createPortal(
        <>
        {toasts.map((toast) => (
            <Toast key={toast.id} message={toast.message} />
        ))}
        </>,
        document.getElementById('toast-root')
    );
};