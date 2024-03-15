import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchCafeInfo } from '@/apis/cafeInfo';

export const useFetchCafeInfo = (id: number) => {
    const { data } = useSuspenseQuery({
        queryKey: ['cafeInfo', id],
        queryFn: async () => (await fetchCafeInfo(id)),
        staleTime: 100000,
        gcTime: 100,
    });

    return { data };
}