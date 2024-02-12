import { LikesList} from '@/interfaces/likes';
import {atom, atomFamily} from 'recoil';

export const likesListState = atomFamily<LikesList | null, { distance: number; startTime: number; endTime: number; searchTerm: string }>({
  key: 'likesListState',
  default: {
      cafes: [ 
        {
          id: 1,
          latitude: 35.9405935,
          longitude: 128.6339386,
          name: "카페카페1",
          address: "어딘가1",
          start_time: "13:00",
          end_time: "22:00",
          likes: 3,
          liked: true,
          in_business: true,
        },
        {
          id: 2,
          latitude: 35.9402835,
          longitude: 128.6339386,
          name: "카페카페2",
          address: "어딘가2",
          start_time: "09:00",
          end_time: "23:00",
          likes: 3,
          liked: false,
          in_business: false,
        },
        {
          id: 3,
          latitude: 35.9350135,
          longitude: 128.6319376,
          name: "카페카페",
          address: "어딘가1",
          start_time: "07:30",
          end_time: "20:00",
          likes: 3,
          liked: true,
          in_business: false,
        },
      ] 
    }
});

export const selectedCafeState = atom<number | null>({
  key: 'selectedCafeState',
  default: null,
});
