export interface Location {
    latitude: number;
    longitude: number;
}

export interface LocationType {
    loaded: boolean;
    coordinates?: { lat: number; lng: number };
    error?: { code: number; message: string };
}