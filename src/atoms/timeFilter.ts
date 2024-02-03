import { TimeFilterState } from '@/interfaces/timeFilter';
import { atom } from 'recoil';

export const timeFilterState = atom<TimeFilterState>({
  key: 'timeFilterState', // 고유한 상태의 key
  default: { minValue: 0, maxValue: 24 }, // 기본값 설정
});