import { atom } from 'recoil';
import { CafeList } from '@/interfaces/cafeInfo';

export const cafeInfoListState = atom<CafeList | null>({
    key: 'cafeInfoListState',
    //TODO: 더미 데이터
    default: {
        cafes: [
            {
            id: 1,
            latitude: 37.5605,
            longitude: 126.9940,
            liked: true,
            start_time: "2023-01-01T08:00:00",
            end_time: "2023-01-01T22:00:00",
            in_business: true,
            },
            {
            id: 2,
            latitude: 37.5600,
            longitude: 126.9940,
            liked: null,
            start_time: "2023-01-01T09:00:00",
            end_time: "2023-01-01T23:00:00",
            in_business: true,
            },
            {
            id: 3,
            latitude: 37.5595,
            longitude: 126.9940,
            liked: false,
            start_time: "2023-01-01T07:30:00",
            end_time: "2023-01-01T20:00:00",
            in_business: false,
            }
        ]
    },
});
