import { LocationType } from '@/interfaces/location';
import { useState, useEffect } from 'react';

/** 현재 나의 location 가져오는 hook*/
const useGeolocation = () => {
  const [location, setLocation] = useState<LocationType>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
  });

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setLocation({
        loaded: true,
        error: {
          code: 0,
          message: 'Geolocation not supported',
        },
      });
      return;
    }

    const watcherId = navigator.geolocation.watchPosition(
      (position) => {
        setLocation({
          loaded: true,
          coordinates: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        });
      },
      (error) => {
        setLocation({
          loaded: true,
          error: {
            code: error.code,
            message: error.message,
          },
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );

    return () => navigator.geolocation.clearWatch(watcherId);
  }, []);

  return location;
};

export default useGeolocation;
