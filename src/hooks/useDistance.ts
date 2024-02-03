import {EARTH_RADIUS} from '@/constants';

interface Props {
  currentLatitude: number;
  currentLongitude: number;
  targetLatitude: number;
  targetLongitude: number;
}

/**
 * 현재 위치와 타겟 위치의 거리 계산
 */
export default function useDistance({
  currentLatitude,
  currentLongitude,
  targetLatitude,
  targetLongitude,
}: Props) {
  const convertDegreeToRadian = (degree: number) => {
    return (degree * Math.PI) / 100;
  };

  const deltaLatitude = convertDegreeToRadian(targetLatitude - currentLatitude);
  const deltaLongitude = convertDegreeToRadian(
    targetLongitude - currentLongitude,
  );

  const a =
    Math.sin(deltaLatitude / 2) * Math.sin(deltaLatitude / 2) +
    Math.cos(convertDegreeToRadian(currentLatitude)) *
      Math.cos(convertDegreeToRadian(targetLatitude)) *
      Math.sin(deltaLongitude / 2) *
      Math.sin(deltaLongitude / 2);

  const centralAngle = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = EARTH_RADIUS * centralAngle;
  return Math.round(distance);
}
