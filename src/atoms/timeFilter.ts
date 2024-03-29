import { TimeFilterState } from '@/interfaces/timeFilter';
import { atomFamily } from 'recoil';

export const timeFilterState = atomFamily<TimeFilterState, string>({
  key: 'timeFilterState',
  default: (page) => {
    return { minValue: 0, maxValue: 24 };
  },
});
