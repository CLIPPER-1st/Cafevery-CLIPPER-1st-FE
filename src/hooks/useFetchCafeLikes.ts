import {fetchCafeLikes} from '@/apis/cafeLike';
import {distanceState} from '@/atoms/distanceFilter';
import {searchTermState} from '@/atoms/input';
import {likesListState} from '@/atoms/likesState';
import {timeFilterState} from '@/atoms/timeFilter';
import {useSuspenseQuery} from '@tanstack/react-query';
import {useLocation} from 'react-router-dom';
import {useRecoilState, useResetRecoilState, useSetRecoilState} from 'recoil';

export const useFetchCafeLikes = () => {
  const nowUrl = useLocation();
  const [{minValue, maxValue}] = useRecoilState(
    timeFilterState(nowUrl.pathname),
  );
  const [distance] = useRecoilState(distanceState(nowUrl.pathname));
  const [searchTerm] = useRecoilState(searchTermState);
  const setLikeState = useSetRecoilState(
    likesListState({
      distance: distance,
      startTime: minValue,
      endTime: maxValue,
      searchTerm: searchTerm,
    }),
  );

  //   TODO: 주석 헤제 해야함
  //   const {data} = useSuspenseQuery({
  //     queryKey: ['cafeLikeList'],
  //     queryFn: async () => await fetchCafeLikes(),
  //     staleTime: 100000,
  //     gcTime: 100,
  //   });

  //   setLikeState((prevLikeState) => ({
  //     ...prevLikeState,
  //     data: {cafes: data},
  //   }));

  //   return data;

  return null;
};
