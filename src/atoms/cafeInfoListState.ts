import { atom, atomFamily } from 'recoil';
import { ICafeList } from '@/interfaces/cafeInfo';

export const cafeInfoListState = atomFamily<ICafeList | null, { distance: number; startTime: number; endTime: number; }>({ 
    key: 'cafeInfoListState',
    default: {
        cafes: [
            {
            id: 1,
            latitude: 35.9405935,
            longitude: 128.6339386,
            liked: true,
            start_time: "13:00",
            end_time: "22:00",
            },
        ]
    },
});

export const finalFilteredCafeListState = atom<ICafeList | null>({ 
    key: 'finalFilteredCafeListState',
    default: {
        cafes: []
    },
});