import { atom } from 'recoil';
import { ILocation } from '@/interfaces/location';

/** 좋아요한 카페 location */
export const cafeLocationState = atom<ILocation>({
  key: 'cafeLocationState',
  default: {
    latitude: 0,
    longitude: 0,
  },
});

/** 현재 나의 location */
export const myLocationState = atom<ILocation>({
  key: 'myLocationState',
  default: {
    latitude: 0,
    longitude: 0,
  },
});

/** 지도의 중심 location */
export const mapCenterState = atom<ILocation>({
  key: 'mapCenterState',
  default: {
    latitude: 0,
    longitude: 0,
  },
});