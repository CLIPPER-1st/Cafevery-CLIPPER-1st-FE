import { atomFamily } from 'recoil';

export const distanceState = atomFamily<number, string>({
  key: 'distanceState',
  default: () => ( 3 ),
});