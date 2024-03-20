import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchSettingUserInfo } from '@/apis/settingUserInfo';

export const useFetchSettingUserInfo = () => {
    const { data } = useSuspenseQuery({
        queryKey: ['settingUserInfo'],
        queryFn: async () => (await fetchSettingUserInfo()),
        staleTime: 600000, // 10분
        gcTime: 300000, // 5분
    });
    return data;
}