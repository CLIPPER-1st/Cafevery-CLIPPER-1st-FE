import { useSetRecoilState } from 'recoil';
import { cafeInfoState } from '@/atoms/CafeInfoState';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchCafes } from '@/apis/cafeList';

export const useFetchCafeList = (centerLatitude: number, centerLongitude: number) => {
    const setCafeState = useSetRecoilState(cafeInfoState);

    const { data } = useSuspenseQuery({
        queryKey: ['cafeInfoList', centerLatitude, centerLongitude],
        queryFn: async () => (await fetchCafes(centerLatitude, centerLongitude)),
        staleTime: 100000,
        gcTime: 100,
    });
    setCafeState(data.data.cafes);

    return data.data.cafes;
}