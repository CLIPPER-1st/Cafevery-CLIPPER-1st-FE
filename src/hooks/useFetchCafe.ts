import { useSetRecoilState } from 'recoil';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchCafeInfo } from '@/apis/cafeInfo';
import { cafeInfoState } from '@/atoms/cafeInfostate';

export const useFetchCafeInfo = (id: number) => {
    const setcafeInfo = useSetRecoilState(cafeInfoState);

    const { data } = useSuspenseQuery({
        queryKey: ['cafeInfo', id],
        queryFn: async () => (await fetchCafeInfo(id)),
        staleTime: 100000,
        gcTime: 100,
    });
    setcafeInfo(data);

    return data;
}