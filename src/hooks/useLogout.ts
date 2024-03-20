import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postLogout } from '@/apis/logout';
import { isAxiosError } from 'axios';
import useToast from '@/hooks/useToast';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const useLogout = () => {
    const queryClient = useQueryClient();
    const { displayToast } = useToast();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => postLogout(),
        onSuccess: async () => {
            // 로그아웃 성공 시 처리
            await queryClient.invalidateQueries();
            displayToast('로그아웃 되었어요.');
            Cookies.remove('accessToken', { path: '/', domain: 'cafevery.site' });
            Cookies.remove('refreshToken', { path: '/', domain: 'cafevery.site' });            
            navigate('/')
        },
        onError: (error) => {
            // 로그아웃 실패 시 처리
            if (isAxiosError(error)) {
                displayToast('로그아웃에 실패했어요.');
                //Cookies.remove('accessToken', { path: '/', domain: 'cafevery.site' });
                //Cookies.remove('refreshToken', { path: '/', domain: 'cafevery.site' });            
            }
            // 기타 에러 처리
            displayToast('로그아웃에 실패했어요.');
            //Cookies.remove('accessToken', { path: '/', domain: 'cafevery.site' });
            //Cookies.remove('refreshToken', { path: '/', domain: 'cafevery.site' });            
        },
    });
};