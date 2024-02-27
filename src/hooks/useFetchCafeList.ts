import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchCafes } from '@/apis/cafeList';

export const useFetchCafeList = (centerLatitude: number, centerLongitude: number) => {
    
    const { data } = useSuspenseQuery({
        queryKey: ['cafeInfoList', centerLatitude, centerLongitude],
        queryFn: async () => (await fetchCafes(centerLatitude, centerLongitude)),
        staleTime: 100000,
        gcTime: 100,
    });
    console.log("======useSuspenseQuery", data.data.cafes)
    return data.data.cafes;
};