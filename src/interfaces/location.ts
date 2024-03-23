export interface ILocation {
    latitude: number | undefined;
    longitude: number | undefined;
}

export interface LocationType {
    loaded: boolean;
    coordinates?: { lat: number; lng: number };
    error?: { code: number; message: string };
}