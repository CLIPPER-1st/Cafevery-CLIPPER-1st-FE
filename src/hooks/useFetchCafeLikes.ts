import {fetchCafeLikes} from '@/apis/cafeLike';
import {useSuspenseQuery} from '@tanstack/react-query';

export const useFetchCafeLikes = () => {
  const {data, isSuccess} = useSuspenseQuery({
    queryKey: ['cafeLikeList'],
    queryFn: async () => await fetchCafeLikes(),
    staleTime: 600000, // 10분
    gcTime: 300000, // 5분
  });
  return { data: data.cafes, isSuccess };
};