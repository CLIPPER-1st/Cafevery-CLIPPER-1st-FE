import {RADIUS} from '@/constants';

interface Props {
  currentLat: number;
  currentLng: number;
  targetLat: number;
  targetLng: number;
}

/**
 * 현재 위치와 타겟 위치의 거리 계산
 */
export default function useDistance({
  currentLat,
  currentLng,
  targetLat,
  targetLng,
}: Props) {
  const rad = (x: number) => {
    return (x * Math.PI) / 180;
  };
  const R = RADIUS;
  const dLat = rad(targetLat - currentLat);
  const dLong = rad(targetLng - currentLng);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(currentLat)) *
      Math.cos(rad(targetLat)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return Math.round(d);
}
