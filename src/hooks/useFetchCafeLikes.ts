import {fetchCafeLikes} from '@/apis/cafeLike';
import {likesListState} from '@/atoms/likesState';
import {useSuspenseQuery} from '@tanstack/react-query';
import {useSetRecoilState} from 'recoil';

export const useFetchCafeLikes = () => {
  const setLikeState = useSetRecoilState( // Default값이 3, 0, 24, ''이기 때문.
    likesListState({
      distance: 3,
      startTime: 0,
      endTime: 24,
      searchTerm: '',
    }),
  );

  const {data} = useSuspenseQuery({
    queryKey: ['cafeLikeList'],
    queryFn: async () => await fetchCafeLikes(),
    staleTime: 100000,
    gcTime: 100,
  });

  setLikeState((prevLikeState) => ({
    ...prevLikeState,
    data: {cafes: data},
  }));

  return data;
};