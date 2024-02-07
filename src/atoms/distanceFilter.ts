import { atom, atomFamily } from 'recoil';

export const distanceState = atomFamily<number, string>({
  key: 'timeFilterState',
  default: (page) => ( 0.5 ),
});