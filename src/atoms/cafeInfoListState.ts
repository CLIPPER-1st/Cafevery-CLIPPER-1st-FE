import { atomFamily } from 'recoil';
import { ICafeList } from '@/interfaces/cafeInfo';

export const cafeInfoListState = atomFamily<ICafeList | null, { distance: number; startTime: number; endTime: number; }>({ 
    key: 'cafeInfoListState',
    //TODO: 더미 데이터
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
            {
            id: 2,
            latitude: 35.9402835,
            longitude: 128.6339386,
            liked: null,
            start_time: "09:00",
            end_time: "23:00",
            },
            {
            id: 3,
            latitude: 35.9350135,
            longitude: 128.6319376,
            liked: false,
            start_time: "07:30",
            end_time: "20:00",
            }
        ]
    },
});