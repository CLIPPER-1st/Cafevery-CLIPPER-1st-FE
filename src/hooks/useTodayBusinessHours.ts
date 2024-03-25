import { BusinessHour } from '@/interfaces/cafeInfo';
import { useState, useEffect } from 'react';

export function useTodayBusinessHours(businessHours: BusinessHour[]) {
  // todayHours의 타입도 BusinessHour 인터페이스를 따르도록 설정
  const [todayHours, setTodayHours] = useState<BusinessHour>({ start_time: '', end_time: '' , days:''});

  useEffect(() => {
    if(!businessHours) return;
    const todayRaw = new Date().toLocaleDateString('ko-KR', { weekday: 'long' });
    const today = todayRaw.replace('요일', '');

    const todayBusiness = businessHours.find(business => business.days === today);
    if (todayBusiness) {
      setTodayHours({ start_time: todayBusiness.start_time, end_time: todayBusiness.end_time, days: todayBusiness.days });
    }
  }, [businessHours]);

  return {todayHours};
}
