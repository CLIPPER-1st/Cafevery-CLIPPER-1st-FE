import { useSetRecoilState } from 'recoil';
import { cafeInfoListState } from '@/atoms/cafeInfoListState';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchCafes } from '@/apis/cafeList';

export const useFetchCafeList = (centerLatitude: number, centerLongitude: number) => {
    const setCafeState = useSetRecoilState(cafeInfoListState);

    const { data } = useSuspenseQuery({
        queryKey: ['cafeInfoList', centerLatitude, centerLongitude],
        queryFn: async () => (await fetchCafes(centerLatitude, centerLongitude)),
        staleTime: 100000,
        gcTime: 100,
    });
    setCafeState(data);

    return data;
}