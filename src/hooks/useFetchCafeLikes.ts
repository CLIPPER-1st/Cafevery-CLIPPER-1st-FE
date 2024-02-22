import {fetchCafeLikes} from '@/apis/cafeLike';
import {useSuspenseQuery} from '@tanstack/react-query';

export const useFetchCafeLikes = () => {

  const {data} = useSuspenseQuery({
    queryKey: ['cafeLikeList'],
    queryFn: async () => await fetchCafeLikes(),
    staleTime: 100000,
    gcTime: 100,
  });

  console.log("======useSuspenseQuery", data.data.cafes)

  return data.data.cafes;
};