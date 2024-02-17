import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { deleteSignout } from '@/apis/signout';
import { useMutation } from '@tanstack/react-query';

export const useLoginStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const accessToken = Cookies.get('accessToken');
        const refreshToken = Cookies.get('refreshToken');

        /**액세스 토큰과 리프레시 토큰이 모두 존재하는지 확인하여 로그인 상태 설정 */ 
        if (accessToken && refreshToken) {
        setIsLoggedIn(true);
        } else {
        setIsLoggedIn(false);
        }
    }, []);

        // Cookies.remove('accessToken');
        // Cookies.remove('refreshToken');
        // setIsLoggedIn(false);

    return { isLoggedIn };
}