import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postLogout } from '@/apis/logout';
import useModal from '@/hooks/useModal';
import { alertModalState } from '@/atoms/modalState';
import { useRecoilState } from 'recoil';
import { isAxiosError } from 'axios';

export const useLogout = () => {
    const { closeModal } = useModal();
    const queryClient = useQueryClient();
    const [alertModal, setAlertModal] = useRecoilState(alertModalState);

    return useMutation({
        mutationFn: () => postLogout(),
        onSuccess: async () => {
            // 로그아웃 성공 시 처리
            await queryClient.invalidateQueries({queryKey: ['userInfo']});
            closeModal();
            setAlertModal({
            isOpen: true,
            message: '로그아웃되었습니다.',
            });
            // 기타 성공 시 처리
            console.log('로그아웃되었습니다.')
        },
        onError: (error) => {
            // 로그아웃 실패 시 처리
            if (isAxiosError(error)) {
            setAlertModal({
                isOpen: true,
                message: '로그아웃 실패했습니다.\n다시 시도해주세요.',
            });
            }
            // 기타 에러 처리
            console.log('로그아웃 실패.')
        },
    });
};