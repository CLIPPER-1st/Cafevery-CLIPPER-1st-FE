import {Likes} from '@/interfaces/likes';
import {atom, selector} from 'recoil';

export const likesState = atom<Likes[]>({
  key: 'likesState',
  default: [],
});

export const searchState = atom({
  key: 'searchState',
  default: '',
});

export const filteredLikesState = selector({
  key: 'filteredLikesState',
  get: ({get}) => {
    const search = get(searchState).toLowerCase();
    const likes = get(likesState);

    return likes.filter(
      (like) =>
        like.name.toLowerCase().includes(search) ||
        like.address.toLowerCase().includes(search),
    );
  },
});
