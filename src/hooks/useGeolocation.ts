import { useState, useEffect } from 'react';

interface LocationType {
  loaded: boolean;
  coordinates?: { lat: number; lng: number };
  heading?: number | null;
  error?: { code: number; message: string };
}

const useGeolocationWithHeading = () => {
  const [location, setLocation] = useState<LocationType>({
    loaded: false,
    coordinates: { lat: 0, lng: 0 },
    heading: null,
  });

  const onSuccess = (position: GeolocationPosition) => {
    setLocation((currentLocation) => ({
      ...currentLocation,
      loaded: true,
      coordinates: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
      heading: position.coords.heading,
    }));
  };

  const onError = (error: GeolocationPositionError) => {
    setLocation((currentLocation) => ({
      ...currentLocation,
      loaded: true,
      error: {
        code: error.code,
        message: error.message,
      },
    }));
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError(new GeolocationPositionError());
      return;
    }

    const watcherId = navigator.geolocation.watchPosition(onSuccess, onError, {
      enableHighAccuracy: true,
    });

    const handleOrientationEvent = (event: DeviceOrientationEvent) => {
      // Ensure alpha is not null before updating state
      if (event.alpha !== null) {
        setLocation((currentLocation) => ({
          ...currentLocation,
          heading: event.alpha, // Use event.alpha for the heading
        }));
      }
    };

    window.addEventListener('deviceorientation', handleOrientationEvent);

    return () => {
      navigator.geolocation.clearWatch(watcherId);
      window.removeEventListener('deviceorientation', handleOrientationEvent);
    };
  }, []);

  return location;
};

export default useGeolocationWithHeading;
