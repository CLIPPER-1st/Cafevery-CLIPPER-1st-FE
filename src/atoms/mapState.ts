import { atom } from 'recoil';

export const isMapLoadedState = atom<boolean>({
    key: 'isMapLoadedState',
    default: false,
});
