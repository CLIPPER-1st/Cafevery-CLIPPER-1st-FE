import {fetchCafeLikes} from '@/apis/cafeLike';
import {useSuspenseQuery} from '@tanstack/react-query';

export const useFetchCafeLikes = () => {
  const {data, isSuccess} = useSuspenseQuery({
    queryKey: ['cafeLikeList'],
    queryFn: async () => await fetchCafeLikes(),
    staleTime: 100000,
    gcTime: 100,
  });
  return { data: data.cafes, isSuccess };
};