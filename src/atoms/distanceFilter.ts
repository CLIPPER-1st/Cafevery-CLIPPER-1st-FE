import { atom, atomFamily } from 'recoil';

export const distanceState = atomFamily<number, string>({
  key: 'distanceState',
  default: (page) => ( 3 ),
});