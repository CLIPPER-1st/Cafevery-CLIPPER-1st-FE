import { useQuery } from '@tanstack/react-query';
import { cafeInfoQueryKey } from '@/constants/queryKeys';
export const useFetchCafeInfo = (id: number) => {
    const { data: cafeInfo } = useQuery({
        queryKey: cafeInfoQueryKey(id).queryKey,
        queryFn: cafeInfoQueryKey(id).queryFn,
        staleTime: 600000, // 10분
        gcTime: 300000, // 캐시 유지 시간
    });

    return { cafeInfo };
};
