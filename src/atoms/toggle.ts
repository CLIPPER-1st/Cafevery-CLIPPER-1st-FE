import { atom } from 'recoil';

export const toggleState = atom<boolean>({
  key: 'toggleState',
  default: true,
});

export const toggleShowMapState = atom<boolean>({
  key: 'toggleShowMapState',
  default: false,
});