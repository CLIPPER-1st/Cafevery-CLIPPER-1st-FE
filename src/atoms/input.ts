import { atom } from 'recoil';

export const inputState = atom<string>({
  key: 'inputState',
  default: '',
});

export const selectedPlaceNameState = atom<string>({
  key: 'selectedPlaceNameState',
  default: '',
});

export const searchTermState = atom<string>({
  key: 'searchTermState',
  default: ''
});