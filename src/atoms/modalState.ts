import { AlertModalState } from '@/interfaces/modalState';
import { atom } from 'recoil';

export const alertModalState = atom<AlertModalState>({
    key: 'alertModalState',
    default: {
        isOpen: false,
        message: '',
    },
});