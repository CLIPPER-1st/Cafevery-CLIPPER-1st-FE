import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchUserInfo } from '@/apis/userInfo';

export const useFetchUserInfo = () => {

    const { data } = useSuspenseQuery({
        queryKey: ['userInfo'],
        queryFn: async () => (await fetchUserInfo()),
        staleTime: 600000, // 10분
        gcTime: 300000, // 5분
    });
    
    return {data};
}