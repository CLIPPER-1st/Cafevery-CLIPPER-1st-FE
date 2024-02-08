import { AlertModalState } from '@/interfaces/modalState';
import { atom } from 'recoil';

export const alertModalState = atom<AlertModalState>({
    key: 'alertModalState',
    default: {
        isOpen: false,
        message: '',
    },
});

export const currentModalState = atom<number | null>({
    key: 'currentModalState',
    default: null, // 기본값으로 null 설정
});