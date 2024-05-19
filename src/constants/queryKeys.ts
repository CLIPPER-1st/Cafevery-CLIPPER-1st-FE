import { fetchCafeLikes } from "@/apis/cafeLike"
import { fetchCafeInfo } from '@/apis/cafeInfo';

//카페 리스트 캐시를 업데이트하기 위한 쿼리
export const cafeLikeListQueryKey = {    
    queryKey: ['cafeLikeList'],
    queryFn: async () => await fetchCafeLikes(),
}

//카페 축약 단일 정보 캐시를 업데이트하기 위한 쿼리
export const cafeInfoQueryKey = (cafeId: number) => {
    return { 
        queryKey: ['cafeInfo', cafeId],
        queryFn: () => fetchCafeInfo(cafeId),
    }   
}