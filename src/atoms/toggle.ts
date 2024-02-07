import { atomFamily } from 'recoil';

export const toggleState = atomFamily<boolean, string>({
  key: 'toggleState',
  default: (page) => {
    return true;
  },
});
