import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchSettingUserInfo } from '@/apis/SettingUserInfo';

export const useFetchSettingUserInfo = () => {
    const { data } = useSuspenseQuery({
        queryKey: ['settingUserInfo'],
        queryFn: async () => (await fetchSettingUserInfo()),
        staleTime: 100000,
        gcTime: 100,
    });
    return data;
}