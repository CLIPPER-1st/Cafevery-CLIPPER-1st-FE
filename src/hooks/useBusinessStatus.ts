import { useState, useEffect } from 'react';
import { useConvertTime } from './useConvertTime';

export function useBusinessStatus(startTime: string, endTime: string) {
    const [status, setStatus] = useState<string>('');
    const cafeStartTime = useConvertTime(startTime);
    const cafeEndTime = useConvertTime(endTime);
    const currentTime = new Date(); // 현재 시간
    const currentHour = currentTime.getHours(); // 현재 시
    console.log('currentHour', currentHour)
    const currentMinute = currentTime.getMinutes(); // 현재 분
    const convertedCurrentTime = useConvertTime(`${currentHour}:${currentMinute}`) // HH:MM 형태로 컨버팅 후 useConvertTime
    const isInBusinness = convertedCurrentTime <= cafeEndTime && convertedCurrentTime >= cafeStartTime;

    useEffect(() => {
        setStatus(isInBusinness ? '영업 중' : '영업 종료');
    }, [isInBusinness]);

    return status;
}