import { atom } from 'recoil';
import { Location } from '@/interfaces/location';

export const locationState = atom<Location>({
  key: 'locationState',
  default: {
    latitude: 0,
    longitude: 0,
  },
});

export const myLocationState = atom<Location>({
  key: 'myLocationState',
  default: {
    latitude: 0,
    longitude: 0,
  },
});
