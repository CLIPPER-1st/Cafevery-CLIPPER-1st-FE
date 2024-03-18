import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchCafeInfo } from '@/apis/cafeInfo';

export const useFetchCafeInfo = (id: number) => {
    const { data } = useSuspenseQuery({
        queryKey: ['cafeInfo', id],
        queryFn: async () => (await fetchCafeInfo(id)),
        staleTime: 600000, // 10분
        gcTime: 300000, // 5분
    });

    return { data: data.data.cafe };
}