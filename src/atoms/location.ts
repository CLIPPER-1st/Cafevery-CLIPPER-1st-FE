import { atom } from 'recoil';
import { Location } from '@/interfaces/location';

/** 좋아요한 카페 location */
export const cafeLocationState = atom<Location>({
  key: 'cafeLocationState',
  default: {
    latitude: 0,
    longitude: 0,
  },
});

/** 현재 나의 location */
export const myLocationState = atom<Location>({
  key: 'myLocationState',
  default: {
    latitude: 0,
    longitude: 0,
  },
});

/** 지도의 중심 location */
export const mapCenterState = atom<Location>({
  key: 'mapCenterState',
  default: {
    latitude: 0,
    longitude: 0,
  },
});