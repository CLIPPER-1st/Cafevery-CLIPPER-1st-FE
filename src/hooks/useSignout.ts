import { useMutation, useQueryClient } from '@tanstack/react-query';
import useToast from '@/hooks/useToast';
import { isAxiosError } from 'axios';
import { deleteSignout } from '@/apis/signout';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export const useSignout = () => {
    const queryClient = useQueryClient();
    const { displayToast } = useToast();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: () => deleteSignout(),
        onSuccess: async () => {
            // 로그아웃 성공 시 처리
            await queryClient.invalidateQueries();
            displayToast('회원탈퇴 되었어요.');
            Cookies.remove('accessToken', { path: '/', domain: 'cafevery.site' });
            Cookies.remove('refreshToken', { path: '/', domain: 'cafevery.site' });            
            navigate('/')
        },
        onError: (error) => {
            // 로그아웃 실패 시 처리
            if (isAxiosError(error)) {
                //Cookies.remove('accessToken', { path: '/', domain: 'cafevery.site' });
                //Cookies.remove('refreshToken', { path: '/', domain: 'cafevery.site' });            
                displayToast('회원탈퇴에 실패했어요.');
            }
            // 기타 에러 처리
            //Cookies.remove('accessToken', { path: '/', domain: 'cafevery.site' });
            //Cookies.remove('refreshToken', { path: '/', domain: 'cafevery.site' });            
            displayToast('회원탈퇴에 실패했어요.');
        },
    });
};