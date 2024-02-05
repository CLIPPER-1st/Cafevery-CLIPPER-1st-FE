import { atom } from 'recoil';

export const distanceState = atom<number>({
  key: 'distanceState',
  default: 0.5,
});
