import { useQuery } from '@tanstack/react-query';
import { fetchCafeInfo } from '@/apis/cafeInfo';

export const useFetchCafeInfo = (id: number) => {
    const { data: cafeInfo } = useQuery({
        queryKey: ['cafeInfo', id], // id 포함
        queryFn: () => fetchCafeInfo(id),
        staleTime: 600000, // 10분
        gcTime: 300000, // 캐시 유지 시간 (gcTime 대신 cacheTime 사용)
    });

    return { cafeInfo }; // cafeInfo로 이름 변경하여 반환
};
