import { useMutation, useQueryClient } from '@tanstack/react-query';
import useModal from '@/hooks/useModal';
import { alertModalState } from '@/atoms/modalState';
import { useSetRecoilState } from 'recoil';
import { isAxiosError } from 'axios';
import { deleteSignout } from '@/apis/signout';
import Cookies from 'js-cookie';

export const useSignout = () => {
    const { closeModal } = useModal();
    const queryClient = useQueryClient();
    const setAlertModal = useSetRecoilState(alertModalState);

    return useMutation({
        mutationFn: () => deleteSignout(),
        onSuccess: async () => {
            // 로그아웃 성공 시 처리
            await queryClient.invalidateQueries({queryKey: ['userInfo']});
            closeModal();
            setAlertModal({
            isOpen: true,
            message: '회원탈퇴 되었습니다.',
            });
            Cookies.remove('accessToken', { path: '/', domain: 'cafevery.site' });
            Cookies.remove('refreshToken', { path: '/', domain: 'cafevery.site' }); 
        },
        onError: (error) => {
            // 로그아웃 실패 시 처리
            if (isAxiosError(error)) {
            setAlertModal({
                isOpen: true,
                message: '회원탍퇴에 실패했습니다.\n다시 시도해주세요.',
            });
            }
        },
    });
};