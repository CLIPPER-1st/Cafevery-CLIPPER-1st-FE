import { useSetRecoilState } from 'recoil';
import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchUserInfo } from '@/apis/userInfo';
import { userInfoState } from '@/atoms/userInfoState';

export const useFetchUserInfo = () => {
    const setUserInfo = useSetRecoilState(userInfoState);

    const { data } = useSuspenseQuery({
        queryKey: ['userInfo'],
        queryFn: async () => (await fetchUserInfo()),
        staleTime: 100000,
        gcTime: 100,
    });
    setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        data: { infos: data }
    }));
    
    return data;
}