import { ILikesList} from '@/interfaces/likes';
import {atom, atomFamily} from 'recoil';

export const likesListState = atomFamily<ILikesList | null, { distance: number; startTime: number; endTime: number; searchTerm: string }>({
  key: 'likesListState',
  default: {
      cafes: [ 
    
      ] 
    }
});

export const selectedCafeState = atom<number | null>({
  key: 'selectedCafeState',
  default: null,
});
