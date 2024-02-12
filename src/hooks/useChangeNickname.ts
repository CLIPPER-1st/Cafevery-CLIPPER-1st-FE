import { useMutation } from '@tanstack/react-query';
import { changeNickname } from '@/apis/changeNickname';

export const useChangeNickname = () => {
    return useMutation({
        mutationFn: (nickname: string) => changeNickname(nickname),
    });
};