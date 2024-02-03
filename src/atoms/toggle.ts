import { atom } from 'recoil';

export const toggleState = atom<boolean>({
  key: 'toggleState',
  default: true,
});
