import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchCafes } from '@/apis/cafeList';

export const useFetchCafeList = (centerLatitude: number, centerLongitude: number) => {
    const { data } = useSuspenseQuery({
        queryKey: ['cafeInfoList'],
        queryFn: async () => {
            if (centerLatitude !== 0 && centerLongitude !== 0) {
                return await fetchCafes(centerLatitude, centerLatitude);
            } else {
                return { data: { cafes: [] } };
            }
        },
        staleTime: 600000, // 10분
        gcTime: 300000, // 5분
    });
    return { data };
};
