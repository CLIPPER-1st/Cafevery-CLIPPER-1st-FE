import { useState, useEffect } from 'react';

interface locationType {
  loaded: boolean;
  coordinates?: { lat: number; lng: number };
  heading?: number | null;
  error?: { code: number; message: string };
}

const useGeolocationWithHeading = () => {
  const [location, setLocation] = useState<locationType>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
    heading: null,
  });

  // 성공에 대한 로직
  const onSuccess = (position: {
    coords: { latitude: number; longitude: number; heading: number | null };
  }) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
      heading: position.coords.heading,
    });
  };

  // 에러에 대한 로직
  const onError = (error: { code: number; message: string }) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      });
      return;
    }

    const watcherId = navigator.geolocation.watchPosition(onSuccess, onError, {
      enableHighAccuracy: true,
    });

    // 위치 추적을 중단할 때 watcherId를 사용하여 clearWatch를 호출합니다.
    return () => navigator.geolocation.clearWatch(watcherId);
  }, []);

  return location;
};

export default useGeolocationWithHeading;
