import { useState, useEffect } from 'react';
import { convertTime } from '@/utils/convertTime';

export function useBusinessStatus(startTime: string, endTime: string) {
    const [status, setStatus] = useState<string>('');
    const { convertedTime: cafeStartTime } = convertTime(startTime);
    const { convertedTime: cafeEndTime } = convertTime(endTime);
    const currentTime = new Date(); // 현재 시간
    const currentHour = currentTime.getHours(); // 현재 시
    console.log('currentHour', currentHour)
    const currentMinute = currentTime.getMinutes(); // 현재 분
    const { convertedTime: convertedCurrentTime } = convertTime(`${currentHour}:${currentMinute}`); // HH:MM 형태로 변환 후 convertTime 사용
    const isInBusinness = convertedCurrentTime <= cafeEndTime && convertedCurrentTime >= cafeStartTime;

    useEffect(() => {
        setStatus(isInBusinness ? '영업 중' : '영업 종료');
    }, [isInBusinness]);

    return status;
}