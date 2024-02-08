import { atom } from 'recoil';
import { CafeList } from '@/interfaces/cafeInfo';

export const cafeInfoState = atom<CafeList | null>({
    key: 'cafeInfoState',
    //TODO: 더미 데이터
    default: {
        cafes: [
            {
            id: "1",
            latitude: 37.5665,
            longitude: 126.9780,
            liked: true,
            start_time: "2023-01-01T08:00:00",
            end_time: "2023-01-01T22:00:00",
            in_business: true,
            },
            {
            id: "2",
            latitude: 37.5655,
            longitude: 126.9770,
            liked: null,
            start_time: "2023-01-01T09:00:00",
            end_time: "2023-01-01T23:00:00",
            in_business: true,
            },
            {
            id: "3",
            latitude: 37.5645,
            longitude: 126.9760,
            liked: false,
            start_time: "2023-01-01T07:30:00",
            end_time: "2023-01-01T20:00:00",
            in_business: false,
            }
        ]
    },
});
