import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const useLoginStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const accessToken = Cookies.get('accessToken');
        
        if (accessToken) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    return { isLoggedIn };
}