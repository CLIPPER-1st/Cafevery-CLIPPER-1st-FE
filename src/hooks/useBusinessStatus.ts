import { useState, useEffect } from 'react';

export function useBusinessStatus(inBusiness: boolean) {
    const [status, setStatus] = useState<string>('');

    useEffect(() => {
        setStatus(inBusiness ? '영업 중' : '영업 종료');
    }, [inBusiness]);

    return status;
}
