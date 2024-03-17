import { atom } from 'recoil';

export interface ToasterToast {
    id: string;
    message: string;
    duration?: number;
}

export const toastState = atom<ToasterToast[]>({
    key: 'toastState',
    default: [],
});
