import {Likes} from '@/interfaces/likes';
import {atom, selector} from 'recoil';

export const likesState = atom<Likes[]>({
  key: 'likesState',
  default: [],
});

export const filteredLikesState = atom<Likes[]>({
  key: 'filteredLikesState',
  default: [],
});

export const selectedCafeState = atom<number | null>({
  key: 'selectedCafeState',
  default: null,
});
