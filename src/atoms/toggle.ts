import { atom, atomFamily } from 'recoil';

export const toggleState = atomFamily<boolean, string>({
  key: 'toggleState',
  default: (page) => {
    return false;
  },
});

export const showSearchBarState = atom<boolean>({
  key: 'showSearchBarState',
  default: false,
});